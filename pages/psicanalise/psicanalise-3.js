import HeadConfig from "../../include/head";
import Header from "../../include/header"
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Principal from "../../supertags/principal";
import Titulo from "../../supertags/titulo";

function Psicanalise_02 (){
    return(
        <>
        <HeadConfig/>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo></Titulo>
        </Principal>
        </>
    )
}