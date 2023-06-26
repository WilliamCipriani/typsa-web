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

          <div className={`${styles.head_title_equipo} `}>

              <img className="d-block w-70`" src="/imagen/chiclayo/equipo1.png" width={900} height={450}/>
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
            
            <div className={`${styles.head_title_equipo} `}>
                <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/equipo5.png" alt="background" width={400} height={600}/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/equipo2.png" alt="background" width={400} height={600} />
            </div>
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/equipo3.png" alt="background"  width={400} height={600}/>
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
                <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/poblador2.png" alt="background" width={450} height={540}/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/pobladores.png" alt="background" width={430} height={530} />
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
                <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/arcc2.png" alt="background" width={450} height={530}/>
            </div>
            
            <div className={`${styles.head_title_equipo} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
              <img className={`${styles.head_img_equipo} d-block w-70`} src="/imagen/chiclayo/arcc1.png" alt="background" width={450} height={530} />
            </div>
           
          </Carousel>

          </div>

        </section>
        
      </>
    )
  }
  