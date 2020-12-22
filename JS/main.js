$(function() {

});

class Product {
  constructor(image, name, price, description, id) {
      this.image = image;
      this.name = name;
      this.price = price;
      this.description = description;
      this.id = id;
  }
}

class CartItem {
  constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
  }
}

class CustomerInfo {
  constructor(email, fName, lName, street, postal, city, country, phone, shipping) {
      this.email = email;
      this.fName = fName;
      this.lName = lName;
      this.street = street;
      this.postal = postal;
      this.city = city;
      this.country = country;
      this.phone = phone;
      this.shipping = shipping;
  }
}

let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, "Lorem Ipsum", 1, 0);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, "Lorem Ipsum", 2, 0);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, "Lorem Ipsum", 3, 0);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, "Lorem Ipsum", 4, 0);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, "Lorem Ipsum", 5, 0);

myProducts = [product1, product2, product3, product4, product5];
bag = [];
custInfo = [];

function setToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(bag));
  localStorage.setItem("Information", JSON.stringify(custInfo));
}

function getFromLocalStorage() {
  bag = JSON.parse(localStorage.getItem("products")) || [] ;
  custInfo = JSON.parse(localStorage.getItem("Information")) || [] ;
}

$( ".shoppingCartButton").click(function(){
  window.location.href = "../HTML/cart.html";
});

$( ".logotype").click(function(){
  window.location.href = "../index.html";
  console.log("klick");
});
