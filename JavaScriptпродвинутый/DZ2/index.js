const Library = require('./main');

// Создаем экземпляр библиотеки
const myLibrary = new Library(["Book 1", "Book 2", "Book 3"]);

// Выводим список всех книг в библиотеке
console.log(myLibrary.allBooks);

// Добавляем новую книгу
myLibrary.addBook("Book 4");
console.log(myLibrary.allBooks);

// Удаляем книгу
myLibrary.removeBook("Book 2");
console.log(myLibrary.allBooks);

// Проверяем наличие книги
console.log(myLibrary.hasBook("Book 1")); // true
console.log(myLibrary.hasBook("Book 5")); // false

// Попытка добавить уже существующую книгу
try {
    myLibrary.addBook("Book 1"); // Error: Book "Book 1" already exists in the library.
} catch (error) {
    console.error(error.message);
}

// Попытка удалить несуществующую книгу
try {
    myLibrary.removeBook("Book 5"); // Error: Book "Book 5" not found in the library.
} catch (error) {
    console.error(error.message);
}
