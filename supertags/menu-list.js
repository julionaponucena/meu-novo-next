import {FaAngleRight} from "react-icons/fa"
import { useState } from "react"
function menuList (props){
    const [ativar,setAtivar] = useState(false)
    function mostrar (){
        setAtivar(!ativar)
    }
    return (
    
            <li className="big-menu"><a className="menu-dropdow" onClick={mostrar}>{props.titulo}<FaAngleRight/></a>
            <ul className={ativar?"show":"hide"}>
                {props.children}
            </ul>
            </li>
        
    )
}
export default menuList