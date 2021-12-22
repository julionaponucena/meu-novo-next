import Document, { Html,Head,Main,NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html Lang="pt-br">
                <Head>
                <link rel="shortcut icon" href="/logo-mente.png" type="imagem/x-icon"/>
                <title>teste</title>
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