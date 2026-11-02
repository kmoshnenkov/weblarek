import { OrderRequest, OrderResponse, ProductResponse } from "../../types";
import { Api } from "../base/Api";


export class Loader {
    _api: Api;

    constructor(api: Api) {
        this._api = api;
    }

    get(): Promise<ProductResponse> {
        try {
            const response = this._api.get<ProductResponse>('/product/');
            return Promise.resolve(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    post(request: OrderRequest) {
        try {
            const response = this._api.post<OrderResponse>('/order/', request);
            return Promise.resolve(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}