//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.forms.length);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);


//GETELEMENTBYID//
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent="hello";
// headerTitle.innerText="Goodbye";
// console.log(headerTitle.textContent);  // takes inner content and ignores styles//
// console.log(headerTitle.innerText);  // keeps the styles //
// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px #000';


//GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
//
// //gives error as items is an array so loop through it
// //items.style.backgroundColor = "#f4f4f4";
//
// for(var i=0;i<=items.length;i++){
//   items[i].style.backgroundColor = "#f4f4f4";
// }


//GETELEMENTSBYTAGNAME//
//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
//
// //gives error as items is an array so loop through it
// //items.style.backgroundColor = "#f4f4f4";
//
// for(var i=0;i<li.length;i++){
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//QUERYSELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px #ccc';
//
// var input = document.querySelector('input');
// input.value = 'HEya'
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEnd';
//
// var item = document.querySelector('.list-group-item');
// item.style.color = "red";
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";
//
// var secItem = document.querySelector('.list-group-item:nth-child(2)');
// secItem.style.color = "coral";

//QUERYSELECTORALL//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[1].textContent = 'Hello';
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
//
// for(var i = 0; i<odd.length; i++){
//   odd[i].style.backgroundColor="#ccc";
// }
// for(var i = 0; i<even.length; i++){
//   even[i].style.backgroundColor="#f4f4f4";
// }


//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//ChildNode
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";
//first child
// console.log(itemList.firstChild);

//first Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'red';
// itemList.firstElementChild.textContent = 'red';

//last child
// console.log(itemList.lastChild);
//last element child//
// console.log(itemList.lastElementChild);
//
// itemList.lastElementChild.style.backgroundColor = 'red';
// itemList.lastElementChild.textContent = 'red';


//next sibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
//
// itemList.previousElementSibling.style.color="red";

//createElement

//create a div
// var newDiv = document.createElement('div');
//
// //add class
// newDiv.className = "hello";
//
// //add id
// newDiv.id = "hello1";
//
// //add attr
// newDiv.setAttribute('title', 'Hello Div');
//
// //Create text node
// var newDivText = document.createTextNode('Hello World');
//
// //add text to div
// newDiv.appendChild(newDivText);
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
//
// console.log(newDiv);
//
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';



// function buttonClicked(e){
//   //  document.getElementById('header-title').textContent='Changed';
//   // document.querySelector('#main').style.backgroundColor='#f4f4f4';
//   // console.log(e.target);
//   // console.log(e.target.classList);
//   // console.log(e.target.className);
//   //
//   // var output = document.getElementById('output');
//   // output.innerHTML = '<h3>'+e.target.id+'</h3>'
//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   //
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
//
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//
// }
var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent); //only fires for selected element
// box.addEventListener('mouseleave', runEvent); //only fires for selected element

// box.addEventListener('mouseover', runEvent); // fires for inner elements as well
// box.addEventListener('mouseout', runEvent); // fires for inner elements as well

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e){
  // e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  // console.log('EVENT TYPE: '+e.target.value);
 // document.body.style.display = 'none';
  // output.innerHTML = e.target.value;

  // output.innerHTML = '<h3> MX: '+e.offsetX+'</h3><h3>MY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",50)"
}
