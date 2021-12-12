import {FaAngleRight} from "react-icons/fa"
import { useState } from "react"




function MenuLista (props){
    const [ativar,setAtivar] = useState(false)
    function mostrar (){
        setAtivar(!ativar)
    }
   
    return (
        
        
        <li className="big-menu"><a href="#"className="menu-dropdow" onClick={mostrar}><span>{props.titulo}</span><FaAngleRight className={ativar?"rotate icone":"icone"}/></a>
        <ul className={ativar?"show":"hide"}>
            {props.children}
        </ul>
        </li>
    
    )
}
export default MenuLista