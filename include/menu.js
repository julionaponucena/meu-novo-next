import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
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
                                    <a>Sentir Raiva Sempre é Negativo?</a>
                                </Link>
                            </li>
                            <li> 
                                <Link href="/filosofia/filosofia-3">
                                    <a>A Arte de Viver a Alegria de Ser uma Pessoa com Dignidade</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/filosofia/filosofia-6">
                                    <a>Psicologia do Indivíduo: Corpo e Mente São Inseparaveis</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/filosofia-menu">
                                    <a>Ver mais</a>
                                </Link>
                            </li>
                    </MenuLista>
              
                    <MenuLista titulo="Psicanálise">
                            <li>
                                <Link href="/psicanalise/psicanalise-2">
                                    <a>Não Seja Vitimado Pelo Determinismo Existencial</a>
                                </Link>        
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-3">
                                <a>Colaboração Para O Bem-Estar Coletivo e Autorrealização</a>
                            </Link>    
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-4">
                                    <a>Terapia com Psicanálise  para Enfrentar as Dificuldades Emocionais</a>
                            </Link>    
                                </li>
                            <li> 
                                <Link href="/psicanalise/psicanalise-5">    
                                    <a>Psicanálise: Caminho Para a Ressignificação Do sofrimento</a>
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
                                <Link href="/cursos/curso-1">
                                    <a>Contribuição da Psicanálise para a Educação Emocional dos Educadores</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cursos/curso-2">
                                    <a>Filsofia para Crianças na Prática Escolar</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/cursos/curso-3">
                                    <a>Grupo de Pais: Desenvolvendo Valores na Educação</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/cursos/curso-4">
                                    <a>Desenvolvendo Valores na Educação</a>
                                </Link>
                                </li>
                            <li>
                                <Link href="/curso-menu">
                                    <a>Ver mais</a>
                                </Link>
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
                            <Image src="/facebook-icon.png" width={90} height={90} alt="icone do facebook"/>
                        </a>
                        <a  id="instagram" target="_blank" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                            <Image src="/Instagram-Icon.png" width={90} height={90} alt="icone do instagram"/>
                        </a>
                </div>
            </div>    
                   
            
        
        </nav>

    )
}