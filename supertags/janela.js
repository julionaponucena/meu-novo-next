import UseTempo from "../hooks/usetempo";
import imagensItens from "./janela-itens";
import Image from "next/image";
import style from "../styles/modulos/slide.module.css"
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"

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
        <div className={style.containerSlide}>
            <FaAngleLeft className={style.botao} onClick={voltar}/>
            <div className={style.containerFoto}>
                <Image src={`/slide/${imagensItens[tempo].nome}`} width={300} height={225}alt={imagensItens[tempo].alt} objectFit="cover" layout="responsive" className={style.foto} loading={tempo == 0 ? "eager" : "lazy"}/>   
            </div>
            <FaAngleRight className={style.botao} onClick={avancar}/>
        </div>
    )
}

export default JanelaSlide