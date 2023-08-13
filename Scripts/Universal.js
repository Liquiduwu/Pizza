const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', function(event) {
    submitButton.preventDefault();
    alert('thank you for submitting your review!');
});
/* i tried to make it dropdown the item and it's image
function search() {
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  var results = document.getElementsByClassName("search-results")[0];
  var images = ["images/" + products + ".jpg"];
  var dropdown = document.getElementById("search-dropdown");
  
  dropdown.innerHTML = "";
  
  for (var i = 0; i < products.length; i++) {
    if (products[i].toUpperCase().indexOf(filter) > -1) {
      var option = document.createElement("option");
      option.text = products[i];
      dropdown.add(option);
    }
  }
  
  if (dropdown.innerHTML == "") {
    var option = document.createElement("option");
    option.text = "No results found";
    dropdown.add(option);
  }
  
  results.style.display = "none";
  dropdown.style.display = "block";
}
*/