import styles from '@/styles/capacidad.module.css'
import HeadPage from '../../components/head'

export default function CapacidadDigital() {

    return (
      <>
        <HeadPage /> 

        <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
          <h1 className={`${styles.title} mb-1 text-dark`}>Capacidad digital</h1>
          <hr className={`${styles.barra} mb-4 fw-light`}/>
          
        </div>
    
      
        <section >
          <div className="d-flex justify-content-center align-items-center text-danger fw-bolder pt-5 pb-5" >
            <h3 className='fs-1'>Servicios Digitales</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <video controls style={{ width: '958px', height: '559px' }}>
              <source src='/video/03-ServiciosDigitales.mp4' type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>
          </div>
        </section>

        <section >
          <div className="d-flex justify-content-center align-items-center text-danger  fw-bolder pt-5 pb-5" >
            <h3 className='fs-1'>Realidad Aumentada</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <video controls style={{ width: '958px', height: '559px' }}>
              <source src='/video/3-ADT-RealidadVirtual-C.mp4' type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>
          </div>
        </section>

        <section >
          <div className="d-flex justify-content-center align-items-center text-danger pt-5 pb-5" >
            <h3 className='fs-1'>Power BI</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <video controls style={{ width: '958px', height: '559px' }}>
              <source src='/video//07-POWERBI.mp4' type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>
          </div>
        </section>

        <section > 
          <div className="d-flex justify-content-center align-items-center text-danger fw-bolder pt-5 pb-5" >
            <h3 className='fs-1'>Big Data</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <video controls style={{ width: '958px', height: '559px' }}>
              <source src='/video/08-OficinaDelDato.mp4' type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>
          </div>
        </section>

        
      
        
      </>
    )
  }