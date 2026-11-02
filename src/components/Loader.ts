import { OrderRequest, OrderResponse, ProductResponse } from "../types";
import { IApi } from "../types";



export class Loader {
    private _api: IApi;

    constructor(api: IApi) {
        this._api = api;
    }

    get(): Promise<ProductResponse> {
        return this._api.get<ProductResponse>('/product/');
    }

    post(request: OrderRequest) {
        return this._api.post<OrderResponse>('/order/', request);
    }
}