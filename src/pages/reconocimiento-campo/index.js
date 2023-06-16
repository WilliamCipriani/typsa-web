import HeadPage from "@/components/head"
import styles from '@/styles/reconocimiento-campo.module.css'
import Image from "next/image"
import Buttons from "@/components/buttons"
import HeadLogin from "@/components/head-login"


export default function QuienesSomos() {
    return (
      <>
          <HeadLogin />
        
          <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
            <h1 className={`${styles.title} mb-1`}>Reconocimiento de Campo</h1>
            <hr className={`${styles.barra} mb-4`}/>
          </div>
          <Buttons />

          <section >


        <div className="d-flex justify-content-center mt-4 mb-5">
            <div className=" w-100" style={{maxWidth: '1154px'}} >
               <div className=' w-100 pb-5 d-flex justify-content-center mt-5'>
                <iframe width="958" height="559" src="https://www.youtube.com/embed/4vb4RpqM8rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
               </div> 
         
            </div> 
        </div>
           

      </section>

      
        
      </>
    )
  }
  
