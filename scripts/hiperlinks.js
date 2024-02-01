import Image from "next/image";
import style from "../styles/modulos/hiper-menu.module.css"
import Link from "next/link";
function HiperLink ({artigo,nomeArtigo}){
  return(<>
  
  {artigo.map(item=> (<>
    
    <Link  className={style.hiperLink}href={"/"+nomeArtigo+"/"+item.link} passHref>
        
          <Image placeholder="blur" blurDataURL={"/"+item.img} className={style.foto} src={"/"+item.img} width={360} height={240} quality={50} alt={item.alt}/>
        <p>{item.titulo.toUpperCase()}</p>
  
    </Link>
  </>
  
  )
  )}
  
      </>
      
  )
  


}
export default HiperLink;