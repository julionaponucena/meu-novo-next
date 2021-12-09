import style from '../styles/modulos/container-menu.module.css'

function ContainerTitulo (props){
    return(<div className={style.container}>
        <h1>{props.children}</h1>
    </div>)
}
export default ContainerTitulo