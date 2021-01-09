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
let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, "Lorem Ipsum", 1, 0);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, "Lorem Ipsum", 2, 0);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, "Lorem Ipsum", 3, 0);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, "Lorem Ipsum", 4, 0);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, "Lorem Ipsum", 5, 0);

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