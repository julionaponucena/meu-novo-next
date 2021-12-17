
import Image from 'next/image'
import Footer from '../include/footer'
import Header from '../include/header'
import Menu from '../include/menu'


import React from 'react'

import Link from 'next/dist/client/link'
import HeadConfig from '../include/head'
import ContainerTitulo from '../supertags/titulo-secao'
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
            <ContainerTitulo tag={1} titulo="Artigos"/>
            <section className="container-baixo">
               
                <article className="artigo artigo1">
                    
                        <Image className='imagem-artigo ordem1'width={720} height={480} src="/homem-oculos.jpg" />
                    


                    
                        <h3>POR QUE FAZER TERAPIA COM PSICANÁLISE?</h3>
                        
                        <p>A vida no mundo atual nos apresenta muitas demandas que nos colocam em constante questionamento sobre formas de atuação diante delas, nos conduzindo também a dúvidas existenciais que são capazes de gerar em nós fortes angústias e descontrole.  Em situações assim, é recomendável que a pessoa procure ajuda especializada, com o intuito de obter auxílio para entender melhor os diversos mecanismos que podem estar impedindo o livre fluir da sua vida e que pode estar na base do seu sofrimento...  <Link href="/psicanalise/psicanalise-49"><a>continue lendo</a></Link></p>
                    
                </article>
                
                <article className= "artigo artigo2">
                    
                        <Image className="imagem-artigo ordem-2" src="/aventura.jpg" width={720}height={480}  />
                    
                    <div className="artigo-texto ordem1">  
                        <h3>ORIENTAÇÃO FILOSÓFICA</h3>
                        <p>Se você está buscando ampliar seu conhecimento acerca de si mesmo, entender suas  interações com as pessoas e o mundo à sua volta, a orientação filosófica pode ser um caminho promissor. Ela consiste  no desenvolvimento de uma abordagem  das questões do cotidiano do indivíduo, guiada pelo milenar conhecimento filosófico, estabelecendo um diálogo crítico, investigativo, que permita à pessoa que busca o consultório de filosofia compreender melhor suas questões. Todo esse percurso é construído à luz das ideias desenvolvidas ao longo da História da Filosofia, desde os sábios representantes da Filosofia Oriental, passando pelos clássicos da Grécia Antiga, até chegarmos aos dias atuais.  Você gostaria de saber mais sobre o funcionamento dessa prática? Entre em contato e teremos muito prazer em responder às suas perguntas <a  target="_blank" rel="noreferrer" href="https://wa.me/5511971252865">Veja mais</a></p>
                    </div>
                   
                </article>
              
                <article className="artigo artigo1">
                    <Image className='imagem-artigo'width={720} height={480} src="/consultar.jpg" />
                    <div className="artigo-texto">
                        <h3>LEVE NOSSOS CURSOS E PALESTRAS PARA SUA EMPRESA OU ESCOLA</h3>
                    
                        <p>Nossos cursos e palestras são pensados a partir da perspectiva da valorização plena do  capital humano que existe em sua empresa, visando propiciar o desenvolvimento das potencialidades existentes em cada membro da sua equipe de trabalho. Para tanto, fazemos uso de abordagens filosóficas e psicanalíticas, com o intuito de promover a interação salutar entre pensamentos, sentimentos e emoções. Acesse nosso cardápio de cursos e palestras e fique por dentro dos serviços que podemos te oferecer. Aproveite nossos canais de atendimento e envie-nos suas dúvidas que teremos o maior prazer em saná-las.  <Link href="/cursos/curso-1"><a> veja mais </a></Link></p>
                    </div>
                </article>
                
            </section>   
                     
        </main>     
        <Footer/>
        
            </>)
}


export default home;