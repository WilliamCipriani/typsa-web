import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import HeadPage from '../../components/head'
import styles from '@/styles/quienes-somos.module.css'

export default function QuienesSomos() {
    return (
      <>
        <HeadPage />
        
        <div className={`${styles.head_title} `}>
          <img className={`${styles.head_img} d-block w-100`} src="/imagen/quienes-somos/c00f08bc47ada05b21008d8de3c45345.jpg" alt="background" />
          <div className={styles.text_container}>
            <h1 className={`${styles.title} mb-1`}>Quiénes somos</h1>
          </div>
        </div>

        
        <div className='container-fluid m-5 '>
          <section>
            <div className="d-flex justify-content-center flex-column flex-lg-row">
              <div className={styles.container_img}>
                <img className={styles.responsive_img} src='/imagen/quienes-somos/c4717a095416967f741cb9cfd5afe877.jpg' alt="Fundación-Grupo-TYPSA"/>
              </div>
              <div className={`text-start ms-lg-5 mt-5 ${styles.container_text}`} style={{maxWidth: '561px'}}>
                <h3 className="text-danger fs-2 fw-bolder ">Fundación Grupo TYPSA</h3>
                <p>Desde 1966, apoyando a clientes institucionales, públicos y privados en el desarrollo de proyectos de transporte, agua, edificación, energías renovables y desarrollo rural, desde su concepción hasta su puesta en servicio y operación.</p>
                <p>Actualmente somos la primera empresa de ingeniería civil en España y la Nº 46 en el mundo (ENR 22) por volumen de exportación.</p>
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column flex-lg-row">
              <div className={styles.container_img}>
                <img className={styles.responsive_img} src='/imagen/quienes-somos/912d548511c9138863da8388252266c5.jpg' alt="Fundación-Grupo-TYPSA"/>
              </div>
              <div className="text-start ms-lg-5 " style={{maxWidth: '561px'}}>
                <h3 className="text-danger fs-2 fw-bolder mt-5 ">TYPSA en el Perú</h3>
                <p>Typsa abrió su sucursal en Perú en 2001, apostando por la cercanía al cliente y al territorio como la mejor estrategia para comprender sus necesidades y proveer los mejores servicios de ingeniería.</p>
                <p>Contamos con 1.950 m2 de oficinas en el distrito de Miraflores. Adicionalmente disponemos de un laboratorio de calidad de aguas con 1.000 m2, 125 clientes activos y 30.000 ensayos anuales.</p>             
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column flex-lg-row">
              <div className={styles.container_img}>
                <img className={styles.responsive_img} src='/imagen/quienes-somos/c0d1aee73c3d1e0235a8fd78c93f842c.jpg'  alt="Fundación-Grupo-TYPSA"/>
              </div>
              <div className="text-start ms-lg-5 mt-5" style={{maxWidth: '561px'}}>
                <h3 className="text-danger fs-2 fw-bolder">Visión</h3>
                <p>Uno de los pilares de nuestra estrategia empresarial es estar cerca de nuestros clientes y conectados al conocimiento global. Esto nos permite aportar soluciones de ingeniería de consultoría de vanguardia y adaptarlas a las capacidades, recursos y prioridades de nuestros clientes.</p>
                <p><spam className="text-danger fw-bolder">1. Presencia local</spam> Comprender los retos y las capacidades de nuestros clientes y orientarles sobre la mejor manera de realizar sus inversiones.</p>
                <p><spam className="text-danger fw-bolder">2. Conocimiento global</spam> Aportando la experiencia de proyectos de todo el mundo, ampliando las opciones y aprovechando las lecciones aprendidas.</p>
                <p><spam className="text-danger fw-bolder">3. Aplicando estándares internacionales</spam> Guiar nuestras soluciones por normas internacionales en términos de excelencia técnica, calidad, gestión y sostenibilidad. ​</p>
                <p><spam className="text-danger fw-bolder">4. Utilización de herramientas de colaboración en línea</spam> Para fomentar la participación, la colaboración y la transferencia de conocimientos entre los equipos de expertos.</p>
              </div>
            </div>
          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Áreas de Negocio</h3>
            </div>

            <div className="container mt-5 mb-5 flex-column flex-lg-row">
              <div className="row">
                <div className="col-md-6 d-flex d-flex  align-items-center">
                  <div >
                    <img className="img-fluid" src='/imagen/quienes-somos/824d7ddaf110c78e137d8753d860094c.jpg'  alt="gota"/>
                  </div>
                  <div style={{maxWidth: '250px'}}>
                      <div>
                        <spam className='text-danger fw-bolder'>1. Edificios verdes y regeneración urbana:​</spam>
                      </div>
                      <div>
                        <p>Espacios urbanos y edificios que sitúan tanto a las personas como al medioambiente como  protagonistas, y fomentan el crecimiento económico.</p>
                      </div>
                  </div>
                </div>
              

              
                <div className="col-md-6 d-flex align-items-center">
                  <div >
                    <img className="img-fluid" src='/imagen/quienes-somos/c6f04050a7124028d0b3483b55b90d2b.jpg'  alt="gota"/>
                  </div>
                  <div style={{maxWidth: '250px'}}>
                      <div>
                        <spam className='text-danger fw-bolder'>2. Movilidad y transporte público:​​</spam>
                      </div>
                      <div>
                        <p>Los sistemas urbanos ferroviarios y de transporte público son uno de los  ámbitos de actuación mas importantes. Priorizamos  la seguridad del transporte, y el funcionamiento y mantenimiento eficientes.</p>
                      </div>
                  </div>
                </div>
                

                <div className="col-md-6 d-flex align-items-center">
                  <div >
                    <img className="img-fluid" src='/imagen/quienes-somos/60cc16189a707cd43bc21178b4ac1ef8.jpg'  alt="gota"/>
                  </div>
                  <div style={{maxWidth: '250px'}}>
                      <div>
                        <spam className='text-danger fw-bolder'>3. Suministro de agua y saneamiento eficiente:​​</spam>
                      </div>
                      <div>
                        <p>Planificación de un uso adecuado de los recursos hídricos; garantizar el abastecimiento de agua potable y el saneamiento; desalinización y tratamiento del agua.</p>
                      </div>
                  </div>
                </div>
                
              

              
                <div className="col-md-6 d-flex align-items-center">
                  <div >
                    <img className="img-fluid" src='/imagen/quienes-somos/a53c3a8ac5c1a4a5886f2d62291b330d.jpg'  alt="gota"/>
                  </div>
                  <div style={{maxWidth: '250px'}}>
                      <div>
                        <spam className='text-danger fw-bolder'>4. Fuentes de energía limpias:​​</spam>
                      </div>
                      <div>
                        <p>Aumento de la capacidad de producción de energías renovables, conexión a la red y distribución, especialmente en zonas remotas.</p>
                      </div>
                  </div>
                </div>
                </div>
              </div>
            

            <hr />

            <div  className="d-flex flex-column justify-content-center align-items-center mt-5">
              <div>
                <img className="img-fluid" src='/imagen/quienes-somos/b4a92a1dc0368485a459e0fbf3f7c6f9.jpg'  alt="gota"/>
              </div>

              <div className="text-danger fw-bolder fs-3 mt-3">
                Transportes
              </div>

              <div className="text-center ">
                <p>Planificación​ del Transporte​ Y Movilidad​Carreteras
    </p>
                <p>Ferrocarriles</p>
                <p>Líneas Metropolitanas
    </p>
                <p>Aeropuertos</p>
                <p>Puertos e​ Ing. Marítima

    </p>
              </div>
            </div>
            
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <div>
                <img className="img-fluid" src='/imagen/quienes-somos/f97f4b873e612f9451b478d4145eb76f.jpg' alt="gota"/>
              </div>

              <div className="text-danger fw-bolder fs-3 mt-3">
                Agua
              </div>

              <div className="text-center" >
                <p>Recursos Hídricos</p>
                <p>Tratamiento, Abastecimiento y Saneamiento
    </p>
                <p>Líneas Metropolitanas
    </p>
                <p>Infraestructuras del Agua</p>
              </div>
            </div>
            
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <div>
                <img className="img-fluid" src='/imagen/quienes-somos/9b352355fd07fd9fb13f67e4e7e88659.jpg'  alt="gota"/>
              </div>

              <div className="text-danger fw-bolder fs-3 mt-3">
                Edificios y Ciudades
              </div>

              <div className="text-center">
                <spam className='fw-bolder'>Edificios</spam>
                <p>Educación / Cultura​</p>
                <p>Hospitales</p>
                <p>Residenciales</p>
                <p>Oficinas</p>
                <p>Comercial / Retail​</p>
                <p>Tecnología / Ciencia​</p>
                <p>Aeropuertos / Estaciones​</p>
                <p>Hoteles​</p>
                <p>Deportes / Eventos​</p>
                <p>En altura​​</p>
                <p>Administración / Prisiones​</p>
                <span className='fw-bolder'>Ciudades</span>
                
              </div>
            </div>
            
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/63db7b1425f9ab68b0a053255a65ab52.jpg' alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Energías renovables
              </div>
              <div>
                <p>Eólica, Solar</p>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/6b9d9004885a5b5b02ce6149937a7061.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Medio ambiente
              </div>
              <div >
                <p>Medio ambiente</p>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img lang="img-fluid" src='/imagen/quienes-somos/d3501788a42370c41fd6765ea8626324.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Ayuda al desarrollo
              </div>
              <div>
                <p>Ayuda al desarrollo</p>
              </div>
            </div>
            
          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">TYPSA en el ranking mundial</h3>
            </div>
            
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/58cf6acc8cb0687fab39c0a5c7de4e42.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Transportes
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/5a336da307eb60c42055adf5cadc6d4c.jpg' alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Abastecimiento
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/cfd8b34e1b1ffdac18ddd223df89e2c9.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Edificación
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img className="img-fluid" src='/imagen/quienes-somos/9abe571083de3050e82051b446a60a9c.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Energía
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
              <img className="img-fluid" src='/imagen/quienes-somos/078814c0aa575b347b78aac059c3821f.jpg'  alt="gota"/>
              <div className="text-danger fw-bolder fs-3 mt-3">
                Saneamiento
              </div>
            </div>

          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Certificaciones</h3>
            </div>
            
            <div className="d-flex justify-content-center mb-5 mt-5 flex-column flex-lg-row">
              <img className="img-fluid" src='/imagen/quienes-somos/68ac606d63e4a1b069bc1b4e3c000ec1.jpg'  alt="gota"/>
              <div className="text-start ms-5 mt-5" style={{maxWidth: '661px'}}>
                <p>Ofrecemos a nuestros clientes servicios de <spam className="fw-bolder">calidad y alto valor añadido</spam> adaptados a los requisitos técnicos, de gestión o de análisis y supervisión específicos.</p>
              </div>
            </div>

          </section>
          
          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">I+D+i</h3>
            </div>
            
            <div className="d-flex justify-content-center flex-column flex-lg-row">
              <img  src='/imagen/quienes-somos/2302fe4d566cd235dc7055737a30ff5d.jpg'  alt="gota"/>
              <div className="text-center ms-5 mt-5" style={{maxWidth: '661px'}}>
                <p className="text-danger fs-2 fw-bolder mt-5">I+D+i</p>
                <p>Investigación + Desarrollo + Innovación</p>
                <p className="text-secondary fst-italic">Datos correspondientes al año 2022</p>
              </div>
            </div>

          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Responsabilidad social corporativa</h3>
            </div>
            
            <div>
             <div className="d-flex justify-content-center flex-center mt-5 mb-5 fs-4">
              <p className=" text-center" style={{maxWidth: '1100px'}}>Miembros Signatory del Pacto Mundial de las Naciones Unidas desde 2018. Comprometidos con 9 Principios y con los Objetivos de Desarrollo Sostenible (ODS). Acumulamos <spam className=" fw-bolder">16 Buenas Prácticas</spam> reconocidas</p>
             </div>
              
              <div className="container">
                <div className="row">
                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2"  style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/4a096474ba542f2adfa869611a790aad.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Apoyo a la Educación Superior en África
                    </div>  
                  </div>
                  
                
                
                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/4fb9bb9e3f2d9e23dae5779767ef3cb8.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Sistemas de análisis y de alertas de nuestros laboratorios ambientales para mejorar la calidad del agua 
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/9b601bfa2439316b91020d2d472ce01f.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      PV GRAD: la tecnología que optimiza el diseño de plantas solares fotovoltaicas
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/c57a699269f7c9a18bbd0e32625d5cb0.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Respeto a los derechos humanos e integridad en nuestra red de proveedores
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/c57a699269f7c9a18bbd0e32625d5cb0.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Apertura de sucursales y filiales para estar cerca del cliente
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/5926df6d00705dcf04902d81e7559544.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Formación y aceleración digital para fomentar la innovación en nuestros servicios
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/5926df6d00705dcf04902d81e7559544.jpg' alt="gota"/>  
                    </div>
                    <div>
                      CIVIL BIM
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/af6482860cd1f1efa935e00caa4ddbb2.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Be-access: valoración de la accesibilidad para un diseño inclusivo
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/af6482860cd1f1efa935e00caa4ddbb2.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Estrategia de movilidad sostenible para el Consorcio Regional de Transporte de Madrid
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/af6482860cd1f1efa935e00caa4ddbb2.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}> 
                      Despliegue de Sistemas Urbanos de Drenaje Sostenible (SUDS) a través de nuestra filial Green Blue Management
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/ee460f537a11b18737bbe1708dd74933.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                      Uso de materiales de construcción menos intensivos en carbono para reducir la huella de los proyectos
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div  className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/ee460f537a11b18737bbe1708dd74933.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Innovación para el tratamiento de vertidos en la industria agroalimentaria y la reutilización de sus residuos
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/ee460f537a11b18737bbe1708dd74933.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Herramientas de control digital para alargar la vida útil de las infraestructuras
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/9d9cd88c58c656947d5adc74bbce2dda.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Diseñar infraestructuras menos intensivas en carbono a través de los Gemelos Digitales 
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/9d9cd88c58c656947d5adc74bbce2dda.jpg'  alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Metodología para la planificación de infraestructuras resilientes al Cambio Climático
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/ca45d31df8830552e6f2c055da6da70b.jpg' alt="gota"/>  
                    </div>
                    <div style={{maxWidth: '170px'}}>
                    Certificación del Sistema de Gestión Anti-Soborno
                    </div>
                    </div>  
                  </div>
              </div>
            </div>
            <div className="'container-fluid">

              <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
                <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
                  <img className="img-fluid" src='/imagen/quienes-somos/b3e06c8f77540dcf459e1ea5b2c29076.jpg'  alt="gota"/>
                </div>
                <div className="text-start ms-5 " style={{maxWidth: '450px', overflowY: 'auto'}}>
                  <h4 className="text-danger fs-2 fw-bolder">Presencia en la Sociedad</h4>
                  <spam >Universidad Lago Alberto (UNILAC)</spam>
                  <p>Visita del Presidente de la Fundación TYPSA, D. Pablo Bueno Sainz a Mahagi para inaugurar oficialmente las instalaciones de UNILAC.</p>
                  <p>Becas a estudiantes para un aumento progresivo de matrículas:</p>
                  <p>2017: 147 alumnos  /  2018: 215  /  2019: 403  /  2020: 343  /  2021: 368</p>
                </div>
              </div>

              <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
                <div className="d-flex justify-content-center align-items-center mb-3 mx-5 ms-1" >
                  <img className="img-fluid" src='/imagen/quienes-somos/5a498949ee48fe6ef7d4de22edd42f74.jpg'  alt="gota"/>
                </div>
                <div className="text-start ms-5 " style={{maxWidth: '450px', overflowY: 'auto'}}>
                  <h4 className="text-danger fs-2 fw-bolder">2022: 416 alumnos</h4>
                  <ul>
                    <li>Mejoras en la calidad de la enseñanza:</li>
                    <ul>
                      <li>Primas a la residencia de profesores cualificados y directores de departamento.</li>
                      <li>Instalación de red informática y servicio de internet de alta velocidad.</li>
                      <li>Plan de Calidad de UNILAC.</li>
                      <li>Programa de movilidad de la UPM para estudiantes y profesores de UNILAC (Erasmus+).</li>
                      <li>Construcción de un guest house para profesores residentes.</li>
                    </ul>
                    <li>Promoción de una bolsa de empleo para inserción laboral de los egresados de UNILAC.</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
                <div className="d-flex justify-content-center align-items-center mb-3" >
                  <img className="img-fluid" src='/imagen/quienes-somos/0843e69f5493c6c1ca64e277ef7e6dd5.jpg'  alt="gota"/>
                </div>
                <div className="text-start ms-5 " style={{maxWidth: '450px', overflowY: 'auto'}}>
                  <h4 className="text-danger fs-2 fw-bolder">Kenia - Diócesis de Garissa</h4>
                  <ul>
                    <li>
                    Proyecto educativo Emaús: la ayuda de la Fundación TYPSA al proyecto liderado por el misionero José Luis Orpella ha permitido:
                    </li>
                    <ul>
                      <li>Terminar la construcción y equipar la escuela de magisterio. </li>
                      <li>Comenzar la construcción de una escuela de formación profesional en agricultura.</li>
                    </ul>
                  </ul>
                </div>
              </div>

            </div>
            

          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Premios y Reconocmientos</h3>
            </div>
            <div className="container">
            <div className="row" >
                <div className="col-md-4">
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/ec254d00cbd9852180358f4ac53e36f4.jpg'  alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                      FIDIC Awards 2022
                    </h4>
                    <p>Premio Outstanding Project of the Year. Proyecto del viaducto V3 en la Autovía dos Tamoios, en el Parque Estatal Serra do Mar, Brasil.</p>
                    <p>Special Recognition para el Grupo TYPSA como autor del Proyecto del Puente Wiwilí sobre el río Coco, en Nicaragua.</p>
                   </div>
                </div>

            
                <div  className="col-md-4">
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/950406f3dbe46ccff85700da7d94f1f4.jpg'  alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                      Rail Analysis Innovation & Excellence Summit
                    </h4>
                    <p>Categoría de Excelencia en Consultoría de Project Management  </p>
                   </div>
                </div>

                
                <div  className="col-md-4"> 
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/831bb079dd9e5223d9af4655c465ed74.jpg' alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                      Consejo Asesor de Infraestructuras de Cataluña
                    </h4>
                    <p>Premio “Mejor Infraestructura Hídrica de Cataluña” a la Presa del Albagés.</p>
                    
                   </div>
                </div>

                
                <div  className="col-md-4">
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/9dfa9a26af56276f17906be1edd3350f.jpg'  alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                      Premios de Ingeniería Estructural ACHE
                    </h4>
                    <p>Premio Outstanding Project of the Year. Proyecto del viaducto V3 en la Autovía dos Tamoios, en el Parque Estatal Serra do Mar, Brasil.</p>
                    <p>Special Recognition para el Grupo TYPSA como autor del Proyecto del Puente Wiwilí sobre el río Coco, en Nicaragua.</p>
                   </div>
                </div>

                
                <div  className="col-md-4">
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/529b99babfec7e7d908433177e32e0e2.jpg'  alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                     Excellence Awards ACEC - 2022
                    </h4>
                    <p>Premio Outstanding Project of the Year. Proyecto del viaducto V3 en la Autovía dos Tamoios, en el Parque Estatal Serra do Mar, Brasil.</p>
                    <p>Special Recognition para el Grupo TYPSA como autor del Proyecto del Puente Wiwilí sobre el río Coco, en Nicaragua.</p>
                   </div>
                </div>

                
                <div  className="col-md-4">
                   <div className="d-flex justify-content-center align-items-center">
                     <img className="img-fluid" src='/imagen/quienes-somos/63878b61ea4489decef1a9924fc1a872.jpg'  alt="gota"/>
                   </div>
                   <div className="text-center">
                    <h4 className=" text-danger fw-bolder">
                    National Awards Excellence Design Build Institute of America (DBIA) 2022
                    </h4>
                    <p>Premio Outstanding Project of the Year. Proyecto del viaducto V3 en la Autovía dos Tamoios, en el Parque Estatal Serra do Mar, Brasil.</p>
                    <p>Special Recognition para el Grupo TYPSA como autor del Proyecto del Puente Wiwilí sobre el río Coco, en Nicaragua.</p>
                   </div>
                </div>

            </div>
            
            </div>

          </section>

          <section>
            <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Trabajadores</h3>
            </div>

            <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
              <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
                <img className="img-fluid" src='/imagen/quienes-somos/ca83ceb86ccb0737658c43be57fb77e9.jpg'  alt="gota"/>
              </div>
              <div className="text-center fs-4 ms-5 mt-3" style={{maxWidth: '450px', overflowY: 'auto'}}>
                <p>
                  3.347 profesionales repartidos en 50 oficinas permanente situadas en 25 países.
                </p>
                <p>
                  La planilla de la sucursal en Perú está compuesta por 362 trabajadores, de los cuales más de las dos terceras partes son ingenieros y arquitectos. El 96% de la planilla es de nacionalidad peruana.
                </p>
              </div>
            </div>
          </section>


          <section>
          <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Fidelización</h3>
            </div>

            <div className="d-flex justify-content-center text-center mt-5 mb-5 flex-column flex-lg-row">
              <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
                <img className="img-fluid" src='/imagen/quienes-somos/384831295f44a88d5efe29a3738427fd.jpg'  alt="gota"/>
              </div>
              <div className="text-center fs-4  ms-5" style={{maxWidth: '450px', overflowY: 'auto'}}>
                <p className="mt-4">
                TYPSA cree en sus equipos e invierte en el desarrollo de su potencial profesional y humano. Ello nos permite garantizar el máximo nivel de implicación  y compromiso con el proyecto, incluso una vez finalizado.
                </p>
                <p>
                Nuestras estrategias de fidelización han conseguido índices de rotación de personal muy inferiores a los del mercado.
                </p>
              </div>
            </div>
          </section>


          <section>
          <div className={`${styles.espacio} d-flex flex-column justify-content-center text-center `}>
              <h3 className="d-flex flex-start fw-bolder ms-5 fs-1">Áreas temáticas y sostenibilidad</h3>
            </div>

            <div className="d-flex justify-content-center text-center mt-5 flex-column flex-lg-row">
                <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-5 ms-1">
                  <img className="img-fluid" src='/imagen/quienes-somos/872dd646bb6e6c634d5e082eb7e8fc87.jpg' alt="gota"/>
                </div>
                <div className="text-center ms-5 fs-4" style={{maxWidth: '450px', overflowY: 'auto'}}>
                  <p className="mt-4">
                    TYPSA, es consciente de la importancia de diseñar infraestructuras sostenibles, por lo que en sus diseños prioriza la incorporación, siempre que sea técnica y económicamente viable, de soluciones constructivas y prácticas sostenibles que aumentan la eficacia y el rendimiento de la infraestructura, de forma que le confieran una mayor resiliencia y adaptabilidad.
                  </p>
                  <p>
                    TYPSA, actúa en Sostenibilidad en dos niveles
                  </p>
                </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 text-center">
                  <img className="img-fluid" src='/imagen/quienes-somos/d95c947b189d457678d08f80c53984f0.jpg' alt="gota"/>
                  <div className="ms-5" style={{width: '562px'}}>
                    <h4 className="text-danger fw-bolder">A Nivel Corporativo</h4>
                    <p className="ms-5" >Compromiso con los Objetivos de Desarrollo Sostenible de Naciones Unidas​ Memoria Anual de Sostenibilidad.​ Cálculo y Registro de la Huella de Carbono Corporativa. Sello “calcula y reduce” en los últimos años. España​ fundación TYPSA: acciones de cooperación al desarrollo en el ámbito de la enseñanza superior (África)</p>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <img className="img-fluid" src='/imagen/quienes-somos/c22f14bd7eb1db00a2658fa07e1b1a8f.jpg' alt="gota"/>
                  <div className="ms-5" style={{width: '562px'}}>
                    <h4 className="text-danger fw-bolder">A Nivel del Proyecto</h4>
                    <p className="ms-5" >Incorporación de criterios para garantizar la sostenibilidad de nuestros diseños:​</p>
                    <p>TYPSA cuenta con Divisiones y Departamentos específicos para el desarrollo de soluciones sostenibles en relación con el ciclo del agua, la energía sostenible, la economía circular y la gestión del medio ambiente, entre otros.​</p>
                    <p>TYPSA cuenta con personal especializado. Más de 50 profesionales  expertos en diferentes aspectos de la sostenibilidad y más de 25 técnicos acreditados en los diferentes sistemas de calificación de la sostenibilidad (BREEAM, CEEQUAL, LEED, ENVISION, etc.)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2"  style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/7db185e5251262e7f5ef810c4b9b0470.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Cambio climático y descarbonización​</h4>
                      <p>Análisis de vulnerabilidad ante riesgos climáticos​ Medidas de adaptación al cambio climático​ dMedidas de mitigación. Descarbonización​</p>
                    </div>  
                  </div>
                  
                
                
                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/f73b552bd7b38fc7fb22010c7e7bbefe.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Economía Circular​</h4>
                      <p>Diseño incorporando el Ciclo de Vida a materiales y sistemas​ Utilización de materiales sostenibles​ Materiales con Declaraciones Ambientales de Producto (DAP)​ Reutilización de residuos​ Minimizar el consumo de recursos</p> 
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/2f3d76fd191153b28f6126e48c720de7.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Diseño incorporando la biodiversidad y el desarrollo social y económico​</h4>
                      <p>Estudios de Impacto Ambiental y social​ Salvaguardas Ambientales y Sociales​ Protección de la biodiversidad y los recursos naturales​ Servicios ecosistémicos​ Participación ciudadana e integración de criterios de genero</p>
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/6ff224aabc95c54b75cf14029296ca69.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Digitalización</h4>
                      <p>Integración de datos en BIM y BIM 6D​ Data management</p>
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div  className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/67ddcfd97c695a474545e4dc032ccd2e.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Energía y Agua​</h4>
                      <p>Energías renovables y limpias​ Eficiencia energética​ Simulación energética de edificios. Edificios de consume casi nulo​ Aseguramiento del suministro energético</p>
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/8912ade817040f6bf17b6f6d3278d6ce.jpg'  alt="gota"/>  
                    </div>
                    <div className="text-center" style={{maxWidth: '170px'}}>
                      <h4 className="text-danger fw-bold ">Infraestructuras, ciudades y edificios sostenibles​</h4>
                      <p>Infraestructuras y ciudades resilientes​ Movilidad sostenible​ Arquitectura sostenible y neutra en emisiones​ Soluciones Basadas en la Naturaleza (SBN)​ Infraestructuras verdes​ Diseño de edificios con criterios bioclimáticos</p>
                    </div>  
                  </div>

                  <div className="col-md-3 d-flex d-flex flex-column align-items-center">
                    <div  className="col-sm-6 col-lg-3 my-2" style={{width: '170px', height: '170px'}}>
                      <img className="img-fluid" src='/imagen/quienes-somos/522b8b7fb28d6f4863829d3f7fe91b02.jpg' alt="gota"/>  
                    </div>
                    <div className="text-center"> 
                      <h4 className="text-danger fw-bold ">Certificaciones​</h4>
                      <p>Certificaciones de sostenibilidad en infraestructuras y edificios</p>
                    </div>  
                  </div>

                    
                </div>
            </div>
           

          </section>



        </div>




       
      
        
      </>
    )
  }
  