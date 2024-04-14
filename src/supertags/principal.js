import style from '../styles/modulos/principal.module.css'

function Principal (props){
 return(
     <main className={style.principal}>{props.children}</main>
 )
}
export default Principal