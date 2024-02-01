import Script from "next/script";
import {GoogleAnalytics} from "@next/third-parties/google";

function ScriptAnalytics(){
    return (
        <>
         {/*<Script src={`https://www.googletagmanager.com/gtag/js?${process.env.GA_MEASUREMENT_ID}`}/>
            <Script id='google-analytics'>
                {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', ${process.env.GA_MEASUREMENT_ID}, { cookie_flags: 'SameSite=None; Secure' });`
                }
            </Script>*/}
            <GoogleAnalytics id={process.env.GA_MEASUREMENT_ID} />
        </>
    )
}

export default ScriptAnalytics