import Head from 'next/head'
import Image from 'next/image'
import Footer from '../include/footer'
import Header from '../include/header'
import Menu from '../include/menu'
import Img01_teste from '../public/atenas.jpg'
import MyApp from './_app'
import React from 'react'
import { ReactDOM } from 'react'
import Link from 'next/dist/client/link'
import HeadConfig from '../include/head'
function home (){
 return(<>  
            <HeadConfig/>
            <Header/>
            <Menu/>
            <main className="principal">
            <section className="container">
            
                <h1>Seja bem-vindo ao nosso site</h1>
                <p>Aqui você encontrará conteúdos que tratam dos diversos aspectos da alma humana, como suas emoções, seus sentimentos, pensamentos e atitudes deles advindos, assuntos desenvolvidos com o objetivo de auxiliá-lo em sua busca por entender o ser humano na sua complexidade e inteireza. Além disso disponibilizamos canais de acesso para que você entre em contato com o especialista para sanar algumas dúvidas e também para agendar suas sessões de psicanálise, quer seja para trabalhar algumas questões específicas que estejam dificultando sua trajetória existencial, quer seja para trabalhar temas que possam auxiliá-lo em seu autoconhecimento. Desejamos que você tenha uma ótima e proveitosa viagem pelo site e para dentro de si mesmo.</p>
                      
                      
            </section>  
            <section className="container-baixo">
                <article className="artigo">
                   <h2>POR QUE FAZER TERAPIA COM PSICANÁLISE?</h2>
                    
                    <img className= "foto-secao"   alt= "freud"/>
                    <p>A vida no mundo atual nos apresenta muitas demandas que nos colocam em constante questionamento sobre formas de atuação diante delas, nos conduzindo também a dúvidas existenciais que são capazes de gerar em nós fortes angústias e descontrole.  Em situações assim, é recomendável que a pessoa procure ajuda especializada, com o intuito de obter auxílio para entender melhor os diversos mecanismos que podem estar impedindo o livre fluir da sua vida e que pode estar na base do seu sofrimento...  <a href="psicanalise-49.php">continue lendo</a></p>
                </article> 
                <article className= "artigo">
                   <a href="/sobre.js">Link</a> 
                    <h2>ORIENTAÇÃO FILOSÓFICA</h2>
                  <img className="foto-secao" alt= "mente"/>
                    <p>Se você está buscando ampliar seu conhecimento acerca de si mesmo, entender suas  interações com as pessoas e o mundo à sua volta, a orientação filosófica pode ser um caminho promissor. Ela consiste  no desenvolvimento de uma abordagem  das questões do cotidiano do indivíduo, guiada pelo milenar conhecimento filosófico, estabelecendo um diálogo crítico, investigativo, que permita à pessoa que busca o consultório de filosofia compreender melhor suas questões. Todo esse percurso é construído à luz das ideias desenvolvidas ao longo da História da Filosofia, desde os sábios representantes da Filosofia Oriental, passando pelos clássicos da Grécia Antiga, até chegarmos aos dias atuais.  Você gostaria de saber mais sobre o funcionamento dessa prática? Entre em contato e teremos muito prazer em responder às suas perguntas    <a target="_blank" href= "https://api.whatsapp.com/send?phone=5511971252865"> Saiba mais</a></p>
                </article>
                <article className="artigo">
                    <h2>CONSELHOS DE SÓCRATES PARA PLENIFICAR NOSSA EXISTÊNCIA</h2>
                    <img className= "foto-secao"  alt= "arte"/>
                    <p>conteúdo do artigo   <a href=""> veja mais </a></p>
                </article>
                <article className="artigo">
                    <h2>PROCUSTO</h2>
                    <img className= "foto-secao" alt= "socrates-face"/>
                    <p>aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa a
                    <a href="psicanalise-4"> veja mais </a> </p>
                </article>
            </section>   
                     
        </main>     
        <Footer/>
        
            </>)
}


export default home;