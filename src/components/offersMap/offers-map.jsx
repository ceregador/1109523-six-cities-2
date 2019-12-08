import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {offersCoordinatesSelector} from '../../selectors/offers-coordinates-selector';
import propTypes from './prop-types';

const OffersMap = ({cityCoordinates, offersCoordinates, activeOfferId}) => {
  const mapRef = useRef();
  const markersRef = useRef();
  const isComponentUpdate = useRef(false);

  const zoom = 12;
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const activeIcon = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
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

    return () => {
      map.off();
      map.remove();
    };
  }, [cityCoordinates, offersCoordinates]);

  useEffect(() => {
    if (isComponentUpdate.current) {
      if (activeOfferId) {
        markersRef.current.forEach((m) => m.setIcon(icon));
        markersRef.current
          .find((marker) => marker.options.offerId === activeOfferId)
          .setIcon(activeIcon);
      } else {
        markersRef.current.forEach((m) => m.setIcon(icon));
      }
    }
    isComponentUpdate.current = true;
  }, [activeOfferId]);

  return <div id="map" ref={mapRef} style={{height: `800px`}}/>;
};

OffersMap.propTypes = propTypes;

const mapStateToProps = (state) => ({
  offersCoordinates: offersCoordinatesSelector(state),
  activeOfferId: state.activeOfferId
});

export default connect(mapStateToProps, null)(OffersMap);

