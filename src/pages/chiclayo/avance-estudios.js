import React from 'react';
import styles from '@/styles/av_estudio.module.css'
import { useEffect, useRef } from "react";
import HeadPage from '@/components/head';

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
      <HeadPage />

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

      <div className={`${styles.espacio}`} ></div>


      <div className={styles.imageContainer}>
          <img className={styles.myImage} src='/imagen/chiclayo/estudios/imagen4.png'/>
      </div>

      <div className={`${styles.espacio}`} >
        <h2 className='m-5 fw-bolder fs-1'>Topografía</h2>
      </div>

      <ImageRow />

      <div className={`${styles.espacio}`} >
        <h2 className='m-5 fw-bolder fs-1'>Hidrologia e Hidraulica</h2>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.myImage} src='/imagen/chiclayo/estudios/imagen9.png'/>
      </div>

      <div className={`${styles.espacio}`} >
        <h2 className='m-5 fw-bolder fs-1'>Paisajismo</h2>      
      </div>

      <div className={styles.imageContainer}> 
        <div>
          <img className={styles.myImage1} src='/imagen/chiclayo/estudios/imagen10.png'/>
        </div>
          <img className={styles.myImage1} src='/imagen/chiclayo/estudios/imagen11.png'/>  
        <div>
        </div> 
      </div>

      




      

    </>
  );
}

export default AvanceEstudios;
