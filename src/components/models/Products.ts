import { IProduct } from "../../types";

export class Products {
    _products: IProduct[];
    _selected: IProduct | undefined;

    constructor() {
        this._products = [];
        this._selected = undefined;
    }

    setItems(items: IProduct[]) {
        this._products = [...new Set<IProduct>(items)];
    }

    getItems(): readonly IProduct[] {
        return this._products;
    }

    getItem(id: string): IProduct | undefined {
        return this._products.find(product => product.id === id)
    }

    setSelected(product: IProduct) {
        this._selected = product;
    }

    getSelected(): IProduct | undefined {
        return this._selected;
    }
}