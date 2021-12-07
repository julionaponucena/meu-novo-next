import artigoCursos from "../menu/curso-itens";
import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import HiperLink from "../scripts/hiperlinks"
import ContainerMenu from "../menu/container-menu";

function CursoMenu (){
    return(
        <>
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