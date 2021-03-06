import Image from "next/image";
import style from "../styles/modulos/header.module.css"



function Header (){
    
    return (
        <header className={style.Header}>
            <div className={style.cabecalho}> 
                
                    <Image className={style.logo} src="/logo-mente.png" width={90} height={90} alt="logo do site" loading="eager"/>
                
                <h1 className={style.titulo}>estauramente</h1>
            
            </div>
            <div className={style.RedesSociais}>
                <a className={style.redeLink} target="_blank" rel="norrefer external" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                    <Image src="/Instagram-Icon.png"width={40} height={40} alt="icone do instagram" loading="eager"/>
                    
                    
                </a>
                <a className={style.redeLink} target="_blank" rel="norrefer external" href="https://www.facebook.com/isaltosp" >
                    <Image src="/facebook-icon.png"width={40} height={40} alt="icone do facebook" loading="eager" />
                    
                    
                </a>
            </div> 
        </header>
    )
}

export default Header;