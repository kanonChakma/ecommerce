interface product{
    _createdAt: string;
    _id: string;      
    _rev: string;
    _type: string;
    _updatedAt: string;
    image?:{}[],
    name:string;
    slug:string;
    price:number;
    details:string;
}
export default product;
