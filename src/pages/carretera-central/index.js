import HeadPage from '@/components/head'
import styles from '@/styles/carr-central.module.css'
import { useState } from "react";
import Buttons from "@/components/buttons"
import HeadLogin from "@/components/head-login"


export default function CarreteraCentral() {

    const [open, setOpen] = useState(false);
    
    return (

      <>
        <HeadLogin />
  
        <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}> 
            <h1 className={`${styles.title} mb-1`}>Carretera Central</h1>
            <hr className={`${styles.barra} mb-4`}/>
        </div>

        <Buttons />

        

      
     </> 
      
    )
  }
  