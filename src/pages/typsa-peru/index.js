import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import HeadPage from '../../components/head'
import styles from '@/styles/typsa-peru.module.css'
import { Carousel } from "react-bootstrap"
import { Nav, Navbar , Container, NavDropdown } from 'react-bootstrap';

export default function TypsaPeru() {
    return (
      <>
      <HeadPage />
       
      <div className={`${styles.head_title} container-fluid d-flex flex-column justify-content-center align-items-center text-center`}>
            
      </div>
      <section>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
          <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Organigrama</h3>
        </div>
        <div className='d-flex justify-content-center text-center mt-5'>
          <Image className="img-fluid" src='/imagen/TYPSA-PERU/6995d7b7bcd02a1c63bb005220c8d316.jpg' width={1168} height={450} alt="gota" />
        </div>
        <div className="text-center text-danger fw-bolder fs-3 mt-3 mb-5">
          96% Planilla Peruana
        </div>

      </section>

      <section>
        <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
          <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Equipos</h3>
        </div>
        <div> 
          <Carousel className="container-md mt-5">
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/85e122df42a72f8d103fe331fc0d6ed9.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/9389107eb1267552df5d6693281b1c55.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/f0152b86fb9e47fb8330140c160524c8.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/010276a4cc80d932bba0757a4159a69a.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
          </Carousel>

        </div>

        <div> 
          <Carousel className="container-md mt-5">
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/58ecd3bf52c6aad8a12f072ec7350ed9.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/933ee9fab2aad6c47567d16afd8ef50f.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/f2038a74afa90377b1e8aa7f6e6f3e96.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/25358ee80e1372be4f4509415aa71d6f.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/7c88bf10af2f4aed8b59e064c7c4d13e.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/f164540bf9ffe70dc60e4b88ffa02cf4.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>

            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/1e1f55e0be49c86229ca68eac118a104.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            <Carousel.Item>
            <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/a252e9d932c2fe95fcbf8dff637486b6.jpg' width={1168} height={660} alt="gota" />
            </Carousel.Item>
            
          </Carousel>

        </div>
      </section>  

      <div className="container-fluid mt-5">
                <div className="row text-danger fs-4 fw-bolder">
                  
                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/23229acbc140e9b43b6ee75e7bb0aeb4.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="" style={{maxWidth: '170px'}}>
                      Staff Directivo
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/89a288116456105063570f5a2bc0ec7a.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Gestón de contratos
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/3a934edfc349645a30c7d2372fd6b20b.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div >
                      Departamento de Ofertas
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/f164540bf9ffe70dc60e4b88ffa02cf4.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Administración y Calidad
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/cdec8b4cd884994acbd828d48eb8ab4a.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Medio Ambiente
                    </div>  
                  </div>

                  <div className="col-md-6  d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/1e1f55e0be49c86229ca68eac118a104.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}> 
                      Departamento de Obras Lineales
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/aac003fcc019ab59142e179fb674efcf.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Sistemas de la Información
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center mb-4">
                    <div  className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/3d6ff6ac5ce436d40ab17218d3c80cf4.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Edificación
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/d5272eec3d561e1c44da8654904b0417.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Instalaciones
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/712d8b4dbcdc93fc89db2458295dec4b.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Ingeniería del Agua
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/a252e9d932c2fe95fcbf8dff637486b6.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Geología y Geotécnia
                    </div>  
                  </div>

                  <div className="col-md-6 d-flex d-flex flex-column align-items-center mb-4">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '562px', height: '376px'}}>
                      <Image className="img-fluid" src='/imagen/TYPSA-PERU/f94f62916ee54dafe5980099a27a43c0.jpg' width={562} height={376} alt="gota"/>  
                    </div>
                    <div className="text-center" style={{width: '562px'}}>
                      Departamento de Estructuras
                    </div>
                    </div>  
                  </div>
              </div>

              <section>
                <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
                  <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Clientes Públicos: Institucionales</h3>
                </div>
                <div>
                <div>
                  <h4>Agencias de Desarrollo e Instituciones Financieras Internacionales​</h4>
                  <p>Comisión Europea​</p>
                  <p>Banco Europeo de Inversiones​</p>
                  <p>Banco Mundial​</p>
                  <p>Banco Interamericano de Desarrollo​</p>
                  <p>Banco Africano de Desarrollo​</p>
                  <p>Corporación Desafío del Milenio​</p>
                  <p>Banco Centroamericano de Integración Económica​</p>
                  <p>Corporación Andina de Fomento​</p>
                  <p>AECID​</p>
                  <p>Grupo KfW</p>
                </div> 
                <div>
                  <h4>Agencias de Desarrollo e Instituciones Financieras Internacionales​</h4>
                  <p>Comisión Europea​</p>
                  <p>Banco Europeo de Inversiones​</p>
                  <p>Banco Mundial​</p>
                  <p>Banco Interamericano de Desarrollo​</p>
                  <p>Banco Africano de Desarrollo​</p>
                  <p>Corporación Desafío del Milenio​</p>
                  <p>Banco Centroamericano de Integración Económica​</p>
                  <p>Corporación Andina de Fomento​</p>
                  <p>AECID​</p>
                  <p>Grupo KfW</p>
                </div> 
                <div>
                  <h4>Entidades y Programas públicos Nacionales​</h4>
                  <p>Ministerio de Transportes y Comunicaciones.​​</p>
                  <p>Ministerio de Vivienda, Construcción y Saneamiento.​​</p>
                  <p>Autoridad para la Reconstrucción con Cambios (ARCC).​​</p>
                  <p>OSITRAN.​​</p>
                  <p>Provias Nacional (PVN).​​</p>
                  <p>Autoridad Portuaria Nacional (APN).</p>
                  <p>Autoridad Nacional del Agua (ANA).​​</p>
                  <p>Programa Nacional de Saneamiento Urbano (PNSU).​​</p>
                  <p>APrograma Sub-sectorial de Irrigaciones (PSI).​​</p>
                  <p>Ministerio de Economía y Finanzas (MEF).​</p>
                  <p>Servicios Industriales de la Marina (SIMA).​</p>
                  <p>Proinversión</p>
                </div> 
              </div> 
              <div>
              <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row">
              <div className="d-flex justify-content-center  mb-5">
              <Carousel className="container-md mt-5 img-fluid" style={{width:"463px", height:"428px"}}>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/32ad38ad9a5f948d75eeac5db88e9398.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/5f6dccf4157b7d7b190ebe94bf3c99be.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/ed68dca4d50b4d2795daf1f95d8171ba.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/d81a0ef9faa0c934bd643b3aa8b4aa37.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/93d9318beeef618ea7de37fc761cb954.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/9eadffdf163e1d257de0b844b67d7dc8.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/d8d009226aa35a567ce72182d825b3f8.jpg' width={200} height={200} alt="gota" />
                </Carousel.Item>
 
              </Carousel>
              </div>
              <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Agencias de Desarrollo e Instituciones Financieras Internacionales</h3>
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

            <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row">
              <div className="d-flex justify-content-center  mb-5">
              <Carousel className="container-md mt-5" style={{width:"463px", height:"428px"}}>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/dcfc7be5b2e5e1b4c332c146abf13ccd.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/e7a9bb4508315c7c5572704fc35fe2e0.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/c9b9e0e28495dd5dee24c0dfb61c0c03.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/100cdfd6cdb199df0a7389174aa68d8b.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/a29752300fb23f9b4b7534089e4bff70.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/42a237dc8c6d6d121d6c707d87ef5b98.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block w-100 img-fluid" src='/imagen/TYPSA-PERU/c3c7cea6a9edeab239e09333eec32340.jpg' width={463} height={428} alt="gota" />
                </Carousel.Item>
 
              </Carousel>
              </div>
              <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Agencias de Desarrollo e Instituciones Financieras Internacionales</h3>
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
                <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Clientes Públicos: Empresas y grupos privados</h3>
              </div>

              
          </section>
              
      
        
      </>
    )
  }
  