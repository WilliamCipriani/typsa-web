import HeadPage from "@/components/head"
import styles from '@/styles/punto-clave.module.css'
import Image from "next/image"
import { Button } from "react-bootstrap"
import Buttons from "@/components/buttons"
import HeadLogin from "@/components/head-login"


export default function QuienesSomos() {
    return (
      <>
            <HeadLogin />
        
          <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
            <h1 className={`${styles.title} `}>Puntos Clave</h1>
            <hr className={`${styles.barra} mb-4`}/>
          </div>
          < Buttons />

          <section >
       

        <div className="container-fluid p-0 mt-4">
            <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row">
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/665b698165d64e69dc990c53ef7bb9d8.jpg' className="img-fluid" width={532} height={261} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Geotécnia</spam>
                    <p>Campaña geotécnica ajustada a la necesidad real de datos de partida, teniendo en cuenta que existen tramos donde se desarrollarán diseños constructivos y tramos donde se desarrollarán anteproyectos. Con ello se busca acotar el plazo de ejecución de los diseños.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row' >
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/2e749def86410012d6083c52d563118e.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Responsabilidad Social</spam>
                    <p>Atención temprana y permanente a las poblaciones interesadas en el proyecto; especialmente las afectadas por la accesibilidad desde y hacia la nueva vía.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row'>
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/554958d8e405739de68c830ccf120559.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Optimización</spam>
                    <p>Optimización del trazo para minimizar los volúmenes de movimiento de tierras, teniendo en cuenta la orografía de la zona.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row'>
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/cd1bafc85185a022483e5c7daa1a034d.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Constructabilidad</spam>
                    <p>Consideración de las facilidades locales, la accesibilidad y las condiciones climatológicas de la zona para el desarrollo del diseño previendo la constructabilidad de la obra.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row'>
                <div>
                    <Image src='/imagen/punto-clave/c16bc0e3614dbba1e92fa7481c3bb716.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Monitoreo Arqueológico</spam>
                    <p>Monitoreo arqueológico, social y ambiental permanente, a fin de prevenir conflictos sociales durante todas las fases del proyecto.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row'>
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/101ccfacf89de91707369ee109795d72.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Prevención</spam>
                    <p>Estudio cuidadoso de la hidrología y la hidrogeología del lugar, a fin de evitar zonas de riesgo por huaicos y/o derrumbes.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center mt-5 flex-column flex-lg-row'>
                <div className="d-flex justify-content-center  mb-5">
                    <Image src='/imagen/punto-clave/2e6a6c2361e27ed12f5f226e670d9843.jpg' className="img-fluid" width={532} height={300} alt="typsa"/>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <spam className='text-danger fs-3 fw-bolder'>Materiales</spam>
                    <p>Cuidadoso diseño de mezclas de concreto, hidráulico y asfáltico, teniendo en cuenta las condiciones meteorológicas en las que trabajarán los materiales.</p>
                </div>
            </div>
        </div>
           

      </section>

      
        
      </>
    )
  }
  