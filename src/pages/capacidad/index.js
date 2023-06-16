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
           <div className=' w-100 pb-5 d-flex justify-content-center'>
            <iframe width="958" height="559" src="https://www.youtube.com/embed/yNdAWd2gbrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </div>
          </div>
        </section>

        <section >
          <div className="d-flex justify-content-center align-items-center text-danger  fw-bolder pt-5 pb-5" >
            <h3 className='fs-1'>Realidad Aumentada</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className=' w-100 pb-5 d-flex justify-content-center'>
            <iframe width="958" height="559" src="https://www.youtube.com/embed/XRN6NOCEFvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </section>

        <section >
          <div className="d-flex justify-content-center align-items-center text-danger pt-5 pb-5" >
            <h3 className='fs-1'>Power BI</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
           <div className=' w-100 pb-5 d-flex justify-content-center'>
          <iframe width="958" height="559" src="https://www.youtube.com/embed/Te6SBsljmno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </div>
          </div>
        </section>

        <section > 
          <div className="d-flex justify-content-center align-items-center text-danger fw-bolder pt-5 pb-5" >
            <h3 className='fs-1'>Big Data</h3>
          </div>
          <div className='pb-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className=' w-100 pb-5 d-flex justify-content-center'>
          <iframe width="958" height="559" src="https://www.youtube.com/embed/vu1oRMe285s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </div>
          </div>
        </section>

        
      
        
      </>
    )
  }
