/*the discounts for all 4 products
let Discount1 = 50;
let Discount2 = 20;
let Discount3 = 20;
let Discount4 = 25;
*/

/*Prices for all 7 products*/
let Price1 = 110;
let Price2 = 130;
let Price3 = 160;
let Price4 = 140;
let Price5 = 155;

/*Applying discounts
document.getElementById("Discount1").innerHTML = "Now At " + Discount1 + "%OFF!";
document.getElementById("PriceAFT1").innerHTML = "EGP" + Price1*(1-Discount1/100) + " Instead of " + "EGP" + Price1;

document.getElementById("Discount2").innerHTML = "Now At " + Discount2 + "%OFF!";
document.getElementById("PriceAFT2").innerHTML = "EGP" + Price2*(1-Discount2/100) + " Instead of " + "EGP" + Price2;

document.getElementById("Discount3").innerHTML = "Now At " + Discount3 + "%OFF!";
document.getElementById("PriceAFT3").innerHTML = "EGP" + Price3*(1-Discount3/100) + " Instead of " + "EGP" + Price3;

document.getElementById("Discount4").innerHTML = "Now At " + Discount4 + "%OFF!";
document.getElementById("PriceAFT4").innerHTML = "EGP" + Price4*(1-Discount4/100) + " Instead of " + "EGP" + Price4;
*/

/*Adding Price To cart*/
let totalCart = 0;
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myButton4 = document.getElementById('myButton4');
const myButton5 = document.getElementById('myButton5');
const myList    = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Margherita Pizza'+'EGP' + Price1 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = ' Margherita Pizza - '+'EGP' + Price1;
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Pepperoni Pizza '+'EGP' + Price2 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Pepperoni Pizza - '+'EGP' + Price2;
    myList.appendChild(newListItem);
});
myButton3.addEventListener('click', () => {
    totalCart = totalCart + Price3;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Ranch Pizza '+'EGP' + Price3 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Ranch Pizza - '+'EGP' + Price3;
    myList.appendChild(newListItem);
});
myButton4.addEventListener('click', () => {
    totalCart = totalCart + Price4;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Super Supreme Pizza '+'EGP' + Price4 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Super Supreme Pizza - '+'EGP' + Price4;
    myList.appendChild(newListItem);
});
myButton5.addEventListener('click', () => {
    totalCart = totalCart + Price5;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('BBQ Pizza '+'EGP' + Price5 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'BBQ Pizza - '+'EGP' + Price5;
    myList.appendChild(newListItem);
});

/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });