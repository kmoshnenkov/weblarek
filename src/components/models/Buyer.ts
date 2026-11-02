import { IBuyer, TPayment, TErrors } from "../../types";


export class Buyer {
    private _info: IBuyer;

    constructor() {
        this._info = {
            payment: '',
            email: '',
            phone: '',
            address: ''
        }
    }

    setInfo(buyer: Partial<IBuyer>) {
        this._info = { ...this._info, ...buyer };
    }

    getInfo(): IBuyer {
        return { ...this._info };
    }

    clear() {
        this._info = {
            payment: '',
            email: '',
            phone: '',
            address: ''
        }
    }

    validate(): TErrors {
        const result: TErrors = {}
        if (!this._info.payment) {
            Object.assign(result, { payment: 'Выберите вил оплаты' })
        }
        if (this._info.email.length === 0) {
            Object.assign(result, { email: 'Укажите электронный адрес' })
        }
        if (this._info.phone.length === 0) {
            Object.assign(result, { phone: 'Укажите номер телефона' })
        }
        if (this._info.address.length === 0) {
            Object.assign(result, { address: 'Укажите адрес доставки' })
        }
        return result;
    }
}