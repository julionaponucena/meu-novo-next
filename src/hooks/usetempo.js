'use client'
import {useState,useEffect} from "react";

function UseTempo (inicio,duracao,limite){
    
    const [tempo,setTempo] = useState(inicio)

    function aumentar (){
        if (tempo == limite){
            setTempo(inicio)
        }
        else{
            setTempo(tempo+1)
        }
        
    }
   
    useEffect(()=>{
        const intervalo =setInterval(aumentar,duracao)
        return  ()=> clearInterval(intervalo)
    },[tempo])
    

    return[tempo,setTempo]
}

export default UseTempo