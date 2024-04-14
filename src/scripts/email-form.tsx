'use client'

import style from '../styles/modulos/footer.module.css'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'



export default function EmailForm() {
    const {register,handleSubmit,formState:errors} = useForm()
    const [sucess,setSucess] = useState(false)


    const nomeRegister = register('nome')
    const emailRegister = register('email')
    const descricaoRegister = register('descricao')

    function enviarMensagem(dados:FieldValues) {
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

    return ( 
    <form onSubmit={handleSubmit(enviarMensagem)}  className={style.form}>
        <div>
            <label className={style.label}> Digite seu nome:</label>
            <input {...nomeRegister} 
            onChange={nomeRegister.onChange}
            className={style.inputs}/>
        </div>
        <div>
            <label className={style.label}>Digite seu e-mail:</label>
            <input {...emailRegister} onChange={emailRegister.onChange} className={style.inputs} type="email"/>
        </div>
        <div>
            <label className={style.label} >Digite seu comentário:</label>
            <textarea {...descricaoRegister} onChange={descricaoRegister.onChange}  className={style.descricao}/>
        </div>
        <button className={style.botao} type="submit">Enviar</button>
    </form>
    )
}