import Head from "next/head";
import Header from "@include/header";
import Menu from "@include/menu";
import Footer from "@include/footer";
import Principal from "src/supertags/principal";
import Titulo from "src/supertags/titulo";
import Image from "next/image";
import ScriptAnalytics from "src/scripts/script-analytics";
import React from "react";

function Filosofia_04 (){
    return (
        <>
        <Head>
            <title>Psicologia do Indivíduo: Corpo e Mente São Inseparáveis</title>
            <meta name="keywords" content="corpo e mente"/>
            <meta name="description" content="...Em sua origem a palavra individual tem o sentido de indivisível, o que significa dizer que ao olharmos para qualquer  pessoa devemos buscar enxergá-la em sua integralidade, não efetuando a costumeira separação entre mente e corpo, ou ainda separando a mente consciente da mente inconsciente..."/>
        </Head>
        <ScriptAnalytics/>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>PSICOLOGIA DO INDIVÍDUO: CORPO E MENTE SÃO INSEPARÁVEIS</Titulo>
            <p>Em sua origem a palavra individual tem o sentido de indivisível, o que significa dizer que ao olharmos para qualquer  pessoa devemos buscar enxergá-la em sua integralidade, não efetuando a costumeira separação entre mente e corpo, ou ainda separando a mente consciente da mente inconsciente. Em se tratando do adoecimento do corpo, a partir dessa constatação entendemos  que os sintomas físicos, em sua maioria, possuem uma conexão com o estado mental do indivíduo, reproduzindo fisicamente aquilo que a mente, mesmo que subjetivamente, comunica ao corpo.</p>
            <p>Outra conclusão importante que esta constatação nos permite chegar é que às vezes as pessoas recorrem a argumentos do tipo “foi a emoção que tomou conta de mim, de forma que não pude evitar tal comportamento,” estão se entregando àquilo que chamamos de mentiras da vida.  Essas mentiras são frutos de uma visão deturpada que formamos sobre nós mesmos e sobre nosso papel existencial, visão esta que nos conduz a uma visão reduzida de nós e que nos faz agir como se não tivéssemos condições de atuar proativamente sobre nossas próprias escolhas e atitudes. O processo de superação dos efeitos  de tais mentiras começa pela tomada de consciência das principais mentiras que teimosamente cultivamos e que nos roubam a condição de protagonistas dos nossos atos. Aprender a separar as tarefas e conferir-lhes a real importância, também constitui em um importante passo na direção da construção de uma vida psíquica saudável. Quer saber mais sobre o assunto? Entre em contato conosco e agende uma avaliação.</p>
            <Image src="/controle-mente.jpg" alt="Homem pilotando sua mente" width={360} height={240}/>
        </Principal>
        <Footer/>
        </>
    )
}
export default Filosofia_04