

import React from 'react';

//Leaflet
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON, useMapEvents } from 'react-leaflet'
import L from 'leaflet';

//Leaflet styles
import 'leaflet/dist/leaflet.css';
import "leaflet-contextmenu";
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

//Geojson
import { geoJson } from "../../static/mapData";
import { useDispatch } from 'react-redux';
import { COORD_TYPE } from '../../store/CoordReducer';

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow
});

type Props = {
  setLatlng: React.Dispatch<React.SetStateAction<boolean>>;
}

function MapBox() {
  const [latlngState, setLatlng] = React.useState<any | null>([0, 0])
  const dispatch = useDispatch();

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setLatlng(e.latlng)
        const {lat, lng} = e.latlng
        dispatch({
          type: COORD_TYPE,
          payload: {
            lat: lat,
            lng: lng
          }
        });
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[53.40620525381215, 18.42386625971378]}
      style={{ height: "93.5vh", width: "100wh" }}
      minZoom={12} zoom={12}
    >
      <LocationFinderDummy />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoJson} />
      <Marker position={latlngState} icon={icon}>
      </Marker>


    </MapContainer>
  )
}


export default MapBox