import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
function Footer (){
    return(
      
        <><footer className={style.footer}>
          <div className={style.footerContainer}>
            <div className={style.containerItem}>
              <p className={style.nomeSite}>Site Restauramente</p><Image src="/logo-mente.png" width={30} height={30}/>
            </div>
            <div className={style.descricaoAutor}>
              <Image src="/terapia-online4.jpg" width={660} height={240} quality={100} layout='responsive'/>
            </div>
            <div className={style.redesFooter}>
              <h3>Siga-nos nas redes sociais</h3>
              <a href="https://www.instagram.com/psicanalistaaparecidoalcantara/" target="_blank" rel="norrefer">Instagram</a>
              <a href="https://www.facebook.com/isaltosp" target="_blank" rel="norrefer">Facebook</a>
            </div>
           
          </div>

          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className={style.terapia}rel="noreferrer external" target="_blank" href="https://wa.me/5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank"rel="noreferrer external" className={style.whatsapp} href="https://wa.me/5511971252865"> <Image  src="/whatsapp.png" width={70} height={70} quality={50}/></a></>
    
    )
}

export default Footer