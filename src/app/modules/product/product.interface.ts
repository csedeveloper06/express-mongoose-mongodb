

export type TVariants = {
    ProductType : string;
    ProductValue : string;
}

export type TInventory = {
    quantity : number;
    inStock : boolean;
}

export type Tag = 
  | "electronics"
  | "computer"
  | "wireless"
  | "mouse"
  | "keyboard"
  | "speaker"
  | "gaming"
  | "smartPhone"
  | "mobile"
  | "128GB"
  | "portable"
  | "audio"
  | "yoga"
  | "fitness"
  | "shoes"
  | "kitchen"
  | "kettle"
  | "lightweight"
  | "appliance"
  | "coffee"
  | "gym"
  | "food"
  | "running"
  | "home";

export type TProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    // tags: "electronics" | "computer" | "wireless" | "mouse" | "keyboard" | "speaker" | "gaming" | 
    // "smartPhone" | "mobile" | "128GB" | "portable" | "audio" | "yoga" | "fitness" | "shoes" | "kitchen"
    // | "kettle" | "lightweight" | "appliance" | "coffee" | "gym" | "food" | "home";
    tags: Tag[];
    variants: [TVariants];
    inventory: TInventory;
  }