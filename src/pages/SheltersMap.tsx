import React from 'react';
import MapMarker from '../images/Local.svg';
import {Link} from 'react-router-dom';
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

            <div></div>
            <Link to="" className="create-shelter">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default SheltersMap;