import Head from 'next/head';


import { Footer } from './Footer';
import Navbar from './NavBar';


export const LayOut = ({children}) => {
  return (
    <div className="layout">
    <Head>
      <title>JS Mastery Store</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main className="main-container">
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}
