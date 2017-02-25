var products = [];

var updateProducts = function () {
  $(".products").empty();
  var source = $('#templateProducts').html();
  var template = Handlebars.compile(source);
   for (var i = 0; i < products.length; i++) {
       var newHTML = template(products[i]);
       $('.products').append(newHTML);
   }
};

$(".NewProduct-form").keypress(function (event) {
   if (event.which === 13) { // if user pressed ENTER
       var name = $("#product-name").val();
       var price = $("#product-price").val();
       var image = $("#product-image").val();

       var goodName = validationName(name);
       var validPrice = validationPrice(price);
       var goodURL = validationURL(image);

       if (goodName && validPrice && goodURL) {
           addProduct(name, price, image);
           alert("New product has been successfully added!");
           updateProducts();
           document.body.scrollIntoView(false);
       }
   }
});

var addProduct = function (name, price, image) {
   products.push({
       name: name,
       price: price,
       image: image
   })
};

function validationName (name) {
    if (name.length < 2) {
       alert("The name of the product must contain at least 2 characters");
       return false;
    }
    return true;
}

function validationPrice (price) {
  if (price.length === 0) {
    alert("Please specify the product's price");
    return false;
  }
  if (price <= 0) {
    alert("The price must be a positive number");
    return false;
  }
  return true;
}

// just a basic url validation. nothing too sophisticated
function validationURL (url) {
   var www = false;
   var http = false;

   for (var i = 0; i < url.length; i++) {
       if (url[i] === "w" && url[i + 1] === "w" && url[i + 2] === "w") {
           www = true;
       }
       if (url[i] === "h" && url[i + 1] === "t" && url[i + 2] === "t" && url[i + 3] === "p") {
           http = true;
       }
   }
   if (!www || !http) {
       alert("Please re enter a valid URL!");
       return false;
   }
   return true;
}
