import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return(

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link 
          src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
          integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link 
          rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        />
        <link rel='icon' href='/imagen/logo-grupo-Typsa-1.png' /> 
        <title>Typsa WEB</title>
           
      </Head>
      
      <Component {...pageProps} />
    </>


  ) 
}