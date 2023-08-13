/*Prices for all 7 products*/
let Price1 = 35;
let Price2 = 45;
let Price3 = 45;
let Price4 = 55;

/*Adding Price To cart*/
let totalCart = 0;
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myButton4 = document.getElementById('myButton4');
const myList    = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Garden Salad'+'EGP' + Price1 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Garden Salad - '+'EGP' + Price1;
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Potato Salad '+'EGP' + Price2 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Potato Salad - '+'EGP' + Price2;
    myList.appendChild(newListItem);
});
myButton3.addEventListener('click', () => {
    totalCart = totalCart + Price3;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Coleslaw '+'EGP' + Price3 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Coleslaw - '+'EGP' + Price3;
    myList.appendChild(newListItem);
});
myButton4.addEventListener('click', () => {
    totalCart = totalCart + Price4;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Ceaser Salad '+'EGP' + Price4 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Ceaser Salad - '+'EGP' + Price4;
    myList.appendChild(newListItem);
});
/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });