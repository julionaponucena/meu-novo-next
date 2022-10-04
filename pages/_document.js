import Document, { Html,Head,Main,NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html Lang="pt-br">
                <Head>
                    <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                    />
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="icon" href="/logo-mente.png"/>
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