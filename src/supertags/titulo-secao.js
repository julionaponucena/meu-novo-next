import style from '../styles/modulos/container-menu.module.css'

function ContainerTitulo (props){
    function TagUsar (prop){
        let tag
        switch(props.tag){
            case 0:
                tag = <h1 className={style.tagUsar}>{prop.children}</h1>
                break;
            case 1:
                tag = <h2 className={style.tagUsar}>{prop.children}</h2>
                break;
            case 2:
                tag = <h3 className={style.tagUsar}>{prop.children}</h3>
            break;
        }
        return tag
    }

    return(<div className={style.container}>
        <TagUsar>{props.titulo}</TagUsar>
    </div>)
}
export default ContainerTitulo