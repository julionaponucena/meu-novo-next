import UseTempo from "../hooks/usetempo";
import imagensItens from "./janela-itens";
import Image from "next/image";
import style from "../styles/modulos/slide.module.css"
function JanelaSlide (){
    
    const [tempo,setTempo] = UseTempo(0,3000,imagensItens.length-1)
    const SlideEstilo = {
        transform:`translatey(-300*${tempo}px);`
    }
    function voltar (){
        if (tempo <= 0 ){
            setTempo(imagensItens.length-1)
        }
        else{
            setTempo(tempo-1)
        }
    }
    function avancar (){
        if(tempo >=imagensItens.length-1){
            setTempo(0)
        }
        else{ 
        setTempo(tempo+1)
        }
    }
    
    return(
        <div>
            <button onClick={voltar}>{'<'}</button>
            <Image src={`/slide/${imagensItens[tempo]}`} width={300} height={300}/>   
            
            <button onClick={avancar}>{'>'}</button>
        </div>
    )
}

export default JanelaSlide