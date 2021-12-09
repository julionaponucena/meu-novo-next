import style from '../styles/modulos/container-menu.module.css'

function ContainerMenu (props){

return( 
    <>
        
        
        <section className={style.hiperMenu}>{props.children}</section>
    </>
)
}

export default ContainerMenu