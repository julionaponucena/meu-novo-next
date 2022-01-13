import Header from "../../include/header";
import Principal from "../../supertags/principal";
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Titulo from "../../supertags/titulo";
import Head from "next/head";

function Curso_07 (){
    return (
        <>
        <Head>
            <title>Ética Profissional e Administração do Tempo</title>
            <meta name="keywords" content="ÉTICA PROFISSIONAL,ADMINISTRAÇÃO DO TEMPO"/>
            <meta name="description" content="O objetivo principal deste curso é  melhorar as relações humanas, do indivíduo consigo mesmo e dele no exercício da sua função laboral, diante de uma abordagem sobre o comportamento ético e responsável, tanto em relação à execução das suas atividades, quanto em relação à responsabilização individual para com o bem-estar coletivo . Para tal abordaremos os seguintes temas:"/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>ÉTICA PROFISSIONAL E ADMINISTRAÇÃO DO TEMPO</Titulo>
            <p>O objetivo principal deste curso é  melhorar as relações humanas, do indivíduo consigo mesmo e dele no exercício da sua função laboral, diante de uma abordagem sobre o comportamento ético e responsável, tanto em relação à execução das suas atividades, quanto em relação à responsabilização individual para com o bem-estar coletivo . Para tal abordaremos os seguintes temas:</p>
            <h2>MÓDULO I</h2>
            <h3>Ética e moral</h3>
            <ul className="lista-conteudo">
                <li>A ética: reflexão crítica</li>
                <li>Ética profissional</li>
            </ul>
            <h3>Autoestima;</h3>
            <ul className="lista-conteudo">
                <li>Autoconceito e autoestima</li>
                <li>A importância da autoestima</li>
                <li>A construção da autoestima</li>
                <li>Fundamentos das relações humanas</li>
                <li>Associações humanas</li>
                <li>Os tipos de grupos sociais</li>
            </ul>
            <h3>Interação social</h3>
            <ul className="lista-conteudo">
                <li>Cooperação</li>
                <li>Oposição</li>
                <li>Competição</li>
                <li>Conflito</li>
                <li>Estratégias para a solução de conflitos</li>
                <li>Ajustamento</li>
                <li>Acomodação: coerção, tolerância, acordo ou compromisso e conciliação</li>
                <li>Assimilação</li>
            </ul>
            <h3>Comportamento social humano</h3>
            <ul className="lista-conteudo">
                <li>Necessidades humanas</li>
                <li>Reações emocionais</li>
                <li>Troca de influência entre o indivíduo e o grupo</li>
            </ul>
            <h3>Refletindo sobre a comunicação</h3>
            <ul className="lista-conteudo">
                <li>Conceito de comunicação</li>
                <li>Elementos da comunicação</li>
                <li>Tipos de comunicação</li>
                <li>Ruídos e barreiras à comunicação</li>
                <li>Para melhorar a comunicação</li>
                <li>Para um melhor conhecimento de si</li>
            </ul>
            <h3>A qualidade e o cliente</h3>
            <ul className="lista-conteudo">
                <li>O que é qualidade?</li>
                <li>O público de uma empresa</li>
                <li>Qualidade e participação</li>
                <li>Sete pecados do serviço</li>
                <li>Como atender o cliente com qualidade</li>
            </ul>
            <h2>MÓDULO II: ADMINISTRAÇÃO DO TEMPO</h2>
            <h3>Programa:</h3>
            <ul className="lista-conteudo">
                <li>Organizando uma Agenda do Tempo.</li>
                <li>Dividindo seu trabalho de rotina em lotes.</li>
                <li>As oito maneiras de superar o adiamento</li>
                <li>Três princípios gerenciais clássicos de administração de tempo.</li>
                <li>Alguns passos para gerenciar seu tempo com maior eficácia.</li>
                <li>O Delegante Eficaz.</li>
                <li>Organizando Sistemas de Follow-Up Eficientes.</li>
                <li>Aspectos Estratégicos.</li>
                <li>Aspectos Táticos.</li>
                <li>Bons hábitos de trabalho</li>
                <li>Ordem – 4 &ldquo;S&rdquo;</li>
            </ul>
            <h3>Público</h3>
            <p>Trabalhadores das instituições públicas e/ou privadas e demais pessoas que se sentirem motivadas a refletir sobre os temas.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Curso_07