export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
export type TPayment = 'CARD' | 'CASH' | '';

export type TErrors = Partial<Record<keyof IBuyer, string>>;

type ProductSuccessResponse = {
    total: number;
    items: IProduct[];
}

type OrderSuccessResponse = {
    id: string;
    total: number;
}

type OrderErrorResponse = {
    error: string;
}

export type ProductResponse = ProductSuccessResponse;
export type OrderResponse = OrderSuccessResponse | OrderErrorResponse;

export type OrderRequest = {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
}

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IBuyer {
    payment: TPayment;
    email: string;
    phone: string;
    address: string;
}
