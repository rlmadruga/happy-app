import React from  'react';
import {Link} from 'react-router-dom';
import '../styles/pages/landing.css';
import LogoImg from '../images/Logo.svg';
import { FiArrowRight} from 'react-icons/fi';

function Landing() {
    return(
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={LogoImg} alt="Happy Logo"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite abrigos e mude o dia de muitas crianças.</p>
          </main>
          <div className="location">
            <strong>Natal</strong>
            <span>Rio Grande do Norte</span>
          </div>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26}  color="rgba(0,0,0, 0.6)"/>
          </Link>
        </div>
      </div>
    );
}

export default Landing;