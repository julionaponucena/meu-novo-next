import Image from "next/image";
import style from "../styles/modulos/hiper-menu.module.css"
function HiperLink ({artigo}){
let titulo
  return(<>
  
  {artigo.map(item=> (<> 
          <a className={style.hiperLink}>
          <Image src={"/"+item.img} width={360} height={240}/>
        <p>{item.titulo.toUpperCase()}</p>
      </a>
    
  </>
  
  )
  )}
  
      </>
      
  )
  


}
export default HiperLink;