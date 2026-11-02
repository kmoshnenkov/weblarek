import './scss/styles.scss';

import { Products } from './components/models/Products';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { apiProducts } from './utils/data';
import { IBuyer } from './types';

import { Loader } from './components/models/Loader';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';


// ТЕСТИРОВАНИЕ МОДЕЛИ КАТАЛОГА ТОВАРОВ
console.log('\n\nТЕСТИРОВАНИЕ МОДЕЛИ КАТАЛОГА ТОВАРОВ:');
console.log('===============================================================================');

// сохранение списка товаров в каталог
const productsModel = new Products();
productsModel.setItems(apiProducts.items);

// получение списка товаров из каталога
console.log('Массив товаров из каталога: ', productsModel.getItems())

// поиск товара из каталога по id
const firstUUID = apiProducts.items[1].id;
console.log('Поиск товара', firstUUID, 'в каталоге:', productsModel.getItem(firstUUID) ?? 'не найден');

const otherUUID = crypto.randomUUID();
console.log('Поиск товара', otherUUID, 'в каталоге:', productsModel.getItem(otherUUID) ?? 'не найден');

// сохранение (выбор) товара для подробного отображения
const selectedProduct = apiProducts.items[1];
productsModel.setSelected(selectedProduct);
console.log('Выбор товара', selectedProduct, 'для подробного отображения');

// получение выбранного товара для подробного отображения
console.log('Выбранный товар:', productsModel.getSelected() ?? 'не выбран');


// ТЕСТИРОВАНИЕ МОДЕЛИ КОРЗИНЫ ТОВАРОВ
console.log('\n\nТЕСТИРОВАНИЕ МОДЕЛИ КОРЗИНЫ ТОВАРОВ:');
console.log('===============================================================================');
const basketModel = new Basket()

// получение списка товаров корзины
console.log('Массив товаров из корзины: ', basketModel.getItems());

// добавление в корзину
basketModel.append(apiProducts.items[0]);
basketModel.append(apiProducts.items[1]);
basketModel.append(apiProducts.items[2]);

// получение списка товаров корзины
console.log('Массив товаров из корзины после добавления: ', basketModel.getItems());

// проверка наличия товара в корзине
console.log('Товар', apiProducts.items[1].title, 'находится в корзине:', basketModel.contains(apiProducts.items[1]) ? 'Да' : 'Нет');
console.log('Товар', apiProducts.items[3].title, 'находится в корзине:', basketModel.contains(apiProducts.items[3]) ? 'Да' : 'Нет');

// удаление товара из корзины
basketModel.remove(apiProducts.items[1]);   // существующий в корзине товар
basketModel.remove(apiProducts.items[3]);   // несуществующий в корзине товар

// получение списка товаров корзины
console.log('Массив товаров из корзины после удаления: ', basketModel.getItems());

// общая стоимость и количество товаров корзины
console.log('Общая стоимость всех товаров корзины: ', basketModel.getTotalCost());
console.log('Общее количество всех товаров корзины: ', basketModel.getTotalCount());

// ТЕСТИРОВАНИЕ МОДЕЛИ ПОКУПАТЕЛЯ
console.log('\n\nТЕСТИРОВАНИЕ МОДЕЛИ ПОКУПАТЕЛЯ:');
console.log('===============================================================================');
const buyerModel = new Buyer();

console.log('Валидация (до сохранения данных):', buyerModel.validate());

const userInfo: IBuyer = {
    address: 'Msk Lenina 45',
    email: 'lenina45@yandex.ru',
    phone: '+79995556677',
    payment: 'CARD'
}

console.log('Сохранение данных:', userInfo);
buyerModel.setInfo(userInfo);

console.log('Получение данных:', buyerModel.getInfo());
console.log('Валидация (после сохранения данных):', buyerModel.validate());

console.log('Очистка данных.');
buyerModel.clear();
console.log('Валидация (после очистки данных):', buyerModel.validate());

console.log('Сохранение адреса:', userInfo.address);
buyerModel.setAddress(userInfo.address);
console.log('Валидация (после сохранения address):', buyerModel.validate());

console.log('Сохранение электронной почты:', userInfo.email);
buyerModel.setEmail(userInfo.email);
console.log('Валидация (после сохранения email):', buyerModel.validate());

console.log('Сохранение номера телефона:', userInfo.phone);
buyerModel.setPhone(userInfo.phone);
console.log('Валидация (после сохранения phone):', buyerModel.validate());

console.log('Сохранение вида оплаты:', userInfo.payment);
buyerModel.setPayment(userInfo.payment);
console.log('Валидация (после сохранения payment):', buyerModel.validate());


// ТЕСТИРОВАНИЕ МОДЕЛИ ЗАГРУЗЧИКА
console.log('\n\nТЕСТИРОВАНИЕ МОДЕЛИ ЗАГРУЗЧИКА:');
console.log('===============================================================================');
const api = new Api(API_URL);
const loader = new Loader(api);

// получение данных с сервера методом get
console.log('Получение данных с сервера методом get');
const products = await loader.get();

// сохранение списка товаров в каталог
console.log('Сохранение списка товаров в каталог');
productsModel.setItems(products.items);

// получение списка товаров из каталога
console.log('Массив товаров из каталога: ', productsModel.getItems());