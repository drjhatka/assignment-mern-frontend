export interface TUser {
  name: string;
  email: string;
  password: string;
  phone:string;
  address:string;
  city:string;
  role: 'admin' | 'customer';
  status: 'active' | 'blocked';
  isDeleted: boolean;
}

export type TSectionTitlePropType = {
  title: string,
  description: string,
  image?:string,

}

export interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string
}

export interface ILoginFormInput {
  email: string;
  password: string;
}

export interface TAuthState {
  user: null | object;
  token: null | string;
}

export interface JWTTokenUser {
  email: string;
  role: 'admin' | 'customer';
  iat: number;
  exp: number;
}


export interface Product {
  product: string;
  quantity: number;
}
export interface ProductOrder {
  userId: string,
  product: Product[]
}
export interface Order {
  user: string;
  products: Product[];
  quantity: number;
  totalPrice: number;
  status: 'Pending' | 'Progress' | 'Completed'
}

export type InputAttributes = {
  type: string,
  placeholder: string;
  classes: string
}

export type ReactHooksFormConfig = {
  
    required?:boolean,
    min?:number,
    max?:number,
    minLength?:number,
    maxLength?:number,
    pattern?:string,
    validate?:boolean,


}

export interface IReactHooksFormRegister{
  register:(name:string, option:IRegisterFormInput|ILoginFormInput)=>{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    ref: (instance: HTMLInputElement | null) => void;
  };
}

export interface CartItem {
  productId:string, 
  name:string,
  quantity:string
}
enum BikeTypes {
  'Mountain',
  'Road',
  'Hybrid',
  'Electric'
}
export interface Bike extends Document  {
  name:string;
  brand:string;
  price:number;
  category: BikeTypes;
  description:string;
  quantity:number;
  inStock:boolean;
  image?:string;
}