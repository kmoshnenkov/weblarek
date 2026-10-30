import { IBuyer, TPayment } from "../../types";


export class Buyer {
    _info: IBuyer;

    constructor() {
        this._info = {
            payment: undefined,
            email: '',
            phone: '',
            address: ''
        }
    }

    setPayment(payment: TPayment) {
        this._info.payment = payment;
    }

    setEmail(email: string) {
        this._info.email = email;
    }

    setPhone(phone: string) {
        this._info.phone = phone;
    }

    setAddress(address: string) {
        this._info.address = address;
    }

    setInfo(buyer: IBuyer) {
        this._info = {...buyer}
    }

    getInfo(): IBuyer {
        return {...this._info}
    }

    clear() {
         this._info = {
            payment: undefined,
            email: '',
            phone: '',
            address: ''
        }     
    }

    validate(): object {
        const result = {}
        if (!this._info.payment) {
            Object.assign(result, {payment: 'Выберите вил оплаты'})
        }
        if (this._info.email.length === 0) {
            Object.assign(result, {email: 'Укажите электронный адрес'})
        }
        if (this._info.phone.length === 0) {
            Object.assign(result, {phone: 'Укажите номер телефона'})
        }
        if (this._info.address.length === 0) {
            Object.assign(result, {address: 'Укажите адрес доставки'})
        }
        return result;
    }
}