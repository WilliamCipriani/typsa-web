import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef } from 'react';
import HeadPage from '../../components/head'
import styles from '@/styles/chiclayo.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function Chiclayo() {
    const divRef = useRef([]);

    const items = [
      { id: 1, title: 'Información de Proyecto', image: '/imagen/chiclayo/imagen1.png' },
      { id: 2, title: 'Avance de los Estudios', image: '/imagen/chiclayo/avance-estudios.jpg' },
      { id: 3, title: 'Gestion Social', image: '/imagen/chiclayo/imagen3.png' },
      { id: 4, title: 'Innovación y Tecnología', image: '/imagen/chiclayo/innovacion-tecnologica.jpg' },
      { id: 5, title: 'Fotos y Videos', image: '/imagen/chiclayo/portada2.png' },
    ];

    useEffect(() => {
      divRef.current.forEach((div) => {
        div.style.height = `${div.offsetWidth}px`;
      });
    }, []);

    return (
      <>
        <HeadPage />

        <div className={`${styles.head_title}`}>
          <video className={`${styles.head_img}`} autoPlay muted loop>
            <source src="/video/video_chiclayo.mp4" type="video/mp4" />
          </video>
          <div className={styles.text_container}>
          
          </div>
        </div>  

        <section>
          <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
              <span className='ms-5 fs-1'>Drenaje Pluvial de Chiclayo</span>
              <div style={{height: '50px'}}></div>

            <div className={`${styles.container}`}>
              {items.map((item) => (
                <Link href="/" >
                <div key={item.id} ref={(el) => divRef.current[item.id - 1] = el}className={`${styles.minContainer}`}>
                  <div className={`${styles.imageContent}`}>
                    <h2 className={`${styles.titleContent}`}>{item.title}</h2>
                    <img src={item.image} alt={`Imagen ${item.id}`} />
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className={`${styles.container_video}`}>
            <div className={`${styles.video}`} >
              <iframe className={`${styles.iframe}`} src="https://player.vimeo.com/video/840100397?badge=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="VIDEO TYPSA FINAL"></iframe>
            </div>

            <div className={`${styles.text_video}`} >
              <p>
                El proyecto más grande de drenaje urbano del Perú favorecerá a los distritos de Chiclayo, José Leonardo Ortiz, La Victoria y Pimentel frente a posibles inundaciones generadas por lluvias. La Autoridad para la Reconstrucción con Cambios (ARCC) y la empresa consultora Técnica y Proyectos S.A. - TYPSA vienen desarrollando diferentes trabajos técnicos y sociales para el Diseño Integral de Drenaje Pluvial, en el ámbito urbano de cuatro distritos de la provincia de Chiclayo, el cual protegerá a más de 300 mil ciudadanos.
El proyecto desarrolla la solución integral definitiva a los problemas de inundaciones generados por lluvias, con el objetivo de garantizar la protección de la población con un adecuado acceso a los servicios de drenaje pluvial en el ámbito urbano de los distritos de Chiclayo, José Leonardo Ortiz, La Victoria y Pimentel.
              </p>
            </div>
          </div>


        <section>
          <div className={`${styles.espacio1} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
            <span className='ms-5 fs-1'>Equipo en acción</span>
          </div>  

          <div className='container-fluid d-flex flex-lg-row flex-column align-items-center justify-content-center text-center'>
            
            <div className={`col-lg-6 d-flex justify-content-center align-items-center ${styles.narrowWidth}`}>
              <p className={`ms-lg-5 ${styles.textJustify}`}>TYPSA cuenta con un equipo de profesionales altamente capacitados y con vasta experiencia en el modelamiento, diseño y planificación de proyectos hidráulicos como sistemas de drenaje pluvial. Su expertise se basa en el uso de personal multidisciplinario, integrando la experiencia de diversas áreas de la ingeniería, como la hidrología, hidráulica, geotecnia, topografía, así como la gestión ambiental y paisajística para plantear soluciones sostenibles y resilientes.</p>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <Carousel
                className={`${styles.head_container}`}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <div className={`${styles.head_title_equipo} container-fluid d-flex justify-content-center align-items-center`}>
                    <img  src="/imagen/chiclayo/equipo5.png" alt="background"   layout='responsive'/>
                </div>

                <div className={`${styles.head_title_equipo} container-fluid d-flex justify-content-center align-items-center`}>
                  <img  src="/imagen/chiclayo/equipo2.png" alt="background"  layout='responsive'/>
                </div>

                <div className={`${styles.head_title_equipo} container-fluid d-flex justify-content-center align-items-center`}>
                  <img  src="/imagen/chiclayo/equipo3.png" alt="background"    layout='responsive'/>
                </div>
              </Carousel>
            </div>

          </div>

          <div className={`${styles.espacio1} d-flex flex-column justify-content-center fs-3 fw-bolder `}>
            <span className='ms-5 fs-1'>Socialización del Proyecto</span>
          </div>

        </section>

        
  
      </>
    )
  }
  