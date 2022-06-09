import Link from 'next/link'
import React from 'react'

export const Banner = () => {
  return (
    <div className="hero-banner-container">
       
       <div> 
         <p className="beats-solo">
           SMALL TEXT
         </p>

          <h3>MID TEXT</h3>
          <img src="" alt="headphone" className="hero-banner-image"/>
       </div>
       <div>
          <Link href={`/product/${1}`}>
          <button type="button">
            BUTTON TEXT
          </button>
         </Link>
       <div className="desc">
          <h5>Description</h5>
          <p>DESCRIPTION</p>
       </div>
       </div>
    </div>
  )
}
