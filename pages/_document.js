import Document, { Html,Head,Main,NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html Lang="pt-br">
                <Head>
                    <link rel="shortcut icon" href="/logo-mente.png" type="imagem/x-icon"/>
                    <meta name="author" content="Júlio Naponucena de Alcântara"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument