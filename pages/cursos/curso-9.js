import Header from "../../include/header";
import Principal from "../../supertags/principal";
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Titulo from "../../supertags/titulo";
import Head from "next/head";

function Curso_09 (){
    return (
        <>
        <Head>
            <title>Entendendo a educação à luz da Filosofia Clínica</title>
            <meta name="keywords" content="filosofia e educação"/>
            <meta name="description" content="O curso Entendendo a educação à luz da Filosofia Clínica  apresentará o instrumental da Filosofia Clínica como uma forma de leitura das questões educacionais, tendo em vista a construção de metodologias e materiais adequados às necessidades de cada contexto."/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>Entendendo a educação à luz da Filosofia Clínica</Titulo>
            <p>Considerando a necessidade atual do educador em adaptar seu trabalho aos anseios e necessidades da sociedade contemporânea,  aliada às teorias vigentes que nem sempre se aplicam ao contexto de cada realidade, propomos a construção de um projeto voltado para as necessidades de cada realidade educacional e, sobretudo, construído através de dados coletados pelos protagonistas destas realidades.</p>
            <h3>Ementa:</h3>
            <p>O curso Entendendo a educação à luz da Filosofia Clínica  apresentará o instrumental da Filosofia Clínica como uma forma de leitura das questões educacionais, tendo em vista a construção de metodologias e materiais adequados às necessidades de cada contexto.</p>
            <h3>Objetivo Geral:</h3>
            <p>Provocar a reflexão fundamentada acerca das questões educacionais e oferecer subsídios para a escolha ou construção de métodos e materiais adequados aos objetivos educacionais de cada contexto.</p>
            <h3> Público Alvo:</h3>
            <p>Professores, Coordenadores Pedagógicos e estudantes de Pedagogia.</p>
            <h3>Carga horária:</h3>
            <p>7 encontros de 4 horas cada.</p>
            <h3>Programa:</h3>
            <h2>Módulo 1: Filosofia Clínica: um instrumental útil em sala de aula</h2>
            <ul className="lista-conteudo">
                <li>Princípios da Filosofia Clínica.</li>
                <li>Posturas passíveis de adoção a partir da nossa experiência de vida.</li>
                <li>Instrumental de leitura de contexto como forma de entender a maneira como as pessoas  compreendem o mundo. </li>
            </ul>
            <h2>Módulo 2: Exames Categoriais: contextualizando a aprendizagem</h2>
            <ul className="lista-conteudo">
                <li>Escola como espaço de conhecimento e autoconhecimento. </li>
                <li>Formas de Educação sistemáticas/não sistemáticas.</li>
                <li>Interseções ente os saberes e entre os agentes do conhecimento.</li>
                <li>Ambientes: a forma como o criamos e como o interpretamos.</li>
            </ul>
            <h2>Módulo 3: Estrutura de Pensamento</h2>
            <ul className="lista-conteudo">
                <li>Aspectos gerais da Estrutura de Pensamento.</li>
                <li>Aspectos gerais da Estrutura de Pensamento.</li>
                <li>Epistemologia: diferentes formas  de construção de conhecimento</li>
                <li>Armadilhas conceituais: impasses e dificuldades nas relações entre os indivíduos e destes com o conhecimento.</li>
            </ul>
            <h2>Módulo 4:</h2>
            <p> O papel da filosofia no cotidiano educacional: construindo uma pedagogia regional que se constitua como &ldquo;um mundo onde cabem vários mundos&rdquo;.</p>
            <h3>Metodologia:</h3>
            <p>Apresentação instrumental da Filosofia Clínica em sua aplicabilidade às questões educacionais. Leitura de contextos com abordagem filosófica. Construção de métodos e materiais a partir de estudos de casos.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Curso_09