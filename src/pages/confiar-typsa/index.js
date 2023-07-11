import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/confiar-typsa.module.css'
import HeadPage from '@/components/head'


export default function ConfiarPeru() {
  return (
    <>

    <HeadPage />

      <div className={`${styles.head_title} `}>
          <img className={`${styles.head_img} d-block w-100`} src="/imagen/consorcio/25dd93d8e12b4a37db5bfc826d95396d.jpg" alt="background" />
          
      </div>

      <div className={`${styles.title} d-flex justify-content-center text-danger fs-1 fw-bolder mb-5 mt-5`} >
          ¿Por qué confiar en Typsa?
      </div>

      <div className='container-fluid'>
      
        <div className="d-flex justify-content-center text-center  mb-5 flex-column flex-lg-row">
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3 mx-5 ms-1">
            <img className={styles.img_fluid} src='/imagen/consorcio/d95d517f045f91b97baaaec244442a4b.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5 " style={{maxWidth: '450px', overflowY: 'auto'}}>
            <h4 className="text-danger fs-2 fw-bolder">Fortaleza</h4>
            <p>Por nuestra fortaleza en Perú, con unas oficinas de 1.960 m2 en Miraflores (Lima) , donde trabajan 362 personas y  un laboratorio de calidad de aguas con 1.000 m2 y más de 30.000 ensayos anuales.</p>
            <p>Porque el prestigio de nuestras actuaciones es nuestra mejor tarjeta de visita.</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mb-5 flex-column flex-lg-row">
          <div className="d-flex justify-content-center align-items-center mt-2 mb-3 mx-5 ms-1">
            <img className={styles.img_fluid}  src='/imagen/consorcio/49ef68551dd87726985fbd51a92437fa.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5 " style={{maxWidth: '450px', overflowY: 'auto'}}>
            <h4 className="text-danger fs-2 fw-bolder">Conocimiento</h4>
            <p>Por nuestro conocimiento del territorio  y el cliente, desde 2001</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center flex-column flex-lg-row">
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3 mx-5 ms-1">
            <img className={styles.img_fluid} src='/imagen/consorcio/68212f7bd77b3da81490014f1c203b57.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <h4 className="text-danger fs-2 fw-bolder">Solvencia</h4>
            <p>Nuestra competencia técnica es otro pilar fundamental en nuestra operación. Contamos con un equipo de expertos altamente capacitados y apasionados en su campo</p>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
          <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
            <img  className={styles.img_fluid} src='/imagen/consorcio/b227e690702eaaaf60bd728f30d1e882.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div  className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Capacidad</spam>
            <p>Nuestra estabilidad financiera nos permite invertir en el futuro, continuamente mejorando nuestros productos y servicios para beneficio de nuestros clientes.</p>
          </div>

        </div>

        <div  className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
            <img className={styles.img_fluid} src='/imagen/consorcio/bbae5c584da1b762181babc4d6bf5ccb.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA" />
          </div>
          <div className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">Tecnología</spam>
            <p>Porque disponemos de las herramientas tecnológicas de ultima generación</p>
          </div>
        </div>
        
        <div className="d-flex justify-content-center text-center flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center align-items-center mt-3 mb-3 mx-5 ms-1">
            <img  className={styles.img_fluid} src='/imagen/consorcio/f67f4ea0ab30fef0377e16a59f2e9d56.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">BIM</spam>
            <p>Porque somos lideres en desarrollos BIM, inteligencia artifical y realidad aumentada</p>
          </div>

        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center align-items-center mb-3 mx-5 ms-1">
            <img className={styles.img_fluid}  src='/imagen/consorcio/7092468791a508b5771ab2b617f7421f.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam  className="text-danger fs-2 fw-bolder">Sostenibilidad</spam>
            <p>Estamos profundamente comprometidos con la sostenibilidad y hemos emergido como líderes en este importante campo.</p>
          </div>

        </div>
        <div  className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <img className='img-fluid' src='/imagen/consorcio/012c24be3e2ccbd10828221884a66d50.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Certificaciones</spam>
            <p>Porque disponemos de certificaciones en calidad, gestión medioambiental, prevención de riesgos, integridad, seguridad de la información, I+D+i y BIM. Además, calificamos nuestros proyectos según criterios ENVISION ó GREENROADS en sostenibilidad</p>
          </div>

        </div>
        <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row align-items-center">
          <div className="d-flex justify-content-center  mb-3">
            <img className='img-fluid'  src='/imagen/consorcio/2fa4c3162f975f01cea118c34dbea563.jpg' width={482} height={260} alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div  className="text-start ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
            <spam className="text-danger fs-2 fw-bolder">Prestigio</spam>
            <p>Porque el prestigio de nuestras actuaciones a nivel mundial es nuestra mejor carta de presentación.</p>
            <p>Porque hemos fidelizado clientes durante más de 55 años</p>
          </div>
        </div>
    </div>

    </>
  )
}
