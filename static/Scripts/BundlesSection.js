/*the discounts for all 4 products*/
let Discount1 = 50;
let Discount2 = 50;
/*Prices for all 7 products*/
let Price1 = 200;
let Price2 = 720;
/*Applying discounts*/
document.getElementById("Discount1").innerHTML = "Now At " + Discount1 + "%OFF!";
document.getElementById("PriceAFT1").innerHTML = "EGP" + Price1*(1-Discount1/100) + " Instead of " + "EGP" + Price1;

document.getElementById("Discount2").innerHTML = "Now At " + Discount2 + "%OFF!";
document.getElementById("PriceAFT2").innerHTML = "EGP" + Price2*(1-Discount2/100) + " Instead of " + "EGP" + Price2;



/*Adding Price To cart*/
let totalCart = 0;
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myList    = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1*(1-Discount1/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Buy 1 Get 1 Pasta'+'EGP' + Price1*(1-Discount1/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = ' Buy 1 Get 1 Pasta - '+'EGP' + Price1*(1-Discount1/100);
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2*(1-Discount2/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = EGP" + totalCart;
    alert('Buy 2 Pizzas Get 2 medium Pizzas '+'EGP' + Price2*(1-Discount2/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Buy 2 Pizzas Get 2 medium Pizzas - '+'EGP' + Price2*(1-Discount2/100);
    myList.appendChild(newListItem);
});

/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });