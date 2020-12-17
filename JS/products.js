class Product {
    constructor(image, name, price, description, id, quantity) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = id;
        this.quantity = quantity;
    }
}

let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, "Lorem ipsum", 1, 1);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, "Lorem ipsum", 2, 1);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, "Lorem ipsum", 3, 1);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, "Lorem ipsum", 4, 1);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, "Lorem ipsum", 5, 1);

let myProducts = [product1, product2, product3, product4, product5];

let bag = [];

$(function() {

    getFromLocalStorage();
    renderAllProducts();

});

function renderAllProducts() {

    $.each(myProducts, (i, product) => {

        let divTag = $("<div>")
        .appendTo($("#productsContainer"));
        
        $("<img>")
        .appendTo(divTag)
        .addClass("productImage")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .attr("id", product.id)
        .on("click", {p: product}, function(e){
            
            let addedItem = e.data.p;
            console.log(addedItem);

           /* if ( ) {

            }*/
            bag.push(addedItem);
            setToLocalStorage();


        })     
    });
};

function handleClick() {
    
    $.each(myProducts, (i, product) => {

        let addedItem = new Product(
            product.image, 
            product.name, 
            product.price, 
            product.description, 
            product.id, 
            product.quantity);

        if(addedItem.id === product.id){
            addedItem.quantity++;

            bag.push(addedItem);
            setToLocalStorage();
            
        } else {
            
            setToLocalStorage();
        }
    })
    // if (addedItem.quantity == 0){
        
    //     addedItem.quantity++
    //     bag.push(addedItem);

    //  } 
    //  //else {
    // //     addedItem.quantity++
    // // }

    // //bag.push(addedItem);
    renderShoppingBag();
}

function getFromLocalStorage() {

    let productFromLS = localStorage.getItem('products');

    // if (productFromLS == null) {
    //     return;
    // }

    let lsList = JSON.parse(productFromLS);
        
        // $.each(productFromLS, (i, product) => {
        // });

    renderShoppingBag();
};

function setToLocalStorage() {

    localStorage.setItem("products", JSON.stringify(bag));
}

function renderShoppingBag() {

    $("#shoppingBag").html(" ");
        
        $.each(bag, (i, product) => {

            $("<p>")
            .html(product.name + ", " + product.price + "kr " + product.quantity + "pc")
            .appendTo("#shoppingBag");
    });
};