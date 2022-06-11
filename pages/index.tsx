import React from 'react'
import { Banner } from '../components/Banner';
import { FooterBanner } from '../components/FooterBanner';
import { Product } from '../components/Product';
import {client} from '../lib/client';
import product from '../model/product';
interface props {
  products:any;
  banners:any;
}
const index:React.FC<props> = ({products,banners}) => {
  console.log(products)
  return (
    <div>
      <Banner   BannerData={banners.length && banners[0]} />
       <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaker of many variations</p>
       </div>

       <div>
       <div className="products-container">
           {products?.map((product:product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
      <FooterBanner  footerBanner={banners.length && banners[0]}/>
    </div>
  )
}


export const getServerSideProps = async() =>{
  
  const query = '*[_type == "product"]';
  const products =  await client.fetch(query);

  const banner = await '*[_type == "banner"]';
  const banners =  await client.fetch(banner);
  return {
    props: {products,banners}, // will be passed to the page component as props
  }
}

export default index;