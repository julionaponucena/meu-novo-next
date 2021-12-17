import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
function Footer (){
    return(
      
        <><footer>
          <p className={style.direitoUso}>Copyright © 2021 |Júlio Naponucena de Alcântara</p>
            
        </footer><a className="terapia" target="_blank" href="https://api.whatsapp.com/send?phone=5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank" className="whatsapp" href=""> </a></>
    
    )
}

export default Footer