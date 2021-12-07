
import Image from "next/image";



function Header (){
    
    return (<header>
        <div className="cabecalho"> 
                <div className="logo-box">
                    <Image className= "logo" src="/logo-mente.png" width={1000} height={1000} />
                </div>
                <h1> Humanamente</h1>
               
            </div>
            <div className="redes-sociais inside-header">
                <a target="_blank">

                    
                    <Image src="/facebook-icon.png" width={40} height={40}/>
                </a>
                <a target="_blank" >

                    
                    <Image src="/Instagram-Icon.png" width={40} height={40}/>
                </a>
            </div> 
    </header>
    )
}

export default Header;