import Script from "next/script";

function ScriptAnalytics(){
    return (
        <>
         <Script src="https://www.googletagmanager.com/gtag/js?id=G-P28978P59N"/>
            <Script id='google-analytics'>
                {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-P28978P59N');`
                }
            </Script>
        </>
    )
}

export default ScriptAnalytics