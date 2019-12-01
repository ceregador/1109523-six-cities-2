import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import propTypes from './prop-types';

const OffersMap = ({cityCoordinates, offersCoordinates}) => {
  const mapRef = useRef();

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const zoom = 12;

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

    const markers = offersCoordinates.map((coord) => {
      return leaflet.marker(coord, {icon});
    });

    leaflet.layerGroup(markers).addTo(map);
  });

  return <div id="map" ref={mapRef} style={{height: `800px`}}/>;
};

OffersMap.propTypes = propTypes;

export default OffersMap;

