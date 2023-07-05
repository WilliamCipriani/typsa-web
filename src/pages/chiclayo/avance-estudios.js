import React from 'react';
import styles from '@/styles/av_estudio.module.css'
import { useEffect, useRef } from "react";
import Link from 'next/link';


const AvanceEstudios = () => {

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
        <ImageCard src="/imagen/chiclayo/estudios/imagen18.png" alt="Descripción de imagen 1" text="Medición red primaria punto de control LAM01215" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen6.png" alt="Descripción de imagen 2" text="Medición red primaria punto de control LAM01216" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen19.png" alt="Descripción de imagen 3" text="Medición red secundaria punto de control CH02" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen7.png" alt="Descripción de imagen 1" text="Medición red secundaria punto de control CH07" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen20.png" alt="Descripción de imagen 2" text="Trabajos de batimetría en el Dren 2000" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen23.png" alt="Descripción de imagen 3" text="Trabajos de batimetría en el Dren 3000" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen22.png" alt="Descripción de imagen 2" text="Levantamiento de obras de arte Dren 3000" />
        <ImageCard src="/imagen/chiclayo/estudios/imagen21.png" alt="Descripción de imagen 3" text="Trabajos de batimetría Dren Chilape" />
    </div>
  );

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
          src="/imagen/chiclayo/estudios/imagen24.png"
          alt="background"
        />
        <div className={`${styles.titleContainer} `}>
          <h1>Avances de los Estudios</h1>
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

              <h4 className='fw-bolder mt-5 ms-2'>Plazo de Ejecución:</h4>
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

              <div className={styles.imageContainer}>
                <img className={styles.smallImage} src='/imagen/chiclayo/estudios/imagen4.png'/>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>TOPOGRAFÍA</h3>
              </div>
              <ImageRow />
            </div>
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>HIDROLOGIA E HIDRAULICA</h3>
              </div>
              <div className={styles.imageContainer}>
                <img className={styles.smallImage} src='/imagen/chiclayo/estudios/imagen9.png'/>
              </div>
            </div>
{/** 
            <div className={styles.box}>
              <div>
                <h3 className={styles.title}>PAISAJISMO</h3>
              </div>
              <div className={styles.imageContainer}> 
                <div>
                  <img className={styles.smallImage1} src='/imagen/chiclayo/estudios/imagen10.png'/>
                </div>
                  <img className={styles.smallImage1} src='/imagen/chiclayo/estudios/imagen11.png'/>  
                <div>
                </div> 
              </div>
            </div>
            
  */}           
          </div>
        
      </div>

    </>
  );
}

export default AvanceEstudios;
