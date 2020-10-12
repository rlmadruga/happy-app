import React from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from '../images/Local.svg';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/shelters-map.css';

function SheltersMap() {
    return(
        <div id="page-map"> 
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy Logo"/>

                    <h2>Escolha um abrigo no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :&#41;</p>
                </header>
                <footer>
                    <strong>Natal</strong>
                    <span>Rio Grande do Norte</span>
                </footer>
            </aside>

            <Map 
                center={[-5.8090475,-35.2285085]} 
                zoom={13} 
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
            </Map> 

            <Link to="" className="create-shelter">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default SheltersMap;