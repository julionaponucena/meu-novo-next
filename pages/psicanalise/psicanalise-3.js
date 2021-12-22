import Head from "next/head";
import Header from "../../include/header"
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Principal from "../../supertags/principal";
import Titulo from "../../supertags/titulo";

function Psicanalise_03 (){
    return(
        <>
        <Head>
            <title>Colaboração para o Bem-Estar Coletivo e Autorrealização</title>
            <meta name="keywords" content="bem estar coletivo"/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>COLABORAÇÃO PARA O BEM-ESTAR COLETIVO E AUTORREALIZAÇÃO</Titulo>
            <p>Embora cada um de nós tenha maiores condições de encontrar a realização na medida em que assume o protagonismo da própria vida, é importante que entendamos que não somos mais que um membro de uma comunidade maior, condição a ser considerado por aquele que deseja encontrar sua realização e, ao mesmo tempo, manter sua integridade psíquica e social. Ao invés de se ver como protagonista da própria vida, algumas pessoas se posicionam como protagonistas do mundo, o que as leva a agir em suas relações interpessoais como se todos estivessem a serviço das suas necessidades, adotando a máxima de que ele veio ao mundo para ser servido. Quando percebe que o outro não está a seu serviço, o indivíduo autocentrado o toma como inimigo, gerando assim um conflito transferencial altamente comprometedor nas suas relações com as pessoas ao seu redor e com o próprio mundo.</p>
            <p>É muito comum pessoas assim desenvolverem manias de perseguição, na medida em que começa a acreditar que os outros estão tramando algo contra ele, que não compreendem suas necessidades ou que ainda o desejem derrotar. É fácil de imaginar o quanto tal atitude é capaz de envenenar a pessoa em suas relações, na medida em que ela alimenta a crença disfuncional de desamparo e desamor, fortes gatilhos para o seu adoecimento psíquico. Para aqueles que querem se livrar desse ciclo, faz-se necessário um caminhar adiante, cujos passos o conduzam ao pensamento de que o importante não é o que as pessoas podem  lhe oferecer, mas o que ele é capaz de oferecer como contribuição para  tornar melhor  a vida do outro. Isso é sinal de compromisso com a comunidade global na qual estamos inseridos.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Psicanalise_03