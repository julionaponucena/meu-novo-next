import Head from "next/head"
import Header from "@include/header";
import Menu from "@include/menu";
import Footer from "@include/footer";
import HiperLink from "src/scripts/hiperlinks";
import Artigo from "src/menu/menu-itens"
import ContainerMenu from "src/menu/container-menu";
import ScriptAnalytics from "src/scripts/script-analytics";
import React from "react";
function PsicanaliseMenu (){
    return(
        <>
            <Head>
                <title>Artigos sobre Psicanálise</title>
            </Head>
            <ScriptAnalytics/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="Psicanálise">
             <HiperLink artigo={Artigo} nomeArtigo="psicanalise"/>  
            </ContainerMenu>
            <Footer/>
        </>
    )
}
export default PsicanaliseMenu
