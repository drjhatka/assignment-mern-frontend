export interface TUser {
  name:string;
  email:string;
  password:string;
  role:'admin'|'customer';
  status:'active'|'blocked';
  isDeleted:boolean;
}

export type TSectionTitlePropType ={
    title:string,
    description:string

}

export  interface IRegisterFormInput {
    name: string;
    email: string;
    password: string;
  }

  export  interface ILoginFormInput {
    email: string;
    password: string;
  }

  export interface TAuthState {
    user:null|object;
    token:null|string;
  }

  export interface JWTTokenUser {
    email:string;
    role:'admin'|'customer';
    iat:number;
    exp:number;
  }