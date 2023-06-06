

export default function Buttons() {
  
    return (
        <>
            <div className='container mt-4'>
          <div className='row' >
            <div  className='col-sm-6 col-lg-3 my-2' >
              <input type='button' className='btn bg-transparent w-100 border border-danger text-danger' onClick={() => window.location.href='/equipo'} value="Equipo"/>
            </div>
            <div className='col-sm-6 col-lg-3 my-2'>
              <input type='button'  className='btn bg-transparent w-100 border border-danger text-danger'onClick={() => window.location.href='/planeamiento'} value="Planeamiento"/>
            </div>
            <div className='col-sm-6 col-lg-3 my-2'>
              <input type='button'  className='btn bg-transparent w-100 border border-danger text-danger'onClick={() => window.location.href='/reconocimiento-campo'} value="Reconocimiento de Campo"/>
            </div>
            <div className='col-sm-6 col-lg-3 my-2 '>
              <input type='button'  className='btn bg-transparent w-100 border border-danger text-danger'onClick={() => window.location.href='/punto-clave'} value="Puntos Clave"/>
            </div>
          </div>
        </div>
        </>
    );

}
