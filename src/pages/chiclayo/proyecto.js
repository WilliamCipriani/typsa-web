import React from 'react';
import styles from '@/styles/proyecto.module.css'
import Link from 'next/link';
import { useEffect, useRef } from "react";

const InformacionProyectos = () => {

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
          src="/imagen/chiclayo/portada2.png"
          alt="background"
        />
        <div className={`${styles.titleContainer} `}>
          <h1>Información de Proyecto</h1>
        </div>
      </div>
      
      <div className={styles.container}>
        
          <div className={styles.leftSide}>
            <div className={styles.leftContainer}>
              <h4 className='fw-bolder mt-5 ms-2'>Cliente:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Autoridad Para La Reconstrucción Con Cambios - ARCC</p>

              <h4 className='fw-bolder mt-5 ms-2'>CUI:</h4>
              <p  className=' mt-3 ms-3 fst-italic'>2545188</p>

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
                <h3 className={styles.title}>EQUIPO INVOLUCRADO EN EL DISEÑO</h3>
              </div>
              <div className={styles.imageContainer}>
                <img className={styles.smallImage} src='/imagen/chiclayo/proyecto/imagen1.png'/>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>ALTERNATIVA ESCOGIDA EN EL PERFIL</h3>
              </div>
              <div className={styles.imageTextContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.smallImage} src='/imagen/chiclayo/proyecto/imagen2.png'/>
                </div>
                <div className={styles.textContainer}>
                  <ul>
                    <li>Alta complejidad y de gran envergadura</li>
                    <li>Sistema mixto de recolección superficial y subterráneo</li>
                    <li>Colectores pluviales que descargan en drenes agrícolas</li>
                    <li>Complementado con SUDS</li>
                    <li>Componente no estructural O&M</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>PRINCIPALES TIPOS DE ESTRUCTURAS Y METASO</h3>
              </div>
              <div className={styles.txtContainer}>
                <ol>
                  <li className='fw-bolder'>Estructuras de recolección y control</li>
                  <p>5560 sumideros (3,350 Sumideros Tipo 01 y 2,210 Sumideros Tipo 02), 4559 rejillas, canaletas de concreto (210 km), cunetas (85 km), 1433 unidades de calidad de agua.</p>
                  <li className='fw-bolder'>Almacenamiento y regulación</li>
                  <p>66 tanques de retención (162,432.00 m2), 4 bermas filtrantes (5.4 km), 66 parques filtrantes (196,045.00 m2).</p>
                  <li className='fw-bolder'>Estructuras de Evaluación y/o desarga</li>
                  <p>Mejoramiento de 25 estructuras de descarga previstas en los drenes agrícolas 3000, 3100, 3110, 3200, 3400, 4000, 4300, 4400 y dren FAP (aprox. 4,486.00 m2), mejoramiento de la sección hidráulica de drenes agrícolas con concreto armado, geoceldas de concreto y trapezoidal de tierra (50.5 km) y la construcción de 07 estaciones de bombeo de aguas pluviales (7,516.00 m3).</p>
                  <li className='fw-bolder'>Estructuras de Transporte</li>
                  <p>Dentro de las áreas de escurrimiento se plantean estructuras de transporte conformadas por 155 km de colectores principales (incl. colector pluvial en vía alterna –avenida Chiclayo), subcolectores pluviales (135 km) y 2,245 cámaras de inspección o buzones</p>
                </ol>
              </div>
            </div>
            
          </div>
        
      </div>

    </>
  );
}

export default InformacionProyectos;
