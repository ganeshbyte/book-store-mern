export interface IOrder {
  _id?: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
  totalPrice: string;
  bookIds: string[];
  updatedAt?: string[];
  createdAt?: string[];
}

interface Address {
  country: string;
  state: string;
  city: string;
  zipcode: string;
}
