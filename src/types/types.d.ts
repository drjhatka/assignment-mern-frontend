
declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        role: string;
        iat:number;
        exp:number;
      };
    }
  }
}


export enum BikeTypes {
  'Mountain',
  'Road',
  'Hybrid',
  'Electric'
}

export interface Bike extends Document {
  name:string;
  brand:string;
  price:number;
  category: BikeTypes;
  description:string;
  quantity:number;
  inStock:boolean;
  image?:string;
}


 export interface Product {
    product:string;
    quantity:number;
 }
export interface Order {
    user: string;
    products:Product[];
    quantity:number;
    totalPrice:number;
    status:'Pending'|'Progress'| 'Completed'
}

