
const headerElement = document.createElement("h1");
headerElement.append("Hello world");
document.body.append(headerElement)

// Создание элемента заголовка (h1) и добавление текста к этому элементу 
const titleElement = document.createElement('h1');
titleElement.append('Hello from it-incubator');

// Добавление элемента заголовка в тело документа 
document.body.append(titleElement);

// Создание выпадающего списка (select)
const techSelectElement = document.createElement('select');

// Создание первого варианта (option) для выпадающего списка 
const techSelectOption0Element = document.createElement('option');
techSelectOption0Element.value = 1;
techSelectOption0Element.append('JS');
techSelectElement.append(techSelectOption0Element);

// Создание второго варианта (option) для выпадающего списка 
const techSelectOption1Element = document.createElement('option');
techSelectOption1Element.value = 2;
techSelectOption1Element.append('HTML'); // Добавление текста 'HTML' ко второму варианту 
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список 

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список) 
document.body.append(techSelectElement); //document.body это элемент, который включает в себя содержимое страницы.
