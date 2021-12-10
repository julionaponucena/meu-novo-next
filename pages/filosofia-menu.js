import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import HiperLink from "../scripts/hiperlinks"
import artigoFilosofia from "../menu/filosofia-itens"
import ContainerMenu from "../menu/container-menu"
import HeadConfig from "../include/head"
function FilosofiaMenu (){
    return(
        <>
            <HeadConfig/>
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