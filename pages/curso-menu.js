import HiperLink from "../scripts/hiperlinks"
import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import artigoCursos from "../menu/curso-itens"
import ContainerMenu from "../menu/container-menu";
import HeadConfig from "../include/head";
function CursoMenu (){
    return(
        <>
            <HeadConfig/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="CURSOS">
               <HiperLink artigo={artigoCursos}/>
            </ContainerMenu>
            <Footer/>
        </>
    )
}
export default CursoMenu