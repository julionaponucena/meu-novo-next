import Header from "../include/header";
import Menu from "../include/menu";
import Footer from "../include/footer";
import Artigo from '../menu/menu-itens';
import HiperLink from "../scripts/hiperlinks";
import ContainerMenu from "../menu/container-menu";
import HeadConfig from "../include/head";
function PsicanaliseMenu (){
    return(
        <>
            <HeadConfig/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="Psicanalise">
                <HiperLink artigo={Artigo}/>
            </ContainerMenu>
            <Footer/>
        </>
    )
}
export default PsicanaliseMenu