
import HeadPage from '../../components/head'
import styles from '@/styles/typsa-peru.module.css'
import { Carousel } from "react-bootstrap"
import { Nav, Navbar , Container, NavDropdown } from 'react-bootstrap';

export default function TypsaPeru() {
    return (
      <>
      <HeadPage />
       
      <div className={`${styles.head_title} `}>
          <img className={`${styles.head_img} d-block w-100`} src="/imagen/TYPSA-PERU/7c88bf10af2f4aed8b59e064c7c4d13e.jpg" alt="background" />
          
        </div>
      <section>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
          <h3 className={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Organigrama</h3>
        </div>
        <div className='d-flex justify-content-center text-center mt-5'>
          <img className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/organigrama_PERU.png'  alt="organigrama-typsa" />
        </div>
        <div className="text-center text-danger fw-bolder fs-3 mt-3 mb-5">
          96% Planilla Peruana
        </div>

      </section>

      <section>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
          <h3 className={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Equipo: trabajo en acción</h3>
        </div>
        <div> 
          <Carousel className="container-md mt-5">
            <Carousel.Item>
            <img  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/85e122df42a72f8d103fe331fc0d6ed9.jpg' alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/9389107eb1267552df5d6693281b1c55.jpg' alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/f0152b86fb9e47fb8330140c160524c8.jpg' alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/010276a4cc80d932bba0757a4159a69a.jpg' alt="gota" />
            </Carousel.Item>
          </Carousel>

        </div>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center mt-5`}>
          <h3 className={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Equipo: trabajo por área</h3>
        </div>

        <div> 
          <Carousel className="container-md mt-5 p-4">
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/23229acbc140e9b43b6ee75e7bb0aeb4.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/89a288116456105063570f5a2bc0ec7a.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/3a934edfc349645a30c7d2372fd6b20b.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/f164540bf9ffe70dc60e4b88ffa02cf4.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/cdec8b4cd884994acbd828d48eb8ab4a.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/1e1f55e0be49c86229ca68eac118a104.jpg' alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="w-100 img-fluid" src='/imagen/TYPSA-PERU/aac003fcc019ab59142e179fb674efcf.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/3d6ff6ac5ce436d40ab17218d3c80cf4.jpg' alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className=" w-100 img-fluid" src='/imagen/TYPSA-PERU/d5272eec3d561e1c44da8654904b0417.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="w-100 img-fluid" src='/imagen/TYPSA-PERU/712d8b4dbcdc93fc89db2458295dec4b.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="w-100 img-fluid" src='/imagen/TYPSA-PERU/a252e9d932c2fe95fcbf8dff637486b6.jpg'  alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/f94f62916ee54dafe5980099a27a43c0.jpg'  alt="gota" />
            </Carousel.Item>
          </Carousel>

        </div>
      </section>  

      <div className="container-fluid mt-5">
                <div className="row text-danger fs-4 fw-bolder">
                  
                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className=" m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/23229acbc140e9b43b6ee75e7bb0aeb4.jpg' alt="gota"/>  
                    </div>
                    <div >
                      Staff Directivo
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/89a288116456105063570f5a2bc0ec7a.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center">
                      Departamento de Gestón de contratos
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/3a934edfc349645a30c7d2372fd6b20b.jpg'  alt="gota"/>  
                    </div>
                    <div >
                      Departamento de Ofertas
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/f164540bf9ffe70dc60e4b88ffa02cf4.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Administración y Calidad
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/cdec8b4cd884994acbd828d48eb8ab4a.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center">
                      Departamento de Medio Ambiente
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="m-5">
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/1e1f55e0be49c86229ca68eac118a104.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" > 
                      Departamento de Obras Lineales
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/aac003fcc019ab59142e179fb674efcf.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Sistemas de la Información
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div  className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/3d6ff6ac5ce436d40ab17218d3c80cf4.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center">
                      Departamento de Edificación
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="m-5">
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/d5272eec3d561e1c44da8654904b0417.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Instalaciones
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/712d8b4dbcdc93fc89db2458295dec4b.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Ingeniería del Agua
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="m-5">
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/a252e9d932c2fe95fcbf8dff637486b6.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Geología y Geotécnia
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="m-5" >
                      <img className="img-fluid" src='/imagen/TYPSA-PERU/f94f62916ee54dafe5980099a27a43c0.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" >
                      Departamento de Estructuras
                    </div>
                    </div>  
                </div>
              </div>

              <section>
                <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
                  <h3 lassName={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Clientes Públicos: Institucionales</h3>
                </div>
                
                <div>
                <div  className={styles.container}>
                  <div className={styles.carousel}>
                    <Carousel className="container-md img-fluid">
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/32ad38ad9a5f948d75eeac5db88e9398.jpg'  alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/5f6dccf4157b7d7b190ebe94bf3c99be.jpg'  alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/ed68dca4d50b4d2795daf1f95d8171ba.jpg'  alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/d81a0ef9faa0c934bd643b3aa8b4aa37.jpg' alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/93d9318beeef618ea7de37fc761cb954.jpg'  alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/9eadffdf163e1d257de0b844b67d7dc8.jpg'  alt="gota" />
                      </Carousel.Item>
                      <Carousel.Item>
                      <img   className={styles.img_fluid} src='/imagen/TYPSA-PERU/d8d009226aa35a567ce72182d825b3f8.jpg'  alt="gota" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                    <h3 className={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Agencias de Desarrollo e Instituciones Financieras Internacionales</h3>
                    <ul>
                      <li>Comisión Europea​</li>
                      <li>Banco Europeo de Inversiones​​</li>
                      <li>Banco Mundial​​</li>
                      <li>Banco Interamericano de Desarrollo​​</li>
                      <li>Banco Africano de Desarrollo​​</li>
                      <li>Corporación Desafío del Milenio​​</li>
                      <li>Banco Centroamericano de Integración Económica​​</li>
                      <li>Corporación Andina de Fomento​​</li>
                      <li>AECID​​</li>
                      <li>Grupo KfW​</li>
                    </ul>
                  </div>
              </div>

              <div className={styles.container}>
                <div className={styles.carousel}>
                <Carousel className="container-md img-fluid">
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/dcfc7be5b2e5e1b4c332c146abf13ccd.jpg' alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/e7a9bb4508315c7c5572704fc35fe2e0.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/c9b9e0e28495dd5dee24c0dfb61c0c03.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/100cdfd6cdb199df0a7389174aa68d8b.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/a29752300fb23f9b4b7534089e4bff70.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/42a237dc8c6d6d121d6c707d87ef5b98.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/c3c7cea6a9edeab239e09333eec32340.jpg' width={463} height={428} alt="gota" />
                  </Carousel.Item>
  
                </Carousel>
                </div>
                <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                  <h3 className="text-danger fs-2 fw-bolder">Entidades y Programas públicos Nacionales​</h3>
                  <ul>
                    <li>Ministerio de Transportes y Comunicaciones.​​</li>
                    <li>Ministerio de Vivienda, Construcción y Saneamiento.​​​</li>
                    <li>Autoridad para la Reconstrucción con Cambios (ARCC).​​​</li>
                    <li>OSITRAN.​​</li>
                    <li>Provias Nacional (PVN).​</li>
                    <li>Autoridad Portuaria Nacional (APN).​​​</li>
                    <li>Programa Sub-sectorial de Irrigaciones (PSI).​​</li>
                    <li>Ministerio de Economía y Finanzas (MEF).​​​</li>
                    <li>Servicios Industriales de la Marina (SIMA)</li>
                    <li>Proinversión​</li>
                  </ul>
                </div>
              </div>

              </div>

            </section>

          <section>
              <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
                <h3 className={`${styles.espacio_text} d-flex flex-start fw-bolder ms-3 fs-1`}>Clientes Públicos: Empresas y grupos privados</h3>
              </div>

              <div className={styles.container}>
              <div  className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/e6663689600f3bb8c8665695c321a132.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/2dd80095784bfb7c713948c53bfa86e4.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/4e89e293f0720b6f1707c7e894c1ee94.jpg'  alt="gota" />
                </Carousel.Item>
 
              </Carousel>
              </div>
              <div className="text-start ms-5 " style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Contratista Internacionales</h3>
                <ul>
                  <li>Dragados (ESP)</li>
                  <li>Ferrovial (ESP)</li>
                  <li>FCC (ESP)​​</li>
                  <li>Sacyr (ESP)​​</li>
                  <li>OHL (ESP)​​</li>
                  <li>Acciona (ESP)​</li>
                  <li>Isolux-Corsan (ESP)​​</li>
                  <li>Soares de Costa (PRT)​​</li>
                  <li>Binladin Group (SAU)​</li>
                  <li>ICA (MEX)​</li>
                  <li>N. Odebrecht (BRA)​</li>
                  <li>Camargo Correa (BRA)​</li>
                  <li>Andrade Gutiérrez (BRA)​</li>
                  <li>OAS (BRA)​</li>
                  <li>Queiroz Galvao (BRA)​</li>
                  <li>Metro de Madrid</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                <Carousel.Item>
                <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/8a333d0d7055393e3cae3641aa8dce5a.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/0fd845a6b23c380d40678a7acad60ce6.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/e5a0d07cd4da0e7d4659f07d3bef0b29.jpg'  alt="gota" />
                </Carousel.Item>
                
                
              </Carousel>
              </div>
              <div className="text-start ms-5 mt-3" style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Bancos Internacionales</h3>
                <ul>
                  <li>Santander (ESP)​</li>
                  <li>BBVA (ESP)​</li>
                  <li>Barclays (ESP)​​​</li>
                  <li>Banesto (ESP)​</li>
                  <li>BNP (FRA)​​​</li>
                  <li>HSBC (GBR)</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/bbf778dbc37f6e965b397ffca982e9da.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/fb1cd05a121c7d3e465f7ed68a2805ef.jpg'  alt="gota" />
                </Carousel.Item>
              </Carousel>
              </div>
              <div className="text-start ms-5 " style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Empresas Extranjeras</h3>
                <ul>
                  <li>Telefónica (ESP)​​</li>
                  <li>Repsol (ESP)​​​</li>
                  <li>Banco Mundial​​</li>
                  <li>Iberdrola (ESP)​​​</li>
                  <li>Carrefour (FRA)​</li>
                  <li>Orange Telecom (FRA)​​​</li>
                  <li>ENEL (ITA)​​​</li>
                  <li>EDP (PRT)​​​</li>
                  <li>AES Corp. (USA)</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/53d3ecc1c4ab361026906006afa3cb92.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/055ea8b548e0ac8f6d959fab44b477ab.jpg'  alt="gota" />
                </Carousel.Item>
              </Carousel>
              </div>
              <div className="text-start ms-5 " style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Inmobiliarias</h3>
                <ul>
                  <li>Intervante (ESP)​​</li>
                  <li>Realia (ESP)​​​</li>
                  <li>Neinver (ESP)​​​</li>
                  <li>Bouygues (FRA)​​</li>
                  <li>ING (NDL)​​​</li>
                  <li>MDC (NDL)​​​</li>
                  <li>CGI (MAR)​​</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/4c5b55a76f8dfcc2b51825f55ba2a527.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/f4539407bccc1db3fdd89f219126b567.jpg'  alt="gota" />
                </Carousel.Item>
              </Carousel>
              </div>
              <div className="text-start ms-5 " style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Concesionarias</h3>
                <ul>
                  <li>Abertis (ESP)​</li>
                  <li>Iridium (ESP)​</li>
                  <li>Cintra (ESP)​​​</li>
                  <li>Globalvía (ESP)​</li>
                  <li>Itinere (ESP)​​​</li>
                  <li>Invepar (BRA)​​</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
              <Carousel className="container-md img-fluid">
                <Carousel.Item>
                  <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/222a2d0839234fedc6d9bb96df8b80bd.jpg'  alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/0aae4d5b0a7eb7e1aa2f5938d7abbbe9.jpg'  alt="gota" />
                </Carousel.Item>
              </Carousel>
              </div>
              <div className={styles.textBlock}>
                <h3 className="text-danger fs-2 fw-bolder">Contratistas Regionales​​</h3>
                <ul>
                  <li>Sacyr Suc. Perú (Perú)​​</li>
                  <li>OHLA (Perú)​​​</li>
                  <li>Banco Mundial​​</li>
                  <li>COBRA (Chile)​​</li>
                  <li>Benito Roggio (Perú)​​​</li>
                  <li>Ripconciv (Ecuador)​​​</li>
                  <li>Macroconsult (Perú)​​</li>
                </ul>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.carousel}>
                <Carousel className="container-md img-fluid" >
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/8208e533c6182b0db39ee56106f358d9.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/0a88dfea78b83a87de1c5d4008c35ecb.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/14f879d58b51c0088a1f6244e8ec10bd.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img className={styles.img_fluid} src='/imagen/TYPSA-PERU/596b849be6a53198bab15b1ecbb4e6ab.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/e837aafdd69dd154aca68dc066484e50.jpg'  alt="gota" />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img  className={styles.img_fluid} src='/imagen/TYPSA-PERU/e959649621ee4af663c60b5402ad3809.jpg'  alt="gota" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className={styles.textBlock} >
                <h3 className="text-danger fs-2 fw-bolder">Concesionarias Nacionales</h3>
                <ul>
                  <li>Aeropuertos del Perú (Perú)​​</li>
                  <li>Rutas de Lima (Perú)​​​</li>
                  <li>Lima Expresa / LAMSAC (Perú)​​​</li>
                  <li>Salaverry Terminal International (Perú)​​​</li>
                  <li>Shougang (Perú)​​​</li>
                  <li>Engie (Perú)​​</li>
                  <li>Intersur (Perú)​​​</li>
                  <li>Tisur (Perú)​​</li>
                </ul>
              </div>
            </div>     
          </section>

      </>
    )
  }
  