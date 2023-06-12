import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


export default function MapsGoogle() {
    const mapStyles = {
        height: "400px",
        width: "100%"};

    const companyLocation = {
        lat: -12.0432,
        lng: -77.0282 // Coordenadas de la ubicación de la compañía
    };
        
    return(
        <>
        <LoadScript
                
                googleMapsApiKey='AIzaSyASAN-MPywEVu4GXy_XVEnbkt89yTEcyCU'>
                    <div style={{ margin: "20px auto", maxWidth: "900px" }}>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={14}
                            center={companyLocation}
                        >
                            <Marker position={companyLocation}/>
                        </GoogleMap>
                </div>
        </LoadScript>
        </>
)


}