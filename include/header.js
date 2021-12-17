import Image from "next/image";




function Header (){
    
    return (<header>
        <div className="cabecalho"> 
                <div className="logo-box">
                <Image src="/logo-mente.png" width={90} height={90}/>
                </div>
                <h1>estauramente</h1>
               
            </div>
            <div className="redes-sociais inside-header">
                <a target="_blank" rel="norrefer external" href="https://www.instagram.com/psicanalistaaparecidoalcantara/">
                <Image src="/Instagram-Icon.png"width={90} height={90}/>
                    
                    
                </a>
                <a target="_blank" rel="norrefer external" href="https://www.facebook.com/isaltosp" >
                <Image src="/facebook-icon.png"width={90} height={90}/>
                    
                    
                </a>
            </div> 
    </header>
    )
}

export default Header;