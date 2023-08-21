import { useEffect, useRef, useState } from 'react';
import { Point, Location } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../../const';
import leaflet, { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: Location;
  points: Point[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

function useMap(mapRef: React.MutableRefObject<null>, city: Location) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city, mapRef]);

  return map;
}

function useMarkers(map: leaflet.Map | null, points: Point[]) {
  if (map) {
    const markerLayer = layerGroup().addTo(map);
    points.forEach((point) => {
      const marker = new Marker({
        lat: point.latitude,
        lng: point.longitude,
      });

      marker
        // .setIcon(
        //   selectedPoint !== undefined && point.title === selectedPoint.title
        //     ? currentCustomIcon
        //     : defaultCustomIcon
        // )
        .setIcon(defaultCustomIcon)
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }
}

export function Map({ city, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMarkers(map, points);

  return <section className="cities__map map" ref={mapRef} />;
}
