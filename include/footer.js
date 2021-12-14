import style from '../styles/modulos/footer.module.css'
import Image from 'next/image'
function Footer (){
    return(
      
        <><footer>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511971252865" className={style.whatsapp}>
                <Image src="/whatsapp.png" width={70} height={70}/>    
            </a>
            <div className="conteudo-rodape">
                <p>Siga-nos também nas redes sociais</p>
                <a target="_blank" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                </a>
                <a target="_blank" href="https://www.facebook.com/isaltosp">
                   
                </a>
            </div>
        </footer><a className="terapia" target="_blank" href="https://api.whatsapp.com/send?phone=5511971252865">
                <span> Agende sua sessão online</span>
            </a><a target="_blank" className="whatsapp" href="https://api.whatsapp.com/send?phone=5511971252865"> </a></>
    
    )
}

export default Footer