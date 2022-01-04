import UseTempo from "../hooks/usetempo";

function JanelaSlide (){
    const [tempo,setTempo] = UseTempo(0,1000,5)
    return tempo
}

export default JanelaSlide