import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/confiar-typsa.module.css'
import HeadPage from '@/components/head'


export default function ConfiarPeru() {
  return (
    <>

    <HeadPage />

    <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}> 


    </div>

      <div className="d-flex justify-content-center text-danger fs-1 fw-bolder mb-5 mt-5" >
          ¿Por qué confiar en Typsa?
      </div>

      <div className='container-fluid p-0 mt-4 '>
        

        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid' src='/imagen/consorcio/d95d517f045f91b97baaaec244442a4b.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5 " style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Fortaleza</spam>
            <p>Por nuestra fortaleza en Perú, con unas oficinas de 1.960 m2 en Miraflores (Lima) , donde trabajan 362 personas y  un laboratorio de calidad de aguas con 1.000 m2 y más de 30.000 ensayos anuales.</p>
            <p>Porque el prestigio de nuestras actuaciones es nuestra mejor tarjeta de visita.</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid'  src='/imagen/consorcio/49ef68551dd87726985fbd51a92437fa.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5 " style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Conocimiento</spam>
            <p>Por nuestro conocimiento del territorio  y el cliente, desde 2001</p>
          </div>


        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid' src='/imagen/consorcio/68212f7bd77b3da81490014f1c203b57.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Solvencia</spam>
            <p>Por nuestra solvencia financiera y técnica</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image  className='img-fluid' src='/imagen/consorcio/b227e690702eaaaf60bd728f30d1e882.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div  className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Capacidad</spam>
            <p>Por la capacidad de movilizar miles de ingenieros de todos los continentes y cientos de expertos internacionales referentes en su sector que apoyarán a nuestro equipo de 362 profesionales peruanos.</p>
          </div>


        </div>

        <div  className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid' src='/imagen/consorcio/bbae5c584da1b762181babc4d6bf5ccb.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA" />
          </div>
          <div className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">Tecnología</spam>
            <p>Porque disponemos de las herramientas tecnológicas de ultima generación</p>
          </div>


        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image  className='img-fluid' src='/imagen/consorcio/f67f4ea0ab30fef0377e16a59f2e9d56.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">BIM</spam>
            <p>Porque somos lideres en desarrollos BIM, inteligencia artifical y realidad aumentada</p>
          </div>


        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3 ">
            <Image className='img-fluid'  src='/imagen/consorcio/7092468791a508b5771ab2b617f7421f.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">Sostenibilidad</spam>
            <p>Porque somos lideres en sostenibilidad</p>
          </div>


        </div>
        <div  className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid' src='/imagen/consorcio/012c24be3e2ccbd10828221884a66d50.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Certificaciones</spam>
            <p>Porque disponemos de certificaciones en calidad, gestión medioambiental, prevención de riesgos, integridad, seguridad de la información, I+D+i y BIM. Además, calificamos nuestros proyectos según criterios ENVISION ó GREENROADS en sostenibilidad</p>
          </div>


        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <Image className='img-fluid'  src='/imagen/consorcio/2fa4c3162f975f01cea118c34dbea563.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div  className="text-start ms-5" style={{maxWidth: '550px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Prestigio</spam>
            <p>Porque el prestigio de nuestras actuaciones a nivel mundial es nuestra mejor carta de presentación.</p>
            <p>Porque hemos fidelizado clientes durante más de 55 años</p>
          </div>
        </div>
   

    </div>


      
    </>
  )
}
