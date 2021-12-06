import Header from "./header";
import Link from "next/link"
import React from 'react'
import { ReactDOM } from 'react'
export default function Menu (){
    return (
        <nav class= "menu"> 
<button class="botao-abrir">&#9776;</button>   
        <div class="menu-itens fechado"> 
        
                <ul>
                
                 
                    <li >
                        <a class="botao-fechar" href="#">&times;Fechar</a>
                        </li>
                    <li class="home">
                        <Link href="/">
                            <a class="link-horizontal">Home </a>
                        </Link>
                    </li>
                    <li class="big-menu"><a class="menu-dropdow"  href= "#">Filosofia <i class="fas fa-chevron-right"></i></a>
                        <ul class="hide">
                            <li>
                                <Link href="filosofia-1">
                                    <a> Filosofia 1</a>
                                </Link> 
                            </li>
                            <li> 
                                <Link href="filosofia-2">
                                    <a> Filosofia 2</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="filosofia-3">
                                    <a href="filosofia-4.php">Filosofia 4</a>
                                </Link>    
                            </li>
                            <li>
                                <Link href="filosofia-4">
                                    <a href="filsofia-5"></a>
                                </Link>
                                </li>
                            <li>
                                <Link href="filosofia-menu">
                                    <a>Ver mais</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="big-menu "> <a class="menu-dropdow" href="#">Psicanálise <i class="fas fa-chevron-right"></i></a>
                        <ul class="hide">
                            <li>
                                <Link href="psicanalise-1">
                                    <a>Psicanalise-1</a>
                                </Link>        
                            </li>
                            <li>
                                <Link href="psicanalise-2">
                                <a>Psicanalise-2</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="psicanalise-3">
                                    <a>Psicanalise-3</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="psicanalise-4">    
                                    <a>psicanalise-4</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="psicanalise-5">
                                    <a>psicanalise-5</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="psicanalise-6">
                                    <a>psicanalise-6</a>
                                </Link>
                                </li>
                            <li> 
                                <Link href="psicanalise-7">
                                    <a>psicanalise-7</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="psicanalise-menu">
                                    <a>Ver mais</a>
                                </Link>
                                </li>
                        </ul>
                    </li>
                    <li class="big-menu"><a class="menu-dropdow" href="#">Cursos <i class="fas fa-chevron-right"></i></a>
                        <ul class="hide">
                            <li>
                                <Link href="curso-1">
                                    <a>curso 1</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="curso-2.js">
                                    <a>curso 2</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="curso-3">
                                    <a>Curso 3</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="curso-4">
                                    <a>Curso 4</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="menu-curso">
                                    <a>Ver mais</a>
                                </Link>
                                </li>
                        </ul>           
                    </li>
               
                    <li>
                        <Link href="sobre">
                            <a class="link-horizontal">Sobre</a>
                        </Link>
                    </li>
                </ul>
                
                <div class="redes-sociais inside-menu">
                        <a id="facebook" target="_blank" href="https://www.facebook.com/isaltosp">
                            <img src="Img/facebook-icon.png"></img>
                        </a>
                        <a  id="instagram" target="_blank" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                            <img src="Img/Instagram-Icon.png" alt="Instagram"></img>
                        </a>
                </div>
            </div>    
                   
            
        
        </nav>

    )
}