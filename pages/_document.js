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
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
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