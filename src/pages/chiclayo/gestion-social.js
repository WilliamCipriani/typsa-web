import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useRef } from 'react';
import HeadPage from '../../components/head'
import styles from '@/styles/chiclayo.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function GestionSocial() {
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
          <ImageCard src="/imagen/chiclayo/social/social9.png" alt="Descripción de imagen 1" text="COLEGIO DE INGENIEROS DE LAMBAYEQUE" />
          <ImageCard src="/imagen/chiclayo/social/social7.png" alt="Descripción de imagen 2" text="MUNICIPALIDAD DE PIMENTELs" />
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

    const imgRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      imgRef.current.style.transform = "scale(1.2)";
    } else {
      imgRef.current.style.transform = "scale(1)";
    }
  };

    return (
      <>
      <HeadPage />
      <ImageRow />
  
      </>
    )
  }