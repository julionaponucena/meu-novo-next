import Head from "next/head"
import Header from "../../include/header"
import Menu from "../../include/menu"
import Footer from "../../include/footer"
import Principal from "../../supertags/principal"
import Titulo from "../../supertags/titulo"

function Psicanalise_49 (){
    return (
        <>
        <Head>
            <title>Por que Fazer Terapia com Psicanálise?</title>
            <meta name="keywords" content="psicanalise ou terapia"/>
            <meta name="description " content="...Se optar pelo tratamento com um psicanalista a pessoa poderá ser conduzida a investigar suas memórias e experiências desde a infância até o presente, percorrendo um caminho de investigação acerca daqueles elementos que o tornaram a pessoa que ela é hoje e que podem ter lhe  provocado alguns dos seguintes sintomas, dentre outros"/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>POR QUE FAZER TERAPIA COM PSICANÁLISE?</Titulo>
            <p>A vida no mundo atual nos apresenta muitas demandas que nos colocam em constante questionamento sobre formas de atuação diante delas, nos conduzindo também a dúvidas existenciais que são capazes de gerar em nós fortes angústias e descontrole.  Em situações assim, é recomendável que a pessoa procure ajuda especializada, com o intuito de obter auxílio para entender melhor os diversos mecanismos que podem estar impedindo o livre fluir da sua vida e que pode estar na base do seu sofrimento.</p>
            <p>Se optar pelo tratamento com um psicanalista a pessoa poderá ser conduzida a investigar suas memórias e experiências desde a infância até o presente, percorrendo um caminho de investigação acerca daqueles elementos que o tornaram a pessoa que ela é hoje e que podem ter lhe  provocado alguns dos seguintes sintomas, dentre outros:</p>
            <ul className="lista-conteudo">
                <li>Problemas de relacionamento no ambiente de trabalho ou familiar</li>
                <li>Sensação de vazio ou inadequação à vida e à sociedade.</li>
                <li>Dificuldade em expressar suas emoções e sentimentos.</li>
                <li>Sentimento frequente de ressentimento ou mágoa</li>
                <li>Preocupações obsessivas</li>
                <li>Medos que a princípio possam ser injustificados</li>
                <li>Depressão ou ansiedade diante de questões referentes ao seu cotidiano.</li>
            </ul>
            <p>Além disso o tratamento psicanalítico  pode funcionar como uma boa ferramenta para quem deseja se conhecer melhor e descobrir novas perspectivas, através da identificação da origem de determinada emoção ou maneira de agir, com o intuito de aliviar o sofrimento psíquico enfrentado pela pessoa. Isso porque o tratamento ajuda o indivíduo a se autoavaliar e a buscar soluções a seus problemas. Tem mais dúvidas sobre a psicanálise ou deseja se informar melhor sobre o funcionamento das sessões? Faça sua pergunta que teremos muita satisfação em respondê-la.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Psicanalise_49