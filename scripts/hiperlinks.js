
import style from "../styles/modulos/hiper-menu.module.css"
function HiperLink ({artigo}){
let titulo
  return(<>
  
  {artigo.map(item=> (<> 
          <a className={style.hiperLink}>
        
        <p>{item.titulo}</p>
      </a>
    
  </>
  
  )
  )}
  
      </>
      
  )
  


}
export default HiperLink;