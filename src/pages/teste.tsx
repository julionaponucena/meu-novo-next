import React from "react";
import ReactDOMServer from "react-dom/server";
import babel, { BabelFileResult } from '@babel/core'




export default function Teste() {
    const Component =`
     function Component(){
        return <div>Teste</div>
     }
     `


    const Html = ReactDOMServer.renderToString(Component);
    console.log(Html)

    const FinalHtml = Html.replace("&lt;","<").replace("&gt;",">")
    console.log(FinalHtml)
     //const ComponentT = eval(`(${ComponentString})`);
    //  const componentStringT = cleanString.replace(/<([^>]+)>/g, "React.createElement('$1')");

    //  const ComponentA = eval(`(${componentStringT})`);
     
    //const Component = React.createElement('', null)
    
    //const Component = () => <div>Teste</div>
    return (
        <div>asdasd</div>
    );
}

async function getStaticProps() {
    const ComponentString =`
     function Component(){
        return <div>Teste</div>
     }
     `
     const babelResult = babel.transformSync(ComponentString, {presets: ['@babel/preset-react']}) as BabelFileResult


     const cleanString = eval(`(${babelResult.code})`);

    
    console.log(ComponentString)

     console.log('oasd')
    return { props: {
        Component:cleanString
    } }
}