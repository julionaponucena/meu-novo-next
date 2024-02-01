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
                        <Link className="link-horizontal" href="/" passHref>
                          Home 
                        </Link>
                    </li>
                    < MenuLista titulo="Filosofia">
                    <li>
                                <Link href="/filosofia/filosofia-1" passHref>
                                  Timidez: Causa e Formas de Superação
                                </Link>
                            </li>
                            <li> 
                                <Link href="/filosofia/filosofia-2" passHref>
                                    Sentir Raiva Sempre é Negativo?
                                </Link>
                            </li>
                            <li> 
                                <Link href="/filosofia/filosofia-3" passHref>
                                    A Arte de Viver a Alegria de Ser uma Pessoa com Dignidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/filosofia/filosofia-6" passHref>
                                    Psicologia do Indivíduo: Corpo e Mente São Inseparaveis
                                </Link>
                                </li>
                            <li>
                                <Link href="/filosofia-menu" passHref>
                                    Ver mais
                                </Link>
                            </li>
                    </MenuLista>
              
                    <MenuLista titulo="Psicanálise">
                            <li>
                                <Link href="/psicanalise/psicanalise-2" passHref>
                                    Não Seja Vitimado Pelo Determinismo Existencial
                                </Link>        
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-3" passHref>
                                Colaboração Para O Bem-Estar Coletivo e Autorrealização
                            </Link>    
                            </li>
                            <li>
                            <Link href="/psicanalise/psicanalise-4" passHref>
                                    Terapia com Psicanálise  para Enfrentar as Dificuldades Emocionais
                            </Link>    
                                </li>
                            <li> 
                                <Link href="/psicanalise/psicanalise-5" passHref>    
                                    Psicanálise: Caminho Para a Ressignificação Do sofrimento
                                </Link>
                            </li>
                            
                                <li>
                                <Link href="/psicanalise-menu" passHref>
                                    Ver mais
                                </Link>
                                </li>
                    </MenuLista>
                    
                    <MenuLista titulo="Cursos">
                            <li>
                                <Link href="/cursos/curso-1" passHref>
                                    Contribuição da Psicanálise para a Educação Emocional dos Educadores
                                </Link>
                            </li>
                            <li>
                                <Link href="/cursos/curso-2" passHref> 
                                    Filsofia para Crianças na Prática Escolar
                                </Link>
                                </li>
                            <li>
                                <Link href="/cursos/curso-3" passHref>
                                    Grupo de Pais: Desenvolvendo Valores na Educação
                                </Link>
                                </li>
                            <li>
                                <Link href="/cursos/curso-4" passHref>
                                    Desenvolvendo Valores na Educação
                                </Link>
                                </li>
                            <li>
                                <Link href="/curso-menu" passHref>
                                    Ver mais
                                </Link>
                                </li>
                    </MenuLista>
               
                    <li>
                        <Link href="/sobre" className="link-horizontal" passHref>
                            Autor
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