// an array with all of our cart items
var cart = [];

// maybe change position of these 2 things
var source = $('#cart-template').html();
var template = Handlebars.compile(source);

var total = 0;

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $(".cart-list").empty();
  $(".total").empty();

  for (var i = 0; i < cart.length; i++) {
    var newHTML = template({name: cart[i].name, price: cart[i].price});
    $(".cart-list").append(newHTML);
  }
    $(".total").append(total);
  //console.log(total);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  var newItem = { price: item.attr("data-price"), name: item.attr("data-name")};
  var stringPrice = item.attr("data-price");
  var intPrice = parseInt(stringPrice);
  total += intPrice;
  cart.push(newItem);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  total= 0;
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggle(function () {
    $(".shopping-cart").css("display", "block");
  }, function () {})
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).parents(".buybox").parents(".item");
  $(this).toggleClass("btn-primary btn-success");
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
