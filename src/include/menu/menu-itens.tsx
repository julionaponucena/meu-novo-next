'use client'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MenuLista from "../../supertags/menu-list"

type Iprops = {
    children: React.ReactNode,
    informations:React.ReactNode

}

export default function MenuItens ({children,informations}:Iprops)
{
    const [ativado,setAtivado] = useState<boolean>(false)
    /*      */
    
    
    return (
        <nav className= "menu"> 
            <div className="botao-abrir" onClick={()=>setAtivado(!ativado)}>&#9776;</div>   
            <div className={ativado ? "menu-itens aberto" :"menu-itens fechado"}> 
        
                <ul>
                    <li >
                        <a className="botao-fechar" href="#" onClick={()=>setAtivado(!ativado)}>&times;Fechar</a>
                    </li>
                    {children}
                </ul>
            </div>    
                   
            {informations}
        
        </nav>

    )
}