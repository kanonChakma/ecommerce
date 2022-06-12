/* eslint-disable @next/next/no-img-element */

import { Product } from "../../components/Product";
import { client } from "../../lib/client";

const index= ({products}) => {

    return (
      <div>
         <h3 className="product-h3">There are {products.length} products in diffrent Category</h3>
         <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
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