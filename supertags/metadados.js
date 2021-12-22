import Head from "next/head";

function Metadados (props){
   return( 
   <Head>
        <meta name="description" content={props.descricao}/>
        <meta name="keywords" content={props.chave}/>
    </Head>
   )
}


export default Metadados