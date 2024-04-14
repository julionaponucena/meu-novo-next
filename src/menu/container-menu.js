import style from '../styles/modulos/container-menu.module.css'
import ContainerTitulo from '../supertags/titulo-secao'
function ContainerMenu (props){

return( 
    <>
        <ContainerTitulo titulo={props.titulo} tag={0}/> 
        
        <section className={style.hiperMenu}>{props.children}</section>
    </>
)
}

export default ContainerMenu