import Head from "next/head";
import Header from "../../include/header";
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Principal from "../../supertags/principal";
import Titulo from "../../supertags/titulo";

function Filosofia_12 (){
    return (
        <>
        <Head>
            <title></title>
            <meta name="keywords" content="conheça a si mesmo"/>
            <meta name="description" content="...O mais difícil é justamente conhecer a si mesmo; para isto é indispensável muita sinceridade, pois temos tendências a só procurar nossas qualidades e estarmos convencidos de que os outros é que erram..."/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>CONHEÇA A SI MESMO</Titulo>
            <p>Antes de culparmos os outros, numa situação conflitiva, é recomendável analisar-se com o cuidado necessário, a fim de verificar se a causa do atrito não provém de nosso próprio temperamento ou de nossa formação.</p>
           
            <p>O mais difícil é justamente conhecer a si mesmo; para isto é indispensável muita sinceridade, pois temos tendências a só procurar nossas qualidades e estarmos convencidos de que os outros é que erram; quantas vezes vemos a palha no olho do vizinho, mas não enxergamos o tijolo que está no nosso?</p>
            
            <p>Por que estou sentindo isto? Por que estou agindo assim? Por que estou aborrecido hoje? É respondendo a estas perguntas com sinceridade e franqueza, que podemos evitar muitos problemas para nós mesmos e para os outros.</p>

            <p>Este conhecimento de si mesmo abrange vários aspectos da nossa personalidade:</p>

            <h2>A nossa capacidade intelectual</h2>

            <p> É interessante o adulto conhecer seu próprio nível mental, pois do grau de inteligência depende em grande parte, o êxito na vida profissional.</p>

            <h2>O nosso nível cultural</h2>
            <p>Em função de nossa inteligência, podemos verificar se ainda temos possibilidade de progredir na vida ou de estudar mais.</p>


            <h2>As nossas aspirações</h2>

            <p>A maioria das pessoas sente o desejo de alcançar certos objetivos na vida. Por esse motivo, uns preferem ser músicos, mecânicos, engenheiros, bons pais, etc. Para os que não conseguiram seu objetivo, a distância entre o que querem ser e o que são, realmente podem dar origem a muitos aborrecimentos.</p>

            <h2>Os nosso interesses</h2>
            <p>O mesmo pode acontecer com os nossos interesses; cada indivíduo tem interesses e gostos diferentes dos de outro; uns gostam de mecânica, outros de culinária, etc. Está comprovado que uma das maiores fontes de insatisfação profissional e pessoal é a falta de interesse.</p>

            <h2>O nosso temperamento e o nosso caráter</h2>

            <p>emperamento e caráter, e Relações Humanas, são fatores essenciais, explicando muitas de nossas reações em relação aos outros.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Filosofia_12