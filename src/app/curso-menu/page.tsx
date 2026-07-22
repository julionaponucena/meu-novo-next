import Head from "next/head"
import HiperLink from "src/scripts/hiperlinks"
import Header from "@include/header"
import Menu from "@include/menu"
import Footer from "@include/footer"
import artigoCursos from "src/menu/curso-itens"
import ContainerMenu from "src/menu/container-menu";
import ScriptAnalytics from "src/scripts/script-analytics"
import React from "react";

function CursoMenu (){
    return(
        <>
            <Head>
                <title>Cursos</title>
            </Head>
            <ScriptAnalytics/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="CURSOS">
               <HiperLink artigo={artigoCursos} nomeArtigo="cursos"/>
            </ContainerMenu>
            <Footer/>
        </>
    )
}
export default CursoMenu
