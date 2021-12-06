import Header from "../include/header";
import Menu from "../include/menu";
import Footer from "../include/footer";
import Artigo from "../scripts/menu-itens";
import HiperLink from "../scripts/hiperlinks";
function PsicanaliseMenu (){
    return(
        <>
            <Header/>
            <Menu/>
            <section className="hiper-menu">
                <HiperLink obj={Artigo}/>
            </section>
            <Footer/>
        </>
    )
}
export default PsicanaliseMenu