export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  password: string;
  address?: Address;
}

interface Address {
  country: string;
  state: string;
  city: string;
  zipCode: string;
}
