import './scss/styles.scss';

import { Products } from './components/models/Products';
import { Basket } from './components/models/Basket';
import { apiProducts } from './utils/data';


// тестирование модели корзины товаров
console.log('\n\nТЕСТИРОВАНИЕ МОДЕЛИ КАТАЛОГА ТОВАРОВ:');
console.log('===============================================================================');

const productsModel = new Products();
productsModel.setItems(apiProducts.items);

console.log('Массив товаров из каталога: ', productsModel.getItems()) 


// тестирование модели корзины товаров
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
basketModel.remove(apiProducts.items[1]);   // существующий элемент
basketModel.remove(apiProducts.items[3]);   // несуществующий элемент

// получение списка товаров корзины
console.log('Массив товаров из корзины после удаления: ', basketModel.getItems());

// общая стоимость и количество товаров корзины
console.log('Общая стоимость всех товаров корзины: ', basketModel.getTotalCost());
console.log('Общее количество всех товаров корзины: ', basketModel.getTotalCount());
