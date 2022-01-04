import {useState} from "react";

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
    setTimeout(aumentar,duracao)
    
    

    return[tempo,setTempo]
}

export default UseTempo