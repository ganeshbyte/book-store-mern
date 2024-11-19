export interface IBook {
  _id: string;
  title: string;
  description: string;
  author: string;
  coverImage: string;
  newPrice: number;
  oldPrice: number;
  category: string;
  counts: BootCounts;
}

interface BootCounts {
  stock: number;
  sold: number;
  cartCount: number;
}
