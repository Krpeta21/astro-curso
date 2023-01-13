import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
 

export default function Button(){
    const[suscribe,setSuscribe] = useState(false)
    return(
        <>
        <button onClick={()=>{
            !suscribe ? toast.success("Felicidades ya estas suscrito") : toast.warning("Te has desuscrito")
            setSuscribe(!suscribe)
        }}>
		    {suscribe ? 'Ya estas suscrito' : 'Suscribete'}
        </button>
        <ToastContainer/>
        </>
    )
}