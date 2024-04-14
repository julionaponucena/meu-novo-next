import Image from "next/image";

export default function Informations(){
    return (
        <div className="redes-sociais inside-menu">
            <a id="facebook" target="_blank" href="https://www.facebook.com/isaltosp">
                <Image src="/facebook-icon.png" width={90} height={90} alt="icone do facebook"/>
            </a>
            <a  id="instagram" target="_blank" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                <Image src="/Instagram-Icon.png" width={90} height={90} alt="icone do instagram"/>
            </a>
        </div>
    )
}