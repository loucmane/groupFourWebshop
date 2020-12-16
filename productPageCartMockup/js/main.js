
//targets elements with the class add-cart, could probably use jQuery and do let carts = $('.add-cart') when we do the actual project.
let  carts = document.querySelectorAll('.add-cart'); 
//Class of our Products courtesy of Lou.
class Product {
    constructor(image, name, price, description) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
//change these objects to better match grade criteria. These are just so I can test functionality. Like everythings else in this document.
let products = [ 
    {
        name: "Bergamot",
        tag: "bergamot",
        price: 750,
        inCart: 0
    },
    {
        name: "Iris",
        tag: "iris",
        price: 850,
        inCart: 0
    },
    {
        name: "Saffron",
        tag: "saffron",
        price: 950,
        inCart: 0
    },
    {
        name: "Sandalwood",
        tag: "sandalwood",
        price: 1050,
        inCart: 0
    }
];



//for loop for the cart buttons from 0 to carts.length... so as many buttons as there are. in this case 4. 
// its gonna start at [0] and finish at [3]. 
//add an eventlistener that checks for clicks on the button and execute the function that does something.
// what do we want to connect the buttons to?
//
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {

        //console.log('X item(s) has been added to cart') type functionality is what we want.
        //console.log(Total cost is : x SEK) type functionality is what we want.
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}




//function to check if there is any items in the cart from a previous session

function onLoadCartNumbers() {
    //checks localstorage to see if there are any items in the cart.
    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ) {
        //if there are, change the targeted selectors textContent to be the number 
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//this function is gonna check how many items we have in our cart.
//here we use localStorage key and values to remember how many items we have
//localStorage can only hold strings.
function cartNumbers(product) {
    //Variable that Checks localStorage if there are any items in the cart.
    let productNumbers = localStorage.getItem('cartNumbers'); 
    //these console logs are to show what we get from localStorage, remove them.
    console.log(typeof productNumbers);
    //parses the string from localStorage and turns it back to a number.
    productNumbers = parseInt(productNumbers); 
    console.log(typeof productNumbers); //what the parseInt() did.
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1); // 
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null ){

        if(cartItems[product.tag] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product  
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price );
    } else {
        localStorage.setItem('totalCost', product.price);
    }

    
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += `
            <div class="product"><ion-icon name="close-circle"></ion-icon><img src="../images/${item.tag}.jpg" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">${item.price} SEK</div>
            <div class="quantity">
                <ion-icon class="decrease" name="remove-circle-outline"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="add-circle-outline"></ion-icon>   
            </div>
            <div class="total">${item.inCart * item.price},00 SEK</div>
            `;
        });
            
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                ${cartCost} SEK
            </h4>
        </div>
        `;   
            
            
            
            
            
                
    }    
    
}

onLoadCartNumbers();
displayCart(); 