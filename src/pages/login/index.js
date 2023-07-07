import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/login.module.css'



export default function LoginForm() {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [saveData, setSaveData] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setPasswordVisible(prevState => !prevState);
    // Estado para controlar la visualización del spinner de carga
    const [loading, setLoading] = useState(false);
    
    const handOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Activar el spinner de carga
      console.log(username, password);
  
  
      const response = await fetch("http://67.205.166.40:3030/auth", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
  
      setSaveData(true);
  
  
      const data = await response.json();
      console.log('Response Data: ',data);
      if (username.length === 0) {
        alert("Digite su usuario y Contraseña");
      }
      if (data.ok) {
        console.log('Inicio de sesión exitoso'); // Aquí se imprimirá un mensaje si el inicio de sesión fue exitoso.
        localStorage.setItem('id',data.id)
        router.push("/carretera-central");
        
        return;
      } else {
        alert("Usuario y/o Contraseña Incorrecta");
        setLoading(false); // Desactivar el spinner si ocurre un error
        return;
      }
  
      
      
    };

    return (
      <>
        <div className="d-flex align-items-center justify-content-center min-h-full " style={{ minHeight: "100vh" }}>
            <div className="row ">
                <div className="col-lg-10">
                    <div>
                        <div className='d-flex justify-content-center mt-3 mb-5'>
                            <Link href="/" style={{width:"60px", height:"60px"}}>
                              <Image className="d-block w-100 img-fluid" src='/imagen/logo-grupo-Typsa-1.png' width={40} height={40} alt="Logo-typsa"/>
                            </Link>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title text-center mb-5 fs-2 fw-bold">Login TYPSA</h5>
                            <form >
                                <div className={styles.inputContainer}>
                                        <label htmlFor="text" className="form-label" >Usuario</label>
                                        <input type="text" className={`${styles.control} form-control`} id="text"   onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className={`${styles.inputContainer} mb-4 mt-4 position-relative`}>
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        
                                            <input type={passwordVisible ? 'text' : 'password'} className={`${styles.control} form-control`} id="password"  onChange={(e) => setPassword(e.target.value)} />
                                            <button
                                                type="button"
                                                className={`password-toggle ${styles.passwordToggle}`}
                                                onClick={togglePasswordVisibility}
                                                >
                                                <i className={`material-icons ${styles.passwordIcon}`}>
        {passwordVisible ? 'visibility_off' : 'visibility'}
      </i>
                                            </button>

                                        
                                        
                                </div>
                                <div className={`${styles.inputContainer} mb-4 mt-4 position-relative`}>
                                <button type="submit" className="btn bg-danger text-white fw-bold" onClick={handOnSubmit} >Iniciar Sesión</button>
                                </div>
                                
                                <p className={`${styles.inputContainer}`}>
                                Si olvidó su contraseña contacte a <span className='text-danger'>postmaster@typsa.com</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
