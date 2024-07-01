"use strict";

// 1. Сообщение в консоль "все теги прогрузились"
document.addEventListener('DOMContentLoaded', () => {
    console.log("все теги прогрузились");
});

// 2. Сообщение в консоль "страница загрузилась"
window.addEventListener('load', () => {
    console.log("страница загрузилась");
});

// 3. Делегирование события клика для определения наличия класса "super_element"
document.body.addEventListener('click', (event) => {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    const hasSuperElementClass = element.classList.contains('super_element');
    const message = `Класс "super_element" ${hasSuperElementClass ? 'присутствует' : 'отсутствует'} в элементе "${tagName}".`;
    console.log(message);
});

// 4. Сообщение при наведении на textarea
document.querySelector('textarea').addEventListener('mouseover', () => {
    console.log("Вы навели на textarea.");
});

// 5. Делегирование события клика для ul
document.querySelector('ul').addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button) {
        console.log(button.textContent);
    }
});

// 6. Объяснение очередности логов
// Событие клика на ul (задание 5) срабатывает раньше, чем событие на body (задание 3),
// потому что событие на более специфичном элементе (ul) происходит раньше, чем на
// более общем (body), даже если оба события обрабатываются при клике по одной и той же кнопке.

// 7. Изменение цвета заднего фона каждого второго тега li
const listItems = document.querySelectorAll('ul li:nth-child(even)');
listItems.forEach(item => {
    item.style.backgroundColor = 'lightgrey';
});
