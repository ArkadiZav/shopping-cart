/**
 * Created by karina on 22/02/17.
 */
"use strict";
var cart=[];
$(".NewProduct-form").keypress("click", function (event) {
    if (event.which === 13) {
        var name = $("#product-name").val();
        var price = $("#product-price").val();
        var image = $("#product-image").val();
        addItemCart(name, price, image);
        console.log(cart)

    }
});

var addItemCart = function (name, price, image) {
    cart.push({
        name: name,
        price: price,
        image: image
    })
};

var source = $('#templateProducts').html();
var template = Handlebars.compile(source);
var newHTML = template(cart);
$('.card-container').append(newHTML);

