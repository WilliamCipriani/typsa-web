import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef } from 'react';
import HeadPage from '../../components/head'
import styles from '@/styles/chiclayo.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function Chiclayo() {
    const divRef = useRef([]);

    const items = [
      { id: 1,src:'proyecto', title: 'Información de proyecto', image: '/imagen/chiclayo/info-proyecto.png' },
      { id: 2,src:'avance-estudios', title: 'Avance de los Estudios', image: '/imagen/chiclayo/avance-estudios.jpg' },
      { id: 3,src:'gestion-social', title: 'Gestion Social', image: '/imagen/chiclayo/social/social1.png' },
      { id: 4,src:'innovacion-tecnologica', title: 'Innovación y Tecnología', image: '/imagen/chiclayo/innovacion-tecnologica.jpg' },
      { id: 5,src:'fotos-videos', title: 'Fotos y Videos', image: '/imagen/chiclayo/portada2.png' },
    ];

    const ImageCard = ({ src, alt, text }) => (
      <div className={styles.imageCard}>
        <div className={styles.imageWrapper}>
            <img src={src} alt={alt} className={styles.image}/>
        </div>
            <p>{text}</p>
        </div>
    );

    const ImageRow = () => (
      <div className={styles.imageRow}>
          <ImageCard src="/imagen/chiclayo/social/social3.png" alt="Descripción de imagen 1" text="Socialización del Proyecto de Drenaje Pluvial a dirigentes del PPJ Villa Hermosa – I Sector" />
          <ImageCard src="/imagen/chiclayo/social/social6.png" alt="Descripción de imagen 2" text="Socialización del Proyecto de Drenaje Pluvial a dirigentes del PPJ Las Flores de la Pradera" />
          <ImageCard src="/imagen/chiclayo/social/social4.png" alt="Descripción de imagen 3" text="Coordinación con la Pte. de la Federación de Pueblos Jóvenes de José Leonardo Ortiz " />
          <ImageCard src="/imagen/chiclayo/social/social2.png" alt="Descripción de imagen 1" text="Socialización de las actividades de Geotecnia a vecinos del parque San Charvel en 9 de Octubre" />
          <ImageCard src="/imagen/chiclayo/social/social5.png" alt="Descripción de imagen 2" text="Reunión con dirigentes del tercer sector de La Victoria y representante del Frente de Defensa de la Victoria" />
          <ImageCard src="/imagen/chiclayo/social/social1.png" alt="Descripción de imagen 3" text="Reunión con representantes de la Junta Vecinal del sector de Patazca – Chiclayo." />
      </div>
    );

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
              <span className='ms-5 mt-3 fs-1'>Diseño Integral del Drenaje Pluvial de Chiclayo</span>
              <div style={{height: '50px'}}></div>

            <div className={`${styles.container}`}>
            {items.map((item) => (
                <Link href={`/chiclayo/${item.src.toLowerCase().replace(/\s+/g, '-')}`} key={item.id}>
                  <div ref={(el) => divRef.current[item.id - 1] = el} className={`${styles.minContainer}`}>
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
              <p className={`${styles.paragraph}`}>
                El proyecto más grande de drenaje urbano del Perú favorecerá a los distritos de <span className="fw-bolder"> Chiclayo, José Leonardo Ortiz, La Victoria y Pimentel </span> frente a posibles inundaciones generadas por lluvias. La Autoridad para la Reconstrucción con Cambios (ARCC) y la empresa consultora <span className="fw-bolder">Técnica y Proyectos S.A. - TYPSA</span> vienen desarrollando diferentes trabajos técnicos y sociales para el Diseño Integral de Drenaje Pluvial, el cual protegerá a más de <span className="fw-bolder">300 mil ciudadanos</span> directamente.
              </p>
            </div>
          </div>


        <section>
          <div className={`${styles.espacio1} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
            <span className='ms-5 fs-1'>Equipo en acción</span>
          </div>  

          <div className='container-fluid d-flex flex-lg-row flex-column align-items-center justify-content-center text-center'>
            
            <div className={`col-lg-6 d-flex justify-content-center align-items-center ${styles.narrowWidth}`}>
              <p className={`ms-lg-5 ${styles.textJustify} ${styles.paragraph}`}>TYPSA cuenta con un equipo de profesionales altamente capacitados y con vasta experiencia en el modelamiento, diseño y planificación de proyectos hidráulicos como sistemas de drenaje pluvial. Su expertise se basa en el uso de personal multidisciplinario, integrando la experiencia de diversas áreas de la ingeniería, como la <span className="fw-bolder">hidrología, hidráulica, geotecnia, topografía</span>, así como la gestión ambiental y paisajística para plantear soluciones sostenibles y resilientes.</p>
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
          
          <ImageRow />
        </section>



        
  
      </>
    )
  }
  