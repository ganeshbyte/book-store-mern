export interface IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  newPrice: number;
  oldPrice: number;
  counts: BootCounts;
}

interface BootCounts {
  stock: number;
  sold: number;
  cartCount: number;
}
