import React from 'react';
import Head from 'next/head';


import{ Footer} from './Footer';
import { NavBar } from './NavBar';
interface props{
  children: JSX.Element[] | JSX.Element
}
export const LayOut:React.FC<props> = ({children}) => {
  return (
    <div className="layout">
    <Head>
      <title>JS Mastery Store</title>
    </Head>
    <header>
      <NavBar />
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
