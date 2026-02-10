# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**
- The main error is because of the JavaScript tag element that has been declared at the head of the HTML file, and the `style.color` can't be read yet because the browser has not loaded the HTML elements yet.

- The error occurs because the JavaScript file runs before the HTML elements are loaded. 
- Since code runs line by line it first executes the JavaScript, but the button element does not exist yet. 

- In order to fix this issue, we should move the JavaScript tag <script src="index.js"></script> to the bottom of the <body>, so that the script runs after the HTML elements are loaded.


## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
- When the user clicks on the parent container in that case that would be `button-container` it will target two things:
- First the `event.target` refers to the actual element that was click first, the element is the *button* itself because this is the main element. 

- Second, we have `event.currentTarget` which refers to the `div` itself, the `addEventListener` is attached to the div element where the event click would happen. 

- The main difference is that the click event bubbles up from the button to the div, and from there the div itself handles the event. 


## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
- In the code above we have elements created, however they have never been added inside of the card itself. 
- In another words they have not been `append` to the card, that is why the browser can not read them. 

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**
- The name approach to this is called event delegation. We attached an event listener to the parent, which is the `#todo-list`. 
- The alternative approach is we can and an event listener to every `li`, and it will still do the same as we add to the parent element.
- However, the delegation approach is much better because one listener handles all the item, and easier to maintain or debug, also where would be less line of code. 



## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**
- The difference between `querySelectorAll()` and `querySelector()` is that the `querySelectorAll()` returns a list of elements that match the selector.

- On the other hand, the `querySelector()` is used to returns an element that matches the CSS selector this is used when we only want to select one element. 

Here is an example of using `querySelectorAll()`:
```JS
const selected = document.querySelectorAll('div')
```

- The difference between `NodeList` and an array is a few things that created a big gap between their functionality and usability: 
- A `NodeList` comes from DOM, and it has limited array methods which means not all the array methods will work for it. 

- An `array` is a JavaScript data structure.
- It can store different types of data, such as: objects, numbers, strings, booleans, ect. Any array methods can be used with Array. 
- We can also change the array anytime we want we can push elements or shift elements, ect. 