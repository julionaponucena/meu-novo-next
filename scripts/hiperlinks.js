import Image from "next/image";
import style from "../styles/modulos/hiper-menu.module.css"
import Link from "next/link";
function HiperLink ({artigo,nomeArtigo}){
let titulo
  return(<>
  
  {artigo.map(item=> (<>
    <Link href={"/"+nomeArtigo+"/"+item.link}>
          <a className={style.hiperLink}>
          <Image src={"/"+item.img} width={360} height={240}/>
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