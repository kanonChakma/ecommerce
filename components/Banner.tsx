import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client';
import banner from '../model/banner';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
interface props{
  BannerData:banner
}

export const Banner:React.FC<props> = ({BannerData}) => {
     let data:ImageUrlBuilder|string = urlFor(BannerData.image);
  return (
    <div className="hero-banner-container">
       
       <div> 
         <p className="beats-solo">{BannerData.smallText}</p>
          <h3>{BannerData.midText}</h3>
          <h1>{BannerData.largeText1}</h1>
          <img src={data} alt="headphone" className="hero-banner-image"/>
       </div>
       <div>
          <Link href={`/product/${BannerData.product}`}>
          <button type="button">
          {BannerData.buttonText}
          </button>
         </Link>
       <div className="desc">
          <h5>Description</h5>
          <p>{BannerData.desc}</p>
       </div>
       </div>
    </div>
  )
}
