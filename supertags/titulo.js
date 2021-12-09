function Titulo (props){
    let titulo = props.children.toUpperCase()
    return(<h1>{titulo}</h1>)
}

export default Titulo