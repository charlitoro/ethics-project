export const API_URL = 'https://app.scalars.co/rybk37gvz3/api';
export const SALT_ROUNDS = 10;

export interface IUserLogin {
    email: string;
    password: string;
}

// Queries
export const queryAuthSession =`
query ($code: String){
  admin(where:{email: $email}){
    id name email password
  }
}`;
