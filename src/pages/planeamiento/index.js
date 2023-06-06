import HeadPage from '@/components/head'
import styles from '@/styles/planeamiento.module.css'
import { useState } from "react";
import Image from 'next/image'
import Buttons from "@/components/buttons"
import HeadLogin from '@/components/head-login';


export default function Planeamiento() {

    const [open, setOpen] = useState(false);
    
    return (
      <>

        <HeadLogin />
    
        <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}> 
          <h1 className={`${styles.title}`}>Planeamiento</h1>
          <hr className={`${styles.barra} mb-4`}/>
        </div>
        
        <Buttons/>
        <section >
          

          <div className='fs-1 ms-5 mt-5 mb-4 text-danger'>
            Programa de Trabajos
          </div>
          <div className='d-flex justify-content-center ' >
            <Image src='/imagen/planeamiento/9d8d055091f7a482e0c26eb7bf09c8ee.jpg' className="img-fluid" width={1154} height={1303} alt='s'/>  
          </div>    

        </section>
        
        

    </>
      
    )
  }
  