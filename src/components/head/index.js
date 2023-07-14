import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/head.module.css'


export default function HeadPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  
  return (
    <>
     
      <nav className={`${styles.mainNav} navbar navbar-expand-lg`} >
        <div className={`container-fluid d-flex justify-content-between ${styles.row}`}>
          <div className={styles.logo_container}>
            <Link href="/" className={`navbar-brand ${styles.logo_link}`}>
              <img src="/imagen/logo-grupo-Typsa-1.png" alt="Logo-Typsa" id="logo"  className={`${styles.logo}`} />
            </Link>
          </div>

          <div onClick={handleMenuClick} className={styles.menuIcon}>
            <div></div>
            <div></div>
            <div></div>
          </div>        
          <div className={`${styles.mainNavMenu} ${isMenuOpen ? styles.openMenu : ''}`} >
            <ul className={`${styles.standardDropdown} ${styles.mainNavDropdown}`}>
              <li className={styles.hassubs}>
                <Link href="/" className={styles.a}>Inicio<i className="fas fa-chevron-down"></i></Link>
                <ul>
                  <li>
                    <Link href="/quienes-somos" className={styles.a}>Quiénes Somos<i className="fas fa-chevron-down"></i></Link>
                  </li>
                  <li><Link href="/confiar-typsa" className={styles.a}>Confiar en TYPSA<i className="fas fa-chevron-down"></i></Link></li>
                  <li><Link href="/typsa-peru" className={styles.a}>TYPSA-PERÚ<i className="fas fa-chevron-down"></i></Link></li>
                  <li><Link href="/typsa-mundo" className={styles.a}>TYPSA en el mundo<i className="fas fa-chevron-down"></i></Link></li>
                  <li><Link href="/capacidad" className={styles.a}>Capacidades Digitales<i className="fas fa-chevron-down"></i></Link></li>
                </ul>
              </li>
              <li className={styles.hassubs}>
                <Link href="#" className={styles.a}>Proyectos<i className="fas fa-chevron-down"></i></Link>
                <ul>
                  <li>
                    <Link href="/chiclayo" className={styles.a}>Chiclayo<i className="fas fa-chevron-down"></i></Link>
                  </li>
                </ul>
              </li>
              <li><Link href="/contacto" className={styles.a}>Contacto<i className="fas fa-chevron-down"></i></Link></li>

              <li>
                <Link href="#"  className={styles.a}>
                  Comunicación<i className="fas fa-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="https://typsa-noticias-peru.blogspot.com/" target='_blank' className={styles.a}>Noticias<i className="fas fa-chevron-down"></i></Link>
                  </li>
                  <li>
                    <Link href="https://articulos-typsa.blogspot.com/" target='_blank' className={styles.a}>Articulos<i className="fas fa-chevron-down"></i></Link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );

}