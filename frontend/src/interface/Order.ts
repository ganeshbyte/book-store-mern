export interface IOrder {
  id?: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
  totalPrice: number;
  bookIds: string[];
}

interface Address {
  country: string;
  state: string;
  city: string;
  zipcode: string;
}
