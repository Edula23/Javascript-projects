// Examine the document object //

// GetELementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName();
// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem)

// getElementsByTagName()
// const listItem = document.getElementsByTagName('li');
// console.log(listItem)

// querySelector()
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);

//Styling

//  const title = document.querySelector('#main-heading');

// title.style.color = 'red'; // inline styling - works only on single element
//  const title = document.querySelectorAll('list-items');
//  title.style.color = 'red' 

// const listItems = document.querySelectorAll('.list-items');
// for(i=0; i<listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }

//Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Elements

// ul.append(li)

//Modifying the text

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem)
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

//li.innerText = 'X-men';

//Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// for(i=0; i<title.length; i++){
//     title[i].style.color = 'red';
// }
// console.log(title.getAttribute('id'));

// li.classList.add('list-items')
// li.classList.remove('list-items')

// console.log(li.classList.contains('list-items')); // returns true or false  

// li.remove();

//Parent Node Traversal
// let ul = document.querySelector('ul');

// console.log(ul.parentNode); // returns the parent node of the ul element
// console.log(ul.parentElement); // returns the parent element of the ul element
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// // ul.firstChild.style.color = 'red'
// ul.childNodes[1].style.backgroundColor = 'red'

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);