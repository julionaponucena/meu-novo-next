import Header from "../include/header"
import Menu from "../include/menu"
import Footer from "../include/footer"
import style from "../styles/modulos/sobre.module.css"
import { useState } from "react"
import Image from "next/image";
import Head from "next/head"
function Sobre (){
    /**/
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [descricao,setDescricao] = useState('')
    const [sucess,setSucess] = useState(false)
    function onChangeNome (evt){
        setNome(evt.target.value)   
    }
    function onChangeEmail (evt){
        setEmail(evt.target.value)
    }
    function onChangeDescricao (evt) {
        setDescricao(evt.target.value)
    }
    async function sendEmail (evt){
        evt.preventDefault()
        try{
            const response = await fetch('https://meu-django.herokuapp.com/email/enviar',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-type': 'application/json',
                    'X-CSRFToken':'{{csrf_token}}'
                },
                body:JSON.stringify({saudacao:'Olá!'})
            })
            const json =await response.json()
            console.log(json)
            setSucess(true)
        }catch(err){
            console.log(err)
        }
        
    }
    return(
        <>
            <Head>
                <title>Autor</title>    
            </Head> 
            <Header/>
            <Menu/>
            <main className={style.biografia}>

        
                
                <div className={style.autor}>
                    <div >
                        <Image className={style.perfil} src="/autoretrato.jpg"   alt="Psicanalista Aparecido"width={364}height={469}
                        layout="responsive" />
                    </div>
                    <h1>Aparecido Soares de Alcântara Filho Psicanalista</h1>
                </div>


                <div className={style.caixaTexto}>


                <p>Psicanalista pela Associação Nacional de Estudos Psicanalíticos (ANEP), Especialista em Psicanálise e Educação pela Faculdade de Filosofia Ciências e Letras de Piraju (FACESPI), Filósofo Clínico pelo Instituto Packter (RS),  Especialista em Docência em Filosofia pela UNESP, Licenciado em Pedagogia (UNIBAN), História (UNIBAN), Filosofia (UNIFAI), Especialista em Terapia Cognitivo Comportamental em formação pela Universidade Cruzeiro do Sul, Psicanalista Clínico no Espaço Espairecer(Salto/SP) entre 2017 e 2020, Professor de Filosofia, Sociologia e História na Rede Estadual e na Rede SESI/SP. Foi   professor de graduação e pós graduação no Instituto Infinitus Educacional, entre 2015 e 2020, membro do Departamento Pedagógico da Secretaria Municipal de Educação de Salto, entre 2005 e 2011, onde atuou em projetos de formação de professores, gestores e demais trabalhadores da referida Secretaria. Participa também em eventos voltados para a formação de educadores em Congressos e afins, além de desenvolver  projetos voltados para a aplicação da Psicanálise e da Filosofia  nas questões existenciais e no fazer pedagógico nas instituições de ensino  onde atuou e atua.</p>
                </div>



            </main>

            <form onSubmit={sendEmail} className={style.form}>
                <div>
                    <label className={style.label}> Digite seu nome:</label>
                    <input onChange={onChangeNome} className={style.inputs}/>
                </div>
                <div>
                    <label className={style.label}>Digite seu e-mail:</label>
                    <input onChange={onChangeEmail} className={style.inputs} type="email"/>
                </div>
                <div>
                    <label className={style.label}>Digite seu comentário:</label>
                    <textarea onChange={onChangeDescricao} className={style.inputs}/>
                </div>
                <button type="submit">Enviar</button>
            </form> 
            
            <Footer/>
        </>
    )
}
export default Sobre;