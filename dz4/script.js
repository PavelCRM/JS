"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
document.getElementById('from').addEventListener('input', function () {
    document.getElementById('display').textContent = this.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
document.querySelector('.messageBtn').addEventListener('click', function () {
    const messageElement = document.querySelector('.message');
    messageElement.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageElement.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
// Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля 
// (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, 
// необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
document.getElementById('myForm').addEventListener('submit', function (event) {
    const inputs = this.querySelectorAll('.form-control');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error');
            allFilled = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!allFilled) {
        event.preventDefault();
    }
});

document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value === '') {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });
});
