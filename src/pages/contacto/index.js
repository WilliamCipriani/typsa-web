
import { Button, Form, Row, Col,  Container } from 'react-bootstrap';
import HeadPage from '../../components/head'
import styles from '@/styles/contacto.module.css'
import  MapsGoogle from '../../components/maps'
import { useState } from 'react';
import axios from 'axios';



export default function Contacto() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        // Validar el campo de teléfono para permitir solo números y 10 dígitos
        if (name === 'phone') {
          const onlyNums = value.replace(/[^0-9]/g, '');
      
          // Verificar si el valor solo contiene números y tiene 10 dígitos
          if (/^[0-9]{0,9}$/.test(onlyNums)) {
            setFormData((prevData) => ({
              ...prevData,
              [name]: onlyNums,
            }));
          }
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Validar si todos los campos están completos
          if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
            setErrorMessage('Por favor, complete todos los campos');
            setTimeout(() => {
                setErrorMessage('');
              }, 3000);
            return;
          }else if (formData.phone.length < 9) {
            setErrorMessage('El número de teléfono debe tener al menos 9 dígitos');
            setTimeout(() => {
                setErrorMessage('');
              }, 3000);
            return;
          }
          // Validar el campo de correo electrónico con expresión regular
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

            if (!validEmail) {
              setErrorMessage('Por favor, introduzca un correo electrónico válido');
              setTimeout(() => {
                  setErrorMessage('');
              }, 3000);
              return;
            }

          // Evitar envío repetido del formulario
            if (formSubmitted) {
                return;
            }

            setFormSubmitted(true);

          await axios.post('https://typsaapi.azurewebsites.net/api/contact', formData);
          
          setSuccessMessage('El formulario se envió correctamente');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
          
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
        } catch (error) {
          console.error('Error al enviar el formulario:', error);
          setErrorMessage('Ocurrió un error al enviar el formulario');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        } finally {
            setFormSubmitted(false);
            }
      };
    

    return (
      <>
      <HeadPage />
      <div className={`d-flex justify-content-center mt-5`}>
        <div className="d-flex flex-row justify-content-around text-center flex-nowrap mt-5 mb-5 w-50">
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
        </div>

        <Container className="mt-5 mb-5 w-50">
            
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="text" placeholder="Nombre y Apellido" name="name" onChange={handleInputChange} value={formData.name}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="email" placeholder="Correo Electrónico" name="email" onChange={handleInputChange} value={formData.email}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="tel" placeholder="Teléfono" name="phone"  onChange={handleInputChange} value={formData.phone}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 mt-5">
                    <Form.Control type="text" placeholder="Empresa" name="company"  onChange={handleInputChange} value={formData.company}/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3 mt-5">
                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" name ="message" onChange={handleInputChange} value={formData.message}/>
                </Form.Group>
                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                {successMessage && <p className="alert alert-success">{successMessage}</p> }
                <Button variant="danger" type="submit" disabled={formSubmitted}>
                    Enviar
                </Button>
            </Form>
            
        </Container>

        <MapsGoogle />
      </>
    )
  }
  