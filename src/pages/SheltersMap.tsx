import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import MapMarker from "../images/Local.svg";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

import "../styles/pages/shelters-map.css";

interface Shelter {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function SheltersMap() {
  const [shelters, setShelters] = useState<Shelter[]>([]);

  console.log(shelters);

  useEffect(() => {
    api.get("shelters").then((response) => {
      setShelters(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Happy Logo" />

          <h2>Escolha um abrigo no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :&#41;</p>
        </header>
        <footer>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>

      <Map
        center={[-5.8090475, -35.2285085]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {shelters.map((shelter) => {
          return (
            <Marker
              key={shelter.id}
              icon={mapIcon}
              position={[shelter.latitude, shelter.longitude]}
            >
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxWidth={240}
              >
                {shelter.name}
                <Link to={`/shelters/${shelter.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/shelters/create" className="create-shelter">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default SheltersMap;
