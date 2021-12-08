import Whatsapp from '../public/Whatsapp.png'
import Facebook from '../public/facebook-icon.png'
import Instagram from '../public/Instagram-Icon.png'
import Image from 'next/image'
function Footer (){
    return(
      
        <><footer>
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