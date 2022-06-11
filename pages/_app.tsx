import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayOut } from '../components/LayOut'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  )
}

export default MyApp
