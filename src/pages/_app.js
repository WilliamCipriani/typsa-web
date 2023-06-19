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
          <title>Typsa-Perú</title>   
        </Head>
        
        <Component {...pageProps} />

    </>  

  ); 
}