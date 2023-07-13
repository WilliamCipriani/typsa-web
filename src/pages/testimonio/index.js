import { useState } from 'react'
import styles from '@/styles/testimonio.module.css'
import testimonios from '../../../public/data/datosTestimonio.json'
import HeadPage from '@/components/head'


export default function Testimonios() {

    return (

        <>
            <HeadPage />

            <div className={`${styles.head_title} `}>

                <img className={`${styles.head_img} d-block w-100`} src="https://www.clinicacta.com/wp-content/uploads/2016/07/Clinica-CTA-testimonios-min.jpg" alt="background" />

            </div>

            <div className={styles.container}>

                <h1>¿Qué dicen nuestros empleados?</h1>

                <div className={styles.grid}>

                {testimonios.map((testimonio, index) => (

                <TestimonioCard key={index} testimonio={testimonio} />

                ))}

                </div>

            </div>

        </>

    );

  }


  function TestimonioCard({ testimonio }) {

    const [mostrarCompleto, setMostrarCompleto] = useState(false);

    return (

        <div className="card">

            <h2>{testimonio.nombre}</h2>

            <p>{testimonio.puesto}</p>

            <iframe src={testimonio.video} width="100%" height="auto"></iframe>

            <p>{mostrarCompleto ? testimonio.testimonio : `${testimonio.testimonio.substring(0, 0)}...`}</p>

            {testimonio.testimonio.length > 100 && (

                <button className={styles.button} onClick={() => setMostrarCompleto(!mostrarCompleto)}>

                {mostrarCompleto ? 'Ver menos' : 'Ver más'}

                </button>

            )}        

        </div>
    );

}