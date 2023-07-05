
import React from 'react';
import styles from '@/styles/innova-tecno.module.css'
import Link from 'next/link';
import { useEffect, useRef } from "react";

const InnovacionTecnologia = () => {

  const imgRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      imgRef.current.style.transform = "scale(1.2)";
    } else {
      imgRef.current.style.transform = "scale(1)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`${styles.head_title} `}>
        <img
          ref={imgRef}
          className={`${styles.head_img} d-block w-100`}
          src="/imagen/chiclayo//innova-tecno/imagen17.png"
          alt="background"
        />
        <div className={`${styles.titleContainer} `}>
          <h1>Innovación y Tecnología</h1>
        </div>
      </div>
      
      <div className={styles.container}>
        
          <div className={styles.leftSide}>
            <div className={styles.leftContainer}>
              <h4 className='fw-bolder mt-5 ms-2'>Cliente:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Autoridad Para La Reconstrucción Con Cambios - ARCC</p>

              <h4 className='fw-bolder mt-5 ms-2'>Contrato:</h4>
              <p className=' mt-3 ms-3 fst-italic'>NEC 03 Opción A</p>

              <h4 className='fw-bolder mt-5 ms-2'>Modalidad:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Contrato A Suma Alzada Con Listado De Actividades</p>

              <h4 className='fw-bolder mt-5 ms-2'>Plazo de Ejecución::</h4>
              <p className=' mt-3 ms-3 fst-italic'>24 meses</p>

              <h4 className='fw-bolder mt-5 ms-2'>Fin de Contrato:</h4>
              <p className=' mt-3 ms-3 fst-italic'>29 de diciembre de 2024</p>

              <h4 className='fw-bolder mt-5 ms-2'>Presupuesto de las obras:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Según perfil unos 921,000.000.00 de soles</p>

              <h4 className='fw-bolder mt-5 ms-2'>Mantenimiento y operación:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Según perfil unos 2,900,000.00 de soles de forma anual</p>

              <button className={styles.backButton}>
                <Link href="/chiclayo" className={styles.link}>
                  Volver atrás
                </Link>
              </button>
            </div>
            
          </div>
        
          <div className={styles.rightSide}>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>Almacenamiento y Regulación</h3>
              </div>
              <div className={styles.contentContainer} >
                <div  className={styles.textContainer}>
                  <ul>
                      <li>66 tanques de retención</li>
                      <li>5 mil metros de bermas filtrantes</li>
                      <li>66 parques filtrantes</li>  
                  </ul>
                </div>
                <div className={styles.imageTextContainer }>
                    <div className={`${styles.imageContainer} ${styles.spaceBetween}`}>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen13.png'/>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen12.png'/>
                    </div>
                </div>
                
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>Estructuras de recolección y control:</h3>
              </div>
              <div className={styles.contentContainer} >
                <div  className={styles.textContainer}>
                  <ul>
                      <li>154.56 km de colectores principales</li>
                      <li>135.04 km de subcolectores pluviales</li>
                      <li>2245 buzones</li>
                      <li>Mejoramiento de drenes agrícolas 3000, 3100, 3110, 3200, 3400, 4000, 4300, 400</li>
                      <li>Construcción de 07 estaciones de bombeo</li>  
                  </ul>
                </div>
                <div className={styles.imageTextContainer }>
                    <div className={`${styles.imageContainer} ${styles.spaceBetween}`}>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen26.png'/>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen25.png'/>
                    </div>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>Trabajos Complementarios - VUELO LIDAR</h3>
              </div>
              <div className={styles.contentContainer} >
                <div className={styles.imageTextContainer }>
                    <div className={`${styles.imageContainer} ${styles.spaceBetween}`}>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen28.png'/>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen29.png'/>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen30.png'/>
                      <img className={styles.smallImage} src='/imagen/chiclayo/innova-tecno/imagen31.png'/>
                    </div>
                </div>
              </div>
            </div>
            

            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>¿Cuáles son las metas de ciudades y comunidades sostenibles?</h3>
              </div>
              <div  className={styles.imageTextContainer}>
                <div  className={styles.textContainer1}>
                  <ul>
                      <li>Objetivo 1: Poner fin a la pobreza</li>
                      <li>Objetivo 2: Hambre y seguridad alimentaria.</li>
                      <li>Objetivo 3: Salud.</li> 
                      <li>Objetivo 4: Educación.</li>
                      <li>Objetivo 5: Igualdad de género y empoderamiento de la mujer.</li>
                      <li>Objetivo 6: Agua y saneamiento.</li> 

                  </ul>
                </div>

                <div className={styles.imageTextContainer}>
                  <div className={styles.imageContainer}>
                    <img className={styles.smallImage1} src='/imagen/chiclayo/innova-tecno/imagen15.png'/>
                  </div>
                
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>¿Cuáles son los principios para una ciudad sostenible?</h3>
              </div>

              <div className={styles.imageTextContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.smallImage1} src='/imagen/chiclayo/innova-tecno/imagen16.png'/>
                </div>
                <div  className={styles.textContaine1}>
                  <ul>
                      <li>Reducir las emisiones de CO2.</li>
                      <li>Emplear fuentes de eficiencia energética y de energías renovables.</li>
                      <li>Generar y mantener espacios verdes en las ciudades.</li> 
                      <li>Incentivar la movilidad urbana y el transporte público entre los ciudadanos.</li>
                  </ul>
                </div>
                
              </div>
            </div>
            </div>
            
            
          </div>
        
      
      </>
  );
};

export default InnovacionTecnologia;