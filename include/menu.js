
import Link from "next/link"
import React from 'react'
import { ReactDOM } from 'react'
export default function Menu (){
    return (
        <nav className= "menu"> 
<button className="botao-abrir">&#9776;</button>   
        <div className="menu-itens fechado"> 
        
                <ul>
                
                 
                    <li >
                        <a className="botao-fechar" href="#">&times;Fechar</a>
                        </li>
                    <li className="home">
                        
                            <a className="link-horizontal">Home </a>
                        
                    </li>
                    <li className="big-menu"><a className="menu-dropdow"  href= "#">Filosofia <i className="fas fa-chevron-right"></i></a>
                        <ul className="hide">
                            <li>
                                
                                    <a> Filosofia 1</a>
                                 
                            </li>
                            <li> 
                                
                                    <a> Filosofia 2</a>
                                
                            </li>
                            <li> 
                                
                                    <a>Filosofia 4</a>
                                    
                            </li>
                            <li>
                                
                                    <a></a>
                                
                                </li>
                            <li>
                                
                                    <a>Ver mais</a>
                                
                            </li>
                        </ul>
                    </li>
                    <li className="big-menu "> <a className="menu-dropdow" href="#">Psicanálise <i className="fas fa-chevron-right"></i></a>
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
                    <li className="big-menu"><a className="menu-dropdow" href="#">Cursos <i className="fas fa-chevron-right"></i></a>
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