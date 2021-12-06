import Link from "next/link"
import Image from "next/image"

function HiperLink (props){
    let corpo
  for (let artig of props.obj){
      let titulo = artig.titulo.toUpperCase()
      corpo += (
          <Link href={artig.link}>
            <div className="hiper-link">
            
                <p>{titulo}</p>
            </div>
          </Link>
      )
      
      
     
  }

  return corpo;
}
export default HiperLink;