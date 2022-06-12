/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { urlFor } from '../lib/client';

export const Banner= ({BannerData}) => {
     let data= urlFor(BannerData.image);
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
