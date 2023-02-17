import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
function Footer (){
  const {register,handleSubmit,formState:errors} = useForm()
  const [sucess,setSucess] = useState(false)
  function enviarMensagem(dados) {
    fetch('/api/email',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-type': 'application/json',
                    
                   
                },
                body:JSON.stringify({
                  nome:dados.nome,
                  email:dados.email,
                  descricao:dados.descricao
                })
             
            }).then(()=>setSucess(true))
            .catch(err=>console.log(err))

            
  }
    return(
      
        <><footer className={style.footer}>
          <div className={style.footerContainer}>
            <div className={style.containerItem}>
             
              {sucess && 
              <h2>Obrigado Sua mensagem foi encaminhada com sucesso!</h2>
              }
              {!sucess &&
              <>
              <h2 className={style.formTitulo}>Digite aqui o seu comentário e as suas dúvidas:</h2>
              <form onSubmit={handleSubmit(enviarMensagem)}  className={style.form}>
                <div>
                    <label className={style.label}> Digite seu nome:</label>
                    <input name="nome" {...register('nome')} className={style.inputs}/>
                </div>
                <div>
                    <label className={style.label}>Digite seu e-mail:</label>
                    <input name="email" {...register('email')} className={style.inputs} type="email"/>
                </div>
                <div>
                    <label className={style.label} >Digite seu comentário:</label>
                    <textarea name="descricao" {...register('descricao')}  className={style.descricao}/>
                </div>
                <button className={style.botao} type="submit">Enviar</button>
            </form>
            </> 
              }
              <p className={style.nomeSite}>Site Restauramente</p><Image src="/logo-mente.png" width={30} height={30}/>
            </div>
            <div className={style.descricaoAutor}>
              <Image src="/terapia-online4.jpg" width={660} height={240} quality={100} layout='responsive'/>
            </div>
           
           
          </div>

          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className={style.terapia}rel="noreferrer external" target="_blank" href="https://wa.me/5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank"rel="noreferrer external" className={style.whatsapp} href="https://wa.me/5511971252865"> <Image  src="/whatsapp.png" width={70} height={70} quality={50}/></a></>
    
    )
}

export default Footer