//Leaflet
import { MapContainer, TileLayer, useMap, Popup, Marker, GeoJSON } from 'react-leaflet'
import L from 'leaflet';

//Leaflet styles
import 'leaflet/dist/leaflet.css';
import "leaflet-contextmenu";
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

//Geojson
import { geoJson } from "../../static/mapData";

//Redux
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';

const icon = L.icon({ 
  iconRetinaUrl:iconRetina, 
  iconUrl: iconMarker, 
  shadowUrl: iconShadow 
});

function Home() {
  const marker = useSelector((state: AppState) => state.marker)

  const markerPopup = (kind: string , description : string ) : React.ReactElement => {

    return (
      <>
      <h1>{kind}</h1>
      {description}
      </>
      )
  }

  return (
    <MapContainer
      center={[53.40620525381215, 18.42386625971378]}
      style={{ height: "93.5vh", width: "100wh" }}
      minZoom={12} zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoJson} />
       
       {marker && <Marker position={[marker!.lat, marker!.lng]} icon={icon}><Popup>{markerPopup(marker?.kind, marker?.description)}</Popup></Marker>}

    </MapContainer>
    
  )
}


export default Home