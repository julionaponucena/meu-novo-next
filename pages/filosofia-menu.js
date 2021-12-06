import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import ArtigoFilosofia from "../scripts/filosofia-itens"
import HiperLink from "../scripts/hiperlinks"
function FilosofiaMenu (){
    return(
        <>
            <Header/>
            <Menu/>
            <section className="hiper-menu">
            <HiperLink obj={ArtigoFilosofia}/>
            </section>
            <Footer/>
        </>

    )
}
export default FilosofiaMenu