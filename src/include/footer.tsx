import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
import EmailForm from '../../scripts/email-form'

export const revalidate = 1000 *10

function Footer (){
  console.log('Funcionou!')

  /*const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log(await data.json())*/
  
    return(
      
        <><footer className={style.footer}>
          <div className={style.footerContainer}>
            <div className={style.containerItem}>
              <h2 className={style.formTitulo}>Digite aqui o seu comentário e as suas dúvidas:</h2>
              <EmailForm/>
              <p className={style.nomeSite}>Site Restauramente</p><Image src="/logo-mente.png" width={30} height={30} alt ="logo do site"/>
            </div>
            <div className={style.descricaoAutor}>
              <Image src="/terapia-online4.jpg" width={660} height={240} quality={100} layout='responsive' alt="terapia online"/>
            </div>
           
           
          </div>

          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className={style.terapia}rel="noreferrer external" target="_blank" href="https://wa.me/5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank"rel="noreferrer external" className={style.whatsapp} href="https://wa.me/5511971252865"> <Image  src="/whatsapp.png" width={70} height={70} quality={50} alt="logo do whatsapp"/></a></>
    
    )
}

export default Footer