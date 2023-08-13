/*Prices for all 7 products*/
let Price1 = 130;
let Price2 = 150;
let Price3 = 90;

/*Adding Price To cart*/
let totalCart = 0;
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myList    = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Molten Cake'+'EGP' + Price1 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Molten Cake - '+'EGP' + Price1;
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Cookie Deep Dish '+'EGP' + Price2 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Cookie Deep Dish - '+'EGP' + Price2;
    myList.appendChild(newListItem);
});
myButton3.addEventListener('click', () => {
    totalCart = totalCart + Price3;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Cremebrulee '+'EGP' + Price3 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Cremebrulee - '+'EGP' + Price3;
    myList.appendChild(newListItem);
});

/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });