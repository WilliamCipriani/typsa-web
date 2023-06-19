import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeadPage from '../components/head'
import styles from '@/styles/index.module.css'
import { Carousel } from 'react-responsive-carousel'


export default function Home() {
  

  return (
    <>
    <HeadPage />   
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div className={`${styles.head_title} `}>
        <img className={`${styles.head_img} d-block w-100`} src="/imagen/inicio/240a6dcdcaa61371fb590740c0dc3091.jpg" alt="background" />
        <div className={styles.text_container}>
          <h1 className={`${styles.title} mb-1`}>TYPSA - PERÚ</h1>
          <hr className={`${styles.barra} mb-4 fw-light`}/>
          <span className={`${styles.spam} mb-1 fs-4`}>Te damos la bienvenida al portal de TYPSA-PERÚ</span>
        </div>
      </div>
      <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
        <img className={`${styles.head_img} d-block w-100`} src="/imagen/inicio/fbd654a85f0a25819ab004b2fd994bbe.jpg" alt="background" width={450} height={550} />
        
      </div>
      <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
        <img className={`${styles.head_img} d-block w-100`} src="/imagen/inicio/313f13fc26f55358c4713a1c8a0722be.png" alt="background"  width={450} height={550}/>
        
      </div>
    </Carousel>


      
    <div className='container-fluid p-0'>
        <div className={`${styles.espacio}`} ></div>

        <section className='d-flex flex-column flex-md-row justify-content-center mt-5 mb-5'>
          <div className='text-center m-2'>
            <div  className='mb-3'>
              <Link href='/quienes-somos' className='text-danger fs-5 fw-bolder' >QUIÉNES SOMOS</Link>
            </div>
            <div className='mx-5'>
              <Image className='img-fluid' src='/imagen/inicio/b55613c3e5af182be01144a3b8947284.jpg' width={450} height={450} alt='quienes-somos-typsa'/>
            </div>
            
          </div>
          <div className='text-center m-2'>
            <div className='mb-3'>
              <Link href='/confiar-typsa' className='text-danger fs-5 fw-bolder'>POR QUÉ CONFIAR EN TYPSA</Link>
            </div>
            <div className='mx-5'>
              <Image className='img-fluid' src='/imagen/inicio/cb188900f4c3dc4ce82382fca8d419b0.jpg' width={450} height={450} alt='quienes-somos-typsa'/>
            </div>
          </div>
        </section>

        <div className={`${styles.espacio}`}> </div>
        <section className={`${styles.video}`}>
          <div className="d-flex justify-content-center align-items-center text-white pt-5 pb-5" >
            <h3>VIDEO DESTACADO</h3>
          </div>
          <div className='pb-5 d-flex justify-content-center'>
            <div className={`${styles.video_container}`}>
              <iframe src="https://www.youtube.com/embed/9fjxwX6O9cU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </section>
        <section className='d-flex flex-column flex-md-row justify-content-center mt-5 mb-5'>
          <div className='text-center m-2'>
            <div className='mb-3'>
              <Link href='/typsa-peru' className='text-danger fs-5 fw-bolder'>TYPSA - PERÚ</Link>
            </div>
            <div className='mx-5'>
              <Image className='img-fluid' src='/imagen/inicio/bd0e3ddf483986064f9d89ea4b8161f1.jpg' width={600} height={405} alt='typsa.-Perú'/>
            </div>
          </div>
          <div className='text-center m-2'>
            <div className='m-3'>
              <Link href='/typsa-mundo' className='text-danger fs-5 fw-bolder'>PRESENCIA MUNDIAL Y CIFRAS CLAVES</Link>
            </div>
            <div className='mx-5'> 
              <Image className='img-fluid' src='/imagen/inicio/943e3cbcf56a30a2cf33cd711bcb0a60.jpg' width={600} height={495} alt='persencia-mundual'/>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.archivos} ${styles.propuesta} d-flex justify-content-center align-items-center text-white border border-white`} >
            <div className='d-flex justify-content-center align-items-center text-white border border-white w-50 h-50 rounded-2'>
              <Link className={`${styles.text} text-decoration-none`} href='/login'>Ofertas</Link>
            </div>
          </div>
          <div className={`${styles.archivos} ${styles.ppt} d-flex justify-content-center align-items-center text-white border border-white`} >
            <div className='d-flex justify-content-center align-items-center text-white border border-danger w-50 h-50 rounded-2'>
              <Link className={`${styles.text_1} text-decoration-none`}  target='_blank' href='https://drive.google.com/file/d/1didXatPn3m_8hi2PO7gZMNPUmyuFdTto/view?usp=sharing= 1bxjr0WHMOb6b3CN4B662e4XimRT2Lviu'>Descargar Presentación Typsa-Perú</Link>
            </div>
          </div>
          <div className={`${styles.archivos} ${styles.propuesta} d-flex justify-content-center align-items-center text-white border border-white`} >
            <div className='d-flex justify-content-center align-items-center text-white border border-white w-50 h-50 rounded-2'>
              <Link className={`${styles.text} text-decoration-none`} target='_blank' href='https://www.typsa.com/'>Site Corporativo</Link>
            </div>
          </div>
          
        </section>
        <section className='m-5'>
            <div className="row justify-content-around g-3">
              <div className="col-sm-12 col-md-4">
                <button type="button" className="btn btn-white fs-5 fw-bolder border border-1 border-dark w-100">
                  <a className='text-decoration-none text-danger' target='_blank' href='https://www.typsa.com/aviso-legal/'>Aviso Legal - Grupo TYPSA</a>
                </button>
              </div>
              <div className="col-sm-12 col-md-4">
                <button type="button" className="btn btn-white fs-5 fw-bolder text-danger border border-dark w-100">
                  <a className='text-decoration-none text-danger' target='_blank' href='https://www.typsa.com/politica-de-privacidad/'>Política de Privacidad - Grupo TYPSA</a>
                </button>
              </div> 
              <div className="col-sm-12 col-md-4">
                <button type="button" className="btn btn-white fs-5 fw-bolder text-danger border border-dark w-100">
                  <a className='text-decoration-none text-danger' target='_blank' href='https://www.typsa.com/politica-de-cookies/'>Política de Cookies - Grupo TYPSA</a>
                </button>
              </div>
            </div>
          </section>

      </div>
    
      
    </>
  )
}
