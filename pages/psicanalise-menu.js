import Header from "../include/header";
import Menu from "../include/menu";
import Footer from "../include/footer";
import HiperLink from "../scripts/hiperlinks";
import Artigo from "../menu/menu-itens"
import ContainerMenu from "../menu/container-menu";
import HeadConfig from "../include/head";
function PsicanaliseMenu (){
    return(
        <>
            <HeadConfig/>
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