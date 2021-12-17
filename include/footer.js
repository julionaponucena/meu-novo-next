import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
function Footer (){
    return(
      
        <><footer>
          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className="terapia" rel="noreferrer external" target="_blank" href="https://wa.me/5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank"rel="noreferrer external" className={style.whatsapp} href="https://wa.me/5511971252865"> <Image  src="/whatsapp.png" width={70} height={70}/></a></>
    
    )
}

export default Footer