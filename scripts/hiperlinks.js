import Link from "next/link"
import Image from "next/image"
import style from "../styles/modulos/hiper-menu.module.css"
function HiperLink ({artigo}){
 
  return(<>
  {console.log(artigo)}
  {artigo.map(item=>(
    <Link href={item.link}>
      <a className={style.hiperLink}>
        <Image className={style.foto} src={'/'+item.img} width={360} height={240}/>
        <p>{item.titulo}</p>
      </a>
    </Link>
  
  
  )
  )}
  
      </>
      
  )
  


}
export default HiperLink;