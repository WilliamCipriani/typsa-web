import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import HeadPage from '../../components/head'
import styles from '@/styles/chiclayo.module.css'
import { Carousel } from 'react-responsive-carousel'

export default function Chiclayo() {
    return (
      <>
        <HeadPage />

       
        
        <div className={`${styles.head_title} `}>
            <img className={`${styles.head_img} `} src="/imagen/chiclayo/portada2.png" alt="background" />
            <div className={styles.text_container}>
              <h1 className={`${styles.title} `}>Chiclayo</h1>
              
            </div>
        </div> 

        <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
            <span className='ms-5 fs-1'>Drenaje Pluvial de Chiclayo</span>
          </div>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <iframe src="https://player.vimeo.com/video/840100397?badge=0" frameBorder="0" allow="autoplay; fullScreen; picture-in-picture" allowfullscreen style={{ width: '100%', height: '100%' }} title="VIDEO TYPSA FINAL" />
            </div>

          </div>
          
           

        <section>
          <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
            <span className='ms-5 fs-1'>Cronograma</span>
          </div>

          <div>
            <div className='d-flex justify-content-center'>
                <img className='img-fluid' src='/imagen/chiclayo/organigrama-chiclayo.jpg' width={1154} height={1154} alt="Fundación-Grupo-TYPSA" />
            </div>
          </div>
    

        </section> 

        <section>
          <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`}>
            <span className='ms-5 fs-1'>Equipo</span>
          </div>  

          <div className="container mt-5 mb-5">
            <div className="row">
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center col-lg-6'>
                <img className="d-block w-70" src="/imagen/chiclayo/equipo1.png" width={640} height={350} alt="Equipo-Chiclayo"/>
            </div>

            <div className='col-lg-6 '>
              <p className={`ms-5 mt-3 fs-4 ${styles.textJustify}`}>Contamos con profesionales altamente capacitados y con amplia experiencia en el diseño, planificación y ejecución de sistemas de drenaje pluvial. Trabajamos de la mano con expertos en ingeniería civil, hidrología y gestión ambiental para garantizar soluciones sostenibles y eficientes.</p>
            </div>
            </div>
          </div>

          <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder `}>
            <span className='ms-5 fs-1'>Equipo en acción</span>
          </div>

          <Carousel
            className={`${styles.head_container} mt-5`}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
                <img className={`${styles.head_img_equipo}`} src="/imagen/chiclayo/equipo5.png" alt="background" layout='responsive'/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} `} src="/imagen/chiclayo/equipo2.png" alt="background" layout='responsive'/>
            </div>
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} `} src="/imagen/chiclayo/equipo3.png" alt="background"  layout='responsive'/>
            </div>
          </Carousel>

        </section>

        
        <section className="mb-5">
          <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder mt-5`}>
            <span className='ms-5 fs-1'>Socialización</span>
          </div>

          

          <div>
            <div className="text-danger fs-1 fw-bold mt-4 ms-5">
              Pobladores
            </div>

            <Carousel
            className={`${styles.head_container} mt-5`}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
            >
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
                <img className={`${styles.head_img_equipo}`} src="/imagen/chiclayo/poblador2.png" alt="background"  layout='responsive'/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} `} src="/imagen/chiclayo/pobladores.png" alt="background"  layout='responsive'/>
            </div>
            
          </Carousel>

            
          </div>

          <div>
            <div className="text-danger fs-1 fw-bold mt-4 ms-5">
              ARCC
            </div>
            <Carousel
          className={`${styles.head_container} mt-5`}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
                <img className={`${styles.head_img_equipo}`} src="/imagen/chiclayo/arcc2.png" alt="background" layout='responsive'/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} `} src="/imagen/chiclayo/arcc1.png" alt="background" layout='responsive' />
            </div>
           
          </Carousel>

          </div>

        </section>
        
      </>
    )
  }
  