import Head from "next/head"
import HiperLink from "../scripts/hiperlinks"
import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import artigoCursos from "../menu/curso-itens"
import ContainerMenu from "../menu/container-menu";

function CursoMenu (){
    return(
        <>
            <Head>
                <title>Cursos</title>
            </Head>
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