import { useEffect } from 'react'
import '../styles/main.css'
import '../styles/menu.css'
import '../styles/index.css'
function MyApp({ Component, pageProps }) {
  function registerPWA(){
    if('serviceWorker' in navigator){

      navigator.serviceWorker.register('/sw.js')
    }
  }
  useEffect(registerPWA)
  return <Component {...pageProps} />
}

export default MyApp
