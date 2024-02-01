import Script from "next/script";
import {GoogleAnalytics} from "@next/third-parties/google";

function ScriptAnalytics(){
    return (
        <>
         <Script async strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-P28978P59N"/>
            <Script strategy="lazyOnload" id='google-analytics'>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
    
                gtag('js', new Date());

                gtag('config', 'G-P28978P59N');
                `}
            </Script>
        </>
    )
}

export default ScriptAnalytics