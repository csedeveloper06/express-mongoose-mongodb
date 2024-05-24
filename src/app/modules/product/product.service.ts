
import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async ()=>{
    const result = ProductModel.find();
    return result;
}

const getSingleProductFromDB = async (id:string)=>{

    const result = ProductModel.findOne({_id: id });
    return result;
}

export const ProductServices = {
  createProductIntoDB, 
  getAllProductsFromDB,
  getSingleProductFromDB
};
