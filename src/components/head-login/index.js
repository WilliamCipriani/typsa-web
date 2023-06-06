import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

export default function HeadLogin() {
    const [username, setUsername] = useState('');
    const router = useRouter();
    
    const getData = () => {
        // get the username from local storage
        const storedUsername = localStorage.getItem('username');
        return storedUsername || 'Guest'; // return 'Guest' if no username found
    }

    const handleLogout = () => {
        // clear the username from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('id');
        localStorage.removeItem('ally-supports-cache');
        // then redirect to login page
        router.push('/index');
    }
    
    useEffect(() => {
        setUsername(getData())
        console.log(getData());
    }, [])

    return (
        <>
            <div className='d-flex justify-content-end align-items-center'>
                <h2 className=" fs-5 fw-bolder m-3"> Bienvenido(a), {username}</h2>
                <Nav.Link href="/login" className="btn bg-dark fs-4  m-4 text-light mr-5" style={{minWidth: '70px'}} onClick={handleLogout}>
                    Salir
                </Nav.Link> 
            </div>

        </>
    );

}