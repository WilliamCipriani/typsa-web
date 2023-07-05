import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/social.module.css'
import Link from 'next/link';


export default function GestionSocial() {
  const divRef = useRef([]);
  const imgRef = useRef(null);

  const items = [
    { id: 1, src: 'proyecto', title: 'Información de proyecto', image: '/imagen/chiclayo/info-proyecto.png' },
    { id: 2, src: 'avance-estudios', title: 'Avance de los Estudios', image: '/imagen/chiclayo/avance-estudios.jpg' },
    { id: 3, src: 'gestion-social', title: 'Gestion Social', image: '/imagen/chiclayo/social/social1.png' },
    { id: 4, src: 'innovacion-tecnologica', title: 'Innovación y Tecnología', image: '/imagen/chiclayo/innovacion-tecnologica.jpg' },
    { id: 5, src: 'fotos-videos', title: 'Fotos y Videos', image: '/imagen/chiclayo/portada2.png' },
  ];

  const ImageCard = ({ src, alt, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const imageStyle = {
      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    };

    return (
      <div
        className={styles.imageCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.imageWrapper}>
          <img src={src} alt={alt} className={styles.image} style={imageStyle} />
        </div>
        <p>{text}</p>
      </div>
    );
  };

  const ImageRow = () => (
    <div className={styles.imageRow}>
      <ImageCard src="/imagen/chiclayo/social/social9.png" alt="Descripción de imagen 1" text="COLEGIO DE INGENIEROS DE LAMBAYEQUE" />
      <ImageCard src="/imagen/chiclayo/social/social7.png" alt="Descripción de imagen 2" text="MUNICIPALIDAD DE PIMENTEL" />
      <ImageCard src="/imagen/chiclayo/social/social8.png" alt="Descripción de imagen 3" text="MUNICIPALIDAD DE JOSE LEONARDO ORTIZ" />
      <ImageCard src="/imagen/chiclayo/social/social10.png" alt="Descripción de imagen 1" text="MUNICIPALIDAD DE LA VICTORIA" />
      <ImageCard src="/imagen/chiclayo/social/social11.png" alt="Descripción de imagen 2" text="MUNICIPALIDAD PROVINCIAL DE CHICLAYO" />
    </div>
  );

  useEffect(() => {
    divRef.current.forEach((div) => {
      div.style.height = `${div.offsetWidth}px`;
    });
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      imgRef.current.style.transform = 'scale(1.2)';
    } else {
      imgRef.current.style.transform = 'scale(1)';
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
          src="/imagen/chiclayo/social/social6.png"
          alt="background"
        />
        <div className={`${styles.titleContainer} `}>
          <h1>Gestion Social</h1>
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
          <ImageRow />
          </div>
        </div>
    </div>
      
    </>
  );
}
