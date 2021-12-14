import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import style from "../styles/modulos/sobre.module.css"

import Image from "next/image";
import HeadConfig from "../include/head";
function Sobre (){
    return(
        <>
            <HeadConfig/>
            <Header/>
            <Menu/>
            <main className={style.biografia}>

        
                
                <div className={style.autor}>
                    <div className={style.perfil}>
                        <Image  src="/autoretrato.jpg"   alt="Psicanalista Aparecido"width={364}height={469}
                        layout="responsive" priority={true}/>
                    </div>
                    <h1>Aparecido Soares de Alcântara Filho Psicanalista</h1>
                </div>


                <div className={style.caixaTexto}>


                <p>Psicanalista pela Associação Nacional de Estudos Psicanalíticos (ANEP), Especialista em Psicanálise e Educação pela Faculdade de Filosofia Ciências e Letras de Piraju (FACESPI), Filósofo Clínico pelo Instituto Packter (RS),  Especialista em Docência em Filosofia pela UNESP, Licenciado em Pedagogia (UNIBAN), História (UNIBAN), Filosofia (UNIFAI), Especialista em Terapia Cognitivo Comportamental em formação pela Universidade Cruzeiro do Sul, Psicanalista Clínico no Espaço Espairecer(Salto/SP) entre 2017 e 2020, Professor de Filosofia, Sociologia e História na Rede Estadual e na Rede SESI/SP. Foi   professor de graduação e pós graduação no Instituto Infinitus Educacional, entre 2015 e 2020, membro do Departamento Pedagógico da Secretaria Municipal de Educação de Salto, entre 2005 e 2011, onde atuou em projetos de formação de professores, gestores e demais trabalhadores da referida Secretaria. Participa também em eventos voltados para a formação de educadores em Congressos e afins, além de desenvolver  projetos voltados para a aplicação da Psicanálise e da Filosofia  nas questões existenciais e no fazer pedagógico nas instituições de ensino  onde atuou e atua.</p>
                </div>



            </main>

            <Footer/>
        </>
    )
}
export default Sobre;