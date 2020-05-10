import { Category } from './category';

export class Product {
    public id: number;
    public name: string;
    public description: string;
    public category: Category = Category.Other;
    public manufacturer: string;
    public supplier: string;
    public price: number;
}
