"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.getElementById('super_link');
console.log('Элемент с id="super_link":', superLink);

// Использование коллекции для вывода элемента с id="super_link"
const elementById = [superLink];
console.log('Коллекция с элементом с id="super_link":', elementById);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll('.card-link');
cardLinks.forEach(link => link.textContent = 'ссылка');
console.log('Все элементы с классом "card-link" теперь имеют текст "ссылка".');

// Использование коллекции для элементов с классом "card-link"
console.log('Коллекция элементов с классом "card-link":', cardLinks);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyLinks = document.querySelectorAll('.card-body .card-link');
console.log('Элементы с классом "card-link" внутри "card-body":', cardBodyLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataNumberElement = document.querySelector('[data-number="50"]');
console.log('Первый элемент с атрибутом data-number="50":', dataNumberElement);

// 5. Выведите содержимое тега title в консоль.
const titleContent = document.querySelector('title').textContent;
console.log('Содержимое тега <title>:', titleContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector('.card-title');
console.log('Родительский узел элемента с классом "card-title":', cardTitle.parentNode);

// 7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pElement = document.createElement('p');
pElement.textContent = 'Привет';
const cardElement = document.querySelector('.card');
cardElement.insertBefore(pElement, cardElement.firstChild);
console.log('Добавлен тег <p> с текстом "Привет" в начало элемента с классом "card".');

// 8. Удалите тег <h6> на странице.
const h6Element = document.querySelector('h6');
if (h6Element) {
    h6Element.remove();
    console.log('Тег <h6> удален со страницы.');
} else {
    console.log('Тег <h6> не найден на странице.');
}
