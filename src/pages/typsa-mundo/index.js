import Image from 'next/image'
import styles from '@/styles/typsa-mundo.module.css'
import HeadPage from '@/components/head'


export default function TypsaMundo() {
  return (
    <>
      <HeadPage />
      <div className={`${styles.head_title} `}>
        <img className={`${styles.head_img} d-block w-100`} src="/imagen/Presencia-mundial/ef659f3a16b88818466f95c83b2bbae7.jpg" alt="background" />
        <div className={styles.text_container}>
          <h1 className={`${styles.title} mb-1`}>TYPSA en el mundo</h1>
        </div>
      </div>

      <div>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`} >
          <h3 className='ms-5'>Capacidad constructiva en los países de actuación</h3>
        </div>
        <div className=' d-flex justify-content-center align-items-center flex-column text-center w-75 mx-auto m-5 '>
          <p >Uno de los pilares de nuestra estrategia empresarial es estar cerca de nuestros clientes y conectados al conocimiento global. Esto nos permite aportar soluciones de ingeniería de consultoría de vanguardia y adaptarlas a las capacidades, recursos y prioridades de nuestros clientes.</p>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column text-start  w-75 mx-auto mt-4'>
          <div className='mt-3'>
            <span className='text-danger fw-bolder fs-5'>1. Presencia local:​</span>
            <p>Comprender los retos y las capacidades de nuestros clientes y orientarles sobre la mejor manera de realizar sus inversiones.</p>
          </div>
          <div className='mt-3'>
            <span className='text-danger fw-bolder fs-5'>2. Conocimiento global:​​</span>
            <p>Aportando la experiencia de proyectos de todo el mundo, ampliando las opciones y aprovechando las lecciones aprendidas.</p>
          </div>
          <div className='mt-3'>
            <span className='text-danger fw-bolder fs-5'>3. Aplicando estándares internacionales:​​</span>
            <p>Guiar nuestras soluciones por normas internacionales en términos de excelencia técnica, calidad, gestión y sostenibilidad.​</p>
          </div>
          <div className='mt-3'>
            <span className='text-danger fw-bolder fs-5'>4. Utilización de herramientas de colaboración en línea:​​</span>
            <p>Para fomentar la participación, la colaboración y la transferencia de conocimientos entre los equipos de expertos.</p>
          </div>
        </div>
      </div>

      <div>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center fs-3 fw-bolder`} >
          <h3 className='ms-5'>Mapa Distribución de Producción por área geográfica</h3>
        </div>
        
        <div>
          <div className='d-flex justify-content-center'>
              <img className='img-fluid' src='/imagen/Presencia-mundial/e17447e32655efa0dab1b5bc1e45096c.jpg'  alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='img-fluid' src='/imagen/Presencia-mundial/9a9186eb850668dd9658fe1045b5b721.jpg'  alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className='d-flex justify-content-center text-danger fs-1 fw-bolder mt-5 mb-5'>
            <h4>Evolución de la producción, contratación y cartera de trabajo del grupo</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='d-flex img-fluid' src='/imagen/Presencia-mundial/015d2af9418396617ed33c2d8a62e93a.jpg'  alt="Fundación-Grupo-TYPSA"/>
          </div>
          <div className='d-flex justify-content-center text-danger fs-1 fw-bolder mt-5 mb-5'>
            <h4>Evolución de la producción, contratación y cartera de trabajo del grupo</h4>
          </div>
        </div>
      </div>
      
      
    </>
  )
}
