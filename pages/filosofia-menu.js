import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import ArtigoFilosofia from "../scripts/filosofia-itens"
import HiperLink from "../scripts/hiperlinks"
import ContainerMenu from "../menu/container-menu"
import HeadConfig from "../include/head"
function FilosofiaMenu (){
    return(
        <>
            <HeadConfig/>
            <Header/>
            <Menu/>
            <ContainerMenu titulo="Filosofia">
                <HiperLink artigo={ArtigoFilosofia}/>
            </ContainerMenu>
            <Footer/>
        </>

    )
}
export default FilosofiaMenu