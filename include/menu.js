
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
                        <Link href="/">
                            <a className="link-horizontal">Home </a>
                        </Link>
                    </li>
                    <li className="big-menu"><a className="menu-dropdow"  href= "#">Filosofia <i className="fas fa-chevron-right"></i></a>
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
                                <Link href="/filosofia/filosofia-4">
                                    <a></a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/filosofia-menu">
                                    <a>Ver mais</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="big-menu "> <a className="menu-dropdow" href="#">Psicanálise <i className="fas fa-chevron-right"></i></a>
                        <ul className="hide">
                            <li>
                                <Link href="/psicanalise-1">
                                    <a>Psicanalise-1</a>
                                </Link>        
                            </li>
                            <li>
                                <Link href="/psicanalise-2">
                                <a>Psicanalise-2</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/psicanalise-3">
                                    <a>Psicanalise-3</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="/psicanalise-4">    
                                    <a>psicanalise-4</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="/psicanalise-5">
                                    <a>psicanalise-5</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="/psicanalise-6">
                                    <a>psicanalise-6</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="/psicanalise-7">
                                    <a>psicanalise-7</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/psicanalise-menu">
                                    <a>Ver mais</a>
                                </Link>
                                </li>
                        </ul>
                    </li>
                    <li className="big-menu"><a className="menu-dropdow" href="#">Cursos <i className="fas fa-chevron-right"></i></a>
                        <ul className="hide">
                            <li>
                                <Link href="/curso-1">
                                    <a>curso 1</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/curso-2.js">
                                    <a>curso 2</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/curso-3">
                                    <a>Curso 3</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/curso-4">
                                    <a>Curso 4</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/curso-menu">
                                    <a>Ver mais</a>
                                </Link>
                                </li>
                        </ul>           
                    </li>
               
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