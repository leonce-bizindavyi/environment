import '@/styles/globals.css'
import '@/styles/fonts.css'
import { SessionProvider } from 'next-auth/react'
import Nav from '@/Components/navBar'

export default function App({ Component, pageProps: {session,...pageProps} }) {
  
  return <SessionProvider session={session} >
    
    <div className='relative bg-white pt-14  overflow-hidden'>
      <Nav />
    <Component {...pageProps} />
    </div>
  </SessionProvider> 
}
