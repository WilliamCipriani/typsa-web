import React from 'react';
import styles from '@/styles/fotos.module.css'
import Link from 'next/link';
import { useEffect, useRef } from "react";
import Image from 'next/image';

const FotosVideos = () => {

  const imgRef = useRef(null);

  const images = [
    '/imagen/chiclayo/fotos/DRONE1.jpg',
    '/imagen/chiclayo/fotos/DRONE4.jpg',
    '/imagen/chiclayo/fotos/DRONE5.jpg',
    '/imagen/chiclayo/fotos/DRONE6.jpg',
    '/imagen/chiclayo/fotos/DRONE7.jpg',
    '/imagen/chiclayo/fotos/DRONE8.jpg',
    
    // Agrega más imágenes aquí si lo deseas
  ];


  return (
    <>
     <div className={`${styles.head_title}`}>
          <video className={`${styles.head_img}`} autoPlay muted loop>
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>
          <div className={styles.text_container}>
          
          </div>
      </div>  
      
      <div className={styles.container}>
        
          <div className={styles.leftSide}>
            <div className={styles.leftContainer}>
              <h4 className='fw-bolder mt-5 ms-2'>Cliente:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Autoridad Para La Reconstrucción Con Cambios - ARCC</p>

              <h4 className='fw-bolder mt-5 ms-2'>Modalidad:</h4>
              <p className=' mt-3 ms-3 fst-italic'>Contrato A Suma Alzada Con Listado De Actividades</p>

              <h4 className='fw-bolder mt-5 ms-2'>Plazo de Ejecución::</h4>
              <p className=' mt-3 ms-3 fst-italic'>24 meses</p>

              <h4 className='fw-bolder mt-5 ms-2'>Fin de Contrato:</h4>
              <p className=' mt-3 ms-3 fst-italic'>29 de diciembre de 2024</p>

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
              <h3 className={styles.title}>GALERIA FOTOGRÁFICA</h3>
              <p className='fs-4 text-danger fw-bolder'>Trabajos de Topografía en el centro histório de Chiclayo</p>
            </div>
            <div className={styles.gridContainer}>
            {images.map((image, index) => {
              // Si la imagen es la primera o está en el medio de la grilla, añade la clase 'largeImage'
              const isLargeImage = index === 0 || Math.floor(images.length / 2) === index;
              return (
                <img
                  key={index}
                  className={`${styles.gridImage} ${isLargeImage ? styles.largeImage : ''}`}
                  src={image}
                  alt={`Imagen ${index + 1}`}
                />
              );
            })}
            </div>
            </div>
                        
          </div>
        
      </div>

    </>
  );
};

export default FotosVideos;