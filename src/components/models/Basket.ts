import { IProduct } from "../../types";

export class Basket {
    _products: IProduct[];

    constructor() {
        this._products = [];
    }

    getItems(): readonly IProduct[] {
        return this._products;
    }

    append(item: IProduct) {
        this._products.push(item);
    }

    remove(item: IProduct) {
        const index: number = this._products.indexOf(item);

        if (index !== -1) {
            this._products.splice(index, 1);
        }
    }

    contains(item: IProduct): boolean {
        return this._products.includes(item);
    }

    clear() {
        this._products.length = 0;
    }

    getTotalCost(): number {
        return this._products.reduce(
            (total, item) => total + (item.price ?? 0), 0
        );
    }

    getTotalCount(): number {
        return this._products.length;
    }
}