
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}

interface banner{ 
    buttonText:string;
    image: ImageProps
    product:string;
    desc:string;
    smallText:string;
    midText:string;
    largeText1:string;
    largeText2:string;
    discount:string;
    saleTime:string;
}
export default banner;

