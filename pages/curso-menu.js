
import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"

import ContainerMenu from "../menu/container-menu";
import HeadConfig from "../include/head";
function CursoMenu (){
    return(
        <>
            <HeadConfig/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="CURSOS">
               
            </ContainerMenu>
            <Footer/>
        </>
    )
}
export default CursoMenu