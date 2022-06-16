import { ICartItem } from './Interfaces/ICartItem';

export class Product implements ICartItem {
  constructor(public name: string, public price: number) {}
}
