import styles from '@/styles/capacidad.module.css'
import HeadPage from '../../components/head'

export default function CapacidadDigital() {

    return (
      <>
        <HeadPage /> 

        <div className={`${styles.head_title} `}>
          <img className={`${styles.head_img} d-block w-100`} src="/imagen/ab948dcdaa5a84786c2a5beb86496d42.jpg" alt="background" />
          <div className={styles.text_container}>
            <h1 className={`${styles.title} mb-1`}>Capacidad digital</h1>
          </div>
        </div>
    
      
        <div  className='mt-5'>
          <div className="d-flex justify-content-center align-items-center text-danger fw-bolder " >
            <h3 className='fs-1'>Servicios Digitales</h3>
          </div>
          <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
           <div className={styles.video_container}>
            <iframe  src="https://www.youtube.com/embed/yNdAWd2gbrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </div>
          </div>
        </div>

        <div >
          <div className="d-flex justify-content-center align-items-center text-danger  fw-bolder  " >
            <h3 className='fs-1'>Realidad Aumentada</h3>
          </div>
          <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.video_container}>
            <iframe width="958" height="559" src="https://www.youtube.com/embed/XRN6NOCEFvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div >
          <div className="d-flex justify-content-center align-items-center text-danger " >
            <h3 className='fs-1'>Power BI</h3>
          </div>
          <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
           <div className={styles.video_container}>
          <iframe width="958" height="559" src="https://www.youtube.com/embed/Te6SBsljmno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </div>
          </div>
        </div>

        <div > 
          <div className="d-flex justify-content-center align-items-center text-danger fw-bolder " >
            <h3 className='fs-1'>Big Data</h3>
          </div>
          <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.video_container}>
          <iframe width="958" height="559" src="https://www.youtube.com/embed/vu1oRMe285s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </div>
          </div>
        </div>

        
      
        
      </>
    )
  }
