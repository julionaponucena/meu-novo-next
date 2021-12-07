import style from '../styles/modulos/container-menu.module.css'

function ContainerMenu (props){

return( 
    <>
    
        <div className={style.container}>
            <h1>{props.titulo}</h1>
        </div>
        <section className={style.hiperMenu}>{props.children}</section>
    </>
)
}

export default ContainerMenu