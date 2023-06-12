
import { Button, Form, Row, Col,  Container } from 'react-bootstrap';
import HeadPage from '../../components/head'
import styles from '@/styles/contacto.module.css'
import  MapsGoogle from '../../components/maps'


export default function Contacto() {
    
    

    return (
      <>
      <HeadPage />
        <div className="d-flex flex-row justify-content-around text-center flex-nowrap mt-5 mb-5">
            <div className={`${styles.divisor}`}>
                <h3 className="text-danger fw-bolder">VISÍTANOS</h3>
                <p>Av. 28 de Julio 1044, Miraflores 15047</p>
            </div>
            <div className={`${styles.divisor}`}>
                <h3 className="text-danger fw-bolder">LLÁMANOS</h3>
                <p>(01) 7192645</p>
                <p>(51) 9999999</p>
            </div>
              
            <div >
                <h3 className="text-danger fw-bolder">ESCRÍBENOS</h3>
                <p>contacto@typsa.es</p>
            </div>
        </div>      

        <Container className="mt-5 mb-5">
            <Form className="mt-5">
                <Row>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="text" placeholder="Nombre y Apellido" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="email" placeholder="Correo Electrónico" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="tel" placeholder="Teléfono" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="text" placeholder="Empresa" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3 mt-5">
                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>

        </Container>

        <MapsGoogle />
        
    

      </>
    )
  }
  