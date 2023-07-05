import Image from 'next/image'
import Link from 'next/link';
import { Nav, Navbar , Container, NavDropdown  } from 'react-bootstrap';
import styles from '@/styles/head.module.css'

const navItems = [
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/confiar-typsa', label: 'Confiar en TYPSA' },
  { href: '/typsa-peru', label: 'Typsa-Perú' },
  { href: '/typsa-mundo', label: 'Typsa en el Mundo' },
  { href: '/capacidad', label: 'Capacidades Digitales' },
];

const navItems2 = [
  { href: '/chiclayo', label: 'Chiclayo' },
]

export default function HeadPage() {
    
    return (
      <>
       <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        
          <div className={`container-fluid d-flex justify-content-between ${styles.nav_container}`}>
            <div className={styles.logo_container}>
              <Link href="/" className={`${styles.nav_brand} navbar-brand`}> 
                <img src="/imagen/logo-grupo-Typsa-1.png" width={50} height={50} alt="Logo-Typsa" className={styles.logo}/>
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
              <ul className={`navbar-nav ${styles.nav_links} ms-auto`}>
                <li className="nav-item mx-2 d-flex ">
                  <Link href="/" className={`${styles.nav_link}  nav-link`}>
                    Inicio
                  </Link>
                  <NavDropdown title="" id="basic-nav-dropdown" className={`${styles.nav_menu}`}>
                    {navItems.map((item, index) => (
                      <NavDropdown.Item key={index}>
                        <Link href={item.href} className={`${styles.nav_menu_item} ${styles.nav_link} nav-link`}>
                            {item.label}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </li>
                <li className="nav-item mx-2 d-flex ">
                  <Link href="/" className={`${styles.nav_link}  nav-link`}>
                    Proyecto
                  </Link>
                  <NavDropdown title="" id="basic-nav-dropdown" className={`${styles.nav_menu}`}>
                    {navItems2.map((item, index) => (
                      <NavDropdown.Item key={index}>
                        <Link href={item.href} className={`${styles.nav_menu_item} ${styles.nav_link} nav-link`}>
                            {item.label}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </li>
                <li className="nav-item mx-2 d-flex ">
                  <Link href="/contacto" className={`${styles.nav_link}  nav-link`}>
                    Contacto
                  </Link>
                  
                </li>
                <li className="nav-item mx-2 d-flex ">
                  <Link href="https://typsa-noticias-peru.blogspot.com" target="_blank" className={`${styles.nav_link}  nav-link`}>
                    Artículos
                  </Link>
                  
                </li>
                {/* Aquí puedes agregar los demás elementos del menú principal */}
              </ul>
            </div>
          </div>
        </nav>
            
      </>
    );

}