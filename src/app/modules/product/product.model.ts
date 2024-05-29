import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariants } from './Product.interface';

const productVariantSchema = new Schema<TVariants>({
  ProductType: {
    type: String,
    required: true,
  },
  ProductValue: {
    type:String,
    required: true,
  },
});


const productInventorySchema = new Schema<TInventory> ({
    quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      }
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // tags: {
  //   type: String,
  //   enum : [ "electronics", "computer" , "wireless" , "mouse" , "keyboard" , "speaker" , "gaming" , 
  //   "smartPhone" , "mobile" , "128GB" , "portable" , "audio", "yoga",  "fitness" , "shoes" , "kitchen"
  //   , "kettle" , "lightweight" , "appliance" , "coffee" , "gym" , "food" , "home" ],
  //   required : true,
  // },
  tags: {
    type: [String],
    enum: [
      "electronics", "computer", "wireless", "mouse", "keyboard", "speaker", 
      "gaming", "smartPhone", "mobile", "128GB", "portable", "audio", "yoga", 
      "fitness", "shoes", "kitchen", "kettle", "lightweight", "appliance", 
      "coffee", "gym", "food", "home", "running"
    ],
    required: true,
  },
  variants:[
    productVariantSchema
  ],
  inventory: productInventorySchema 
});

export const Product = model<TProduct>( "Product", productSchema );

