import Head from "next/head"
import Header from "@include/header"
import Menu from "@include/menu"
import Footer from "@include/footer"
import HiperLink from "src/scripts/hiperlinks"
import artigoFilosofia from "src/menu/filosofia-itens"
import ContainerMenu from "src/menu/container-menu"
import ScriptAnalytics from "src/scripts/script-analytics"
import React from "react";

function FilosofiaMenu (){
    return(
        <>
            <Head>
                <title>Artigos sobre Filosofia</title>
            </Head>
            <ScriptAnalytics/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="Filosofia">
            <HiperLink artigo={artigoFilosofia} nomeArtigo="filosofia"/>
            </ContainerMenu>
            <Footer/>
        </>

    )
}
export default FilosofiaMenu
