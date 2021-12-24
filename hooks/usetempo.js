import { useState } from "react";

function UseTempo (){
    const [tempo,setTempo] = useState(0)

    function aumentarTempo (){
        setTempo(tempo +1)
    }
    

    setInterval(aumentarTempo,1000)

    return [tempo]
}

export default UseTempo