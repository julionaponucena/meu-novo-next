import { Html } from "next/document"
import Head from "next/head"

function HeadConfig(){
  return(   
    <Head>
      <Html lang="pt-br"/>
       <link rel="shortcut icon" href="/logo-mente.png" type="imagem/x-icon"/>
       <title>Restauramente</title> 
    </Head>
    )
}

export default HeadConfig