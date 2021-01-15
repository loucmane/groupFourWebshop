class Product {
  constructor(image, name, price, description, details, id) {
      this.image = image;
      this.name = name;
      this.price = price;
      this.description = description;
      this.details = details;
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
  constructor(email, fName, lName, street, postal, city, country, phone, shipping, date, orderNumber) {
      this.email = email;
      this.fName = fName;
      this.lName = lName;
      this.street = street;
      this.postal = postal;
      this.city = city;
      this.country = country;
      this.phone = phone;
      this.shipping = shipping;
      this.date = date;
      this.orderNumber = orderNumber;
      this.product;
  }
}

//DECLARE PRODUCT LIST OBJECTS
let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, "Lorem Ipsum", "Lorem ipsum dolor sit amet, con sectetur adipiscing elit." + "<br>" + "<br>" + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 1);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 2);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 3);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 5);

//ALL LISTS
myProducts = [product1, product2, product3, product4, product5];
cart = [];
orderInfo = [];

//SET TO LOCAL STORAGE
function setToLocalStorage() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  localStorage.setItem("orderInformation", JSON.stringify(orderInfo));
}

//GET FROM LOCAL STORAGE
function getFromLocalStorage() {
  cart = JSON.parse(localStorage.getItem("shoppingCart")) || [] ;
  orderInfo = JSON.parse(localStorage.getItem("orderInformation")) || [] ;
}

// CALCULATE TOTAL
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
      total = total + (cart[i].quantity * cart[i].product.price);
  }
  return total;
};