import Image from "next/image";
import style from "../styles/modulos/hiper-menu.module.css"
import Link from "next/link";
function HiperLink ({artigo,nomeArtigo}){
  return(<>
  
  {artigo.map(item=> (<>
    
    <Link href={"/"+nomeArtigo+"/"+item.link}>
          <a className={style.hiperLink}>
          <Image placeholder="blur" blurDataURL={"/"+item.img} className={style.foto} src={"/"+item.img} width={360} height={240} quality={50}/>
        <p>{item.titulo.toUpperCase()}</p>
      </a>
    </Link>
  </>
  
  )
  )}
  
      </>
      
  )
  


}
export default HiperLink;