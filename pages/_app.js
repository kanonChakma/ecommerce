import { Toaster } from 'react-hot-toast';
import { LayOut } from '../components/LayOut';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
   <StateContext>
     <LayOut>
       <Toaster />
       <Component {...pageProps} />
     </LayOut>
   </StateContext> 
  )
}

export default MyApp
