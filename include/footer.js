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
              <p>Psicanalista Aparecido Soares de Alcântara Filho. Faz sessões de forma online. Para ter acesso a mais infornações entre em contato pelo número (11)971252865</p>
            </div>
          </div>

          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className={style.terapia}rel="noreferrer external" target="_blank" href="https://wa.me/5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank"rel="noreferrer external" className={style.whatsapp} href="https://wa.me/5511971252865"> <Image  src="/whatsapp.png" width={70} height={70} quality={50}/></a></>
    
    )
}

export default Footer