export interface Cart {
    numOfCartItems:number,
    data:Data
}
 

interface Data{
    totalCartPrice:number,
    _id:string;
    products: Products[]
}

export interface Products{
    count:number,
    price:number,
    product:ProductDetails
}

interface ProductDetails{
    _id:string,
    title:string,
    imageCover:string
}