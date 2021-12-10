import Link from "next/link"

import {FaAngleRight} from "react-icons/fa"
export default function Menu (){
    return (
        <nav className= "menu"> 
<div className="botao-abrir">&#9776;</div>   
        <div className="menu-itens fechado"> 
        
                <ul>
                
                 
                    <li >
                        <a className="botao-fechar" href="#">&times;Fechar</a>
                        </li>
                    <li className="home">
                        <Link href="/">
                            <a className="link-horizontal">Home </a>
                        </Link>
                    </li>
                    <li className="big-menu"><a className="menu-dropdow"  href= "#"><span>Filosofia</span> <FaAngleRight className="icone"/></a>
                        <ul className="hide">
                            <li>
                                <Link href="/filosofia/filosofia-1">
                                    <a> Filosofia 1</a>
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
                                
                                    <a></a>
                                
                                </li>
                            <li>
                                <Link href="/filosofia-menu">
                                    <a>Ver mais</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="big-menu "> <a className="menu-dropdow" href="#"><span>Psicanálise</span> <FaAngleRight className="icone"/></a>
                        <ul className="hide">
                            <li>
                                
                                    <a>Psicanalise-1</a>
                                        
                            </li>
                            <li>
                            
                                <a>Psicanalise-2</a>
                                
                            </li>
                            <li>
                            
                                    <a>Psicanalise-3</a>
                                
                                </li>
                            <li> 
                                    
                                    <a>psicanalise-4</a>
                                
                            </li>
                            <li> 
                                
                                    <a>psicanalise-5</a>
                                
                                </li>
                            <li> 
                                
                                    <a>psicanalise-6</a>
                            
                                </li>
                            <li> 
                                
                                    <a>psicanalise-7</a>
                                
                                </li>
                            <li>
                                
                                    <a>Ver mais</a>
                                
                                </li>
                        </ul>
                    </li>
                    <li className="big-menu"><a className="menu-dropdow" href="#"><span>Cursos</span> <FaAngleRight className="icone"/></a>
                        <ul className="hide">
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
                        </ul>           
                    </li>
               
                    <li>
                        
                            <a className="link-horizontal">Sobre</a>
                        
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