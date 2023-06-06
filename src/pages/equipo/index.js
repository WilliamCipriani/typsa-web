import HeadPage from '@/components/head'
import styles from '@/styles/equipo.module.css'
import { useState } from "react";
import Image from 'next/image'
import { Button, Collapse } from "react-bootstrap";
import Buttons from "@/components/buttons"
import HeadLogin from '@/components/head-login';
import FooterPage from '@/components/footer';

export default function Equipo() {

    const [open, setOpen] = useState(false);
    
    return (
      <>
  
      <HeadLogin />
      
      <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}> 
  
      </div>

      <Buttons />

      <div className="d-flex flex-column align-items-center mt-5">
        <div className={`${styles.subtitle} text-center text-danger fs-1 fw-bolder`}>
          Organigrama General
        </div>
        <div className="d-flex justify-content-center">
          <Image src='/imagen/equipo-propuesto/ba1229c55778ec0a1be5c75082a48816.jpg' className="img-fluid" width={664} height={290} alt='Logo-Typsa'/>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-5">
        <div className={`${styles.subtitle} text-center text-danger fs-1 fw-bolder`}>
          Organigrama - Direcciones
        </div>
        <div>
          <Image src='/imagen/equipo-propuesto/bdda128787e2ebbcbe7cc8b9ea53954e.jpg' className="img-fluid" width={662} height={187} alt='Logo-Typsa'/>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-5">
        <div className={`${styles.subtitle} text-center text-danger fs-1 fw-bolder`}>
          Organigrama - PMO, Calidad y Gestión InternacionalOrganigrama - Direcciones
        </div>
        <div>
          <Image src='/imagen/equipo-propuesto/2d01d280bd1fe168c5544c6c73743d06.jpg' className="img-fluid" width={664} height={855} alt='Logo-Typsa'/>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-5">
        <div className={`${styles.subtitle} text-center text-danger fs-1 fw-bolder`}>
          Organigrama - Adminstración, Director de Coord. de Programa y Dirección Técnica
        </div>
        <div>
          <Image src='/imagen/equipo-propuesto/b4cb3a9644ac49f20b6b7cbc25b46043.jpg' className="img-fluid" width={672} height={917} alt='Logo-Typsa'/>
        </div>
      </div>


      <FooterPage />
     </> 
      
    )
  }
  