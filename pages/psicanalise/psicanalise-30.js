import Head from "next/head"
import Header from "../../include/header"
import Menu from "../../include/menu"
import Footer from "../../include/footer"
import Principal from "../../supertags/principal"
import Titulo from "../../supertags/titulo"

function Psicanalise_30 (){
    return (
        <>
        <Head>
            <title>A Prática da Psicoterapia e o Caminho da Cura</title>
            <meta name="keywords" content="processo terapêutico"/>
            <meta name="description" content="Na prática, ao invés de apenas ordenar que o filho estude, por exemplo, podemos atuar sobre ele com o intuito de aumentar-lhe a autoconfiança objetivando que ele consiga enfrentar os seus desafios."/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>A PRÁTICA DA PSICOTERAPIA E O CAMINHO DA CURA</Titulo>
            <p>As notícias envolvendo o caso de crianças vítima de maus tratos volta e meia povoam os meios de comunicação, nos conduzindo inevitavelmente ao questionamento sobre os elementos necessários para a prática de uma educação eficiente e, sobretudo, humanista. Infelizmente constatamos que muitos pais e educadores ainda estão presos em um modelo educativo no qual o apontamento dos erros e a aplicação de castigos  é visto como a maneira mais eficiente. Ledo engano, uma vez que normalmente a educação que privilegia o castigo peca por não possibilitar aos seus executores a clareza necessária que lhes possibilitará fazer a separação entre uma intervenção castradora e aquela que promove o encorajamento.</p>
            <p>Na prática, ao invés de apenas ordenar que o filho estude, por exemplo, podemos atuar sobre ele com o intuito de aumentar-lhe a autoconfiança objetivando que ele consiga enfrentar os seus desafios. Nesse sentido, compete aos educadores apontar as oportunidades, com o devido cuidado para que não se configure em uma imposição que deverá ser aceita sem a contrapartida do educando. Quando os pais determinam o caminho que o filho deve percorrer, respondendo por eles aos múltiplos questionamentos próprios da sua existência eles o privam do importante desafio de enfrentar a tarefa de tomar decisões. O resultado disso pode ser um adulto inseguro, imaturo e normalmente infeliz com as escolhas que fizeram por ele, para uma vida que compete a ele viver.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Psicanalise_30