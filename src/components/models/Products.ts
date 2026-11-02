import { IProduct } from "../../types";

export class Products {
    private _products: IProduct[];
    private _selected: IProduct | null;

    constructor() {
        this._products = [];
        this._selected = null;
    }

    setItems(items: IProduct[]) {
        this._products = items;
    }

    getItems(): IProduct[] {
        return this._products;
    }

    getItem(id: string): IProduct | undefined {
        return this._products.find(product => product.id === id)
    }

    setSelected(product: IProduct) {
        this._selected = product;
    }

    getSelected(): IProduct | null {
        return this._selected;
    }
}