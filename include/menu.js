import Link from "next/link"
import { useState } from "react"
import {FaAngleRight} from "react-icons/fa"
import MenuLista from "../supertags/menu-list"
export default function Menu ()
{
    const [ativado,setAtivado] = useState(false)
    /*      */
    
    
    return (
        <nav className= "menu"> 
<div className="botao-abrir" onClick={()=>setAtivado(!ativado)}>&#9776;</div>   
        <div className={ativado ? "menu-itens aberto" :"menu-itens fechado"}> 
        
                <ul>
                
                 
                    <li >
                        <a className="botao-fechar" href="#" onClick={()=>setAtivado(!ativado)}>&times;Fechar</a>
                        </li>
                    <li className="home">
                        <Link href="/">
                            <a className="link-horizontal">Home </a>
                        </Link>
                    </li>
                    < MenuLista titulo="Filosofia">
                    <li>
                                <Link href="/filosofia/filosofia-1">
                                    <a>Timidez: Causa e Formas de Superação</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="/filosofia/filosofia-2">
                                    <a> Filosofia 2</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="/filosofia/filosofia-3">
                                    <a>Filosofia 4</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/filosofia/filosofia-6">
                                    <a>Filosofia-6</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/filosofia-menu">
                                    <a>Ver mais</a>
                                </Link>
                            </li>
                    </MenuLista>
              
                    <MenuLista titulo="Psicanalise">
                            <li>
                                <Link href="/psicanalise/psicanalise-2">
                                    <a>Psicanalise-2</a>
                                </Link>        
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-3">
                                <a>Psicanalise-3</a>
                            </Link>    
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-4">
                                    <a>Psicanalise-4</a>
                            </Link>    
                                </li>
                            <li> 
                                <Link href="/psicanalise/psicanalise-5">    
                                    <a>psicanalise-5</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="/psicanalise/psicanalise-6">
                                    <a>psicanalise-6</a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/psicanalise-menu">
                                    <a>Ver mais</a>
                                </Link>
                                </li>
                    </MenuLista>
                    
                    <MenuLista titulo="Cursos">
                            <li>
                                
                                    <a>curso 1</a>
                                
                            </li>
                            <li>
                                
                                    <a>curso 2</a>
                                
                                </li>
                            <li>
                                
                                    <a>Curso 3</a>
                                
                                </li>
                            <li>
                                
                                    <a>Curso 4</a>
                            
                                </li>
                            <li>
                                
                                    <a>Ver mais</a>
                            
                                </li>
                    </MenuLista>
               
                    <li>
                        <Link href="/sobre">
                            <a className="link-horizontal">Sobre</a>
                        </Link>
                    </li>
                </ul>
                
                <div className="redes-sociais inside-menu">
                        <a id="facebook" target="_blank" href="https://www.facebook.com/isaltosp">
                            <img src="/facebook-icon.png"></img>
                        </a>
                        <a  id="instagram" target="_blank" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                            <img src="/Instagram-Icon.png" alt="Instagram"></img>
                        </a>
                </div>
            </div>    
                   
            
        
        </nav>

    )
}