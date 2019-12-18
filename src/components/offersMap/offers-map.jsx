import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from './prop-types';

const OffersMap = ({cityCoordinates, offersCoordinates, activeOfferId, className}) => {
  const mapRef = useRef();
  const markersRef = useRef();
  const isComponentUpdate = useRef(false);

  const zoom = 12;
  const icon = leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [30, 30]
  });
  const activeIcon = leaflet.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [30, 30]
  });

  const highlightCurrentOfferMarker = () => {
    markersRef.current
          .find((marker) => marker.options.offerId === activeOfferId)
          .setIcon(activeIcon);
  };
  const paintOverMarkers = () => {
    markersRef.current.forEach((m) => m.setIcon(icon));
  };

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: cityCoordinates,
      zoom,
      scrollWheelZoom: false,
      marker: true
    });

    map.setView(cityCoordinates, zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
      .addTo(map);

    const markers = offersCoordinates.map((coordinates) => {
      return leaflet.marker(
          coordinates.coordinates,
          {
            icon,
            offerId: coordinates.offerId
          });
    });

    leaflet.layerGroup(markers).addTo(map);
    markersRef.current = markers;

    if (activeOfferId) {
      highlightCurrentOfferMarker();
    }

    return () => {
      map.off();
      map.remove();
    };
  }, [cityCoordinates, offersCoordinates]);

  useEffect(() => {
    if (isComponentUpdate.current) {
      if (activeOfferId) {
        paintOverMarkers();
        highlightCurrentOfferMarker();
      } else {
        paintOverMarkers();
      }
    }
    isComponentUpdate.current = true;
  }, [activeOfferId]);

  return <section className={className} id="map" ref={mapRef}/>;
};

OffersMap.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId
});

export default connect(mapStateToProps, null)(OffersMap);

