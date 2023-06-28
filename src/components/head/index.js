import Image from 'next/image'
import Link from 'next/link';
import { Nav, Navbar , Container, NavDropdown  } from 'react-bootstrap';
import styles from '@/styles/head.module.css'



export default function HeadPage() {
  
  
    return (
      <>
       <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
          <div className="container-fluid d-flex justify-content-between">
            <a href="/" className="navbar-brand">
              <img src="/imagen/logo-grupo-Typsa-1.png" width={50} height={50} alt="Logo-Typsa" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav me-auto d-flex">
                <li className="nav-item mx-2">
                  <a href="/" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/quienes-somos" className="nav-link">Quiénes somos</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/confiar-typsa" className="nav-link">Confiar en TYPSA</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/typsa-peru" className="nav-link">TYPSA - PERÚ</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/typsa-mundo" className="nav-link">TYPSA en el mundo</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/capacidad" className="nav-link">Capacidades Digitales</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/chiclayo" className="nav-link">Proyecto</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/chiclayo" className="nav-link">Chiclayo</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/contacto" className="nav-link">Contacto</a>
                </li>
                <li className="nav-item mx-2">
                  <a href="/login" className="nav-link">Oferta</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            
      </>
    );

}