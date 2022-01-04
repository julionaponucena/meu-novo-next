import UseTempo from "../hooks/usetempo";
import imagensItens from "./janela-itens";
import Image from "next/image";
function JanelaSlide (){
    const [tempo,setTempo] = UseTempo(0,3000,imagensItens.length-1)
    function voltar (){
        setTempo(tempo-=1)
    }
    function avancar (){
        setTempo(tempo+=1)
    }
    return(
        <div>
            <button onClick={voltar}>{"<"}</button>
            <Image src={`/slide/${imagensItens[tempo]}`} width={300} height={300}/>
            <button onClick={avancar}>{'>'}</button>
        </div>
    )
}

export default JanelaSlide