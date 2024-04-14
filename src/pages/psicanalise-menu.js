import Head from "next/head"
import Header from "../include/header";
import Menu from "../include/menu";
import Footer from "../include/footer";
import HiperLink from "../scripts/hiperlinks";
import Artigo from "../menu/menu-itens"
import ContainerMenu from "../menu/container-menu";
import ScriptAnalytics from "../scripts/script-analytics";
function PsicanaliseMenu (){
    return(
        <>
            <Head>
                <title>Artigos sobre Psicanálise</title>
            </Head>
            <ScriptAnalytics/>
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