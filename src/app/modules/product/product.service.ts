import { TProduct } from "./Product.interface";
import { Product } from "./Product.model";


const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductsFromDB = async ()=>{
    const result = Product.find();
    return result;
}

const getSingleProductFromDB = async (id:string)=>{

    const result = Product.findOne({_id: id });
    return result;
}

export const ProductServices = {
  createProductIntoDB, 
  getAllProductsFromDB,
  getSingleProductFromDB
};
