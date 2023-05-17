fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    localStorage.setItem("products", JSON.stringify(data));
})

sessionStorage.setItem("cart", "[]");
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(sessionStorage.getItem("cart"));
const array_id=[];

function addItemToCart(productID){
    let product = products.find(function(product){
        return product.id == productID;
    })
    if(cart.length == 0){
        cart.push(product);
        array_id.push(product.id);
    }
    else
    {
        if(!array_id.includes(product.id))
        {
            array_id.push(product.id);
            console.log(array_id);
            cart.push(product);
        }
    }

    product.quantity ++;
    if(productID == 1)
        document.getElementById('vest').innerHTML = "<br />" + product.name + " - " + product.price + " x" + product.quantity;
    else
        document.getElementById('t_shirt').innerHTML = "<br />" + product.name + " - " + product.price + " x" + product.quantity;

    sessionStorage.setItem("cart", JSON.stringify(cart));
}


function removeItemFromCart(productID){
    let product = products.find(function(product){
        return product.id == productID;
    })
    if(product.quantity > 0 ){
        product.quantity--;
        if(productID == 1)
            document.getElementById('vest').innerHTML = "<br />" + product.name + " - " + product.price + " x" + product.quantity;
        else
            document.getElementById('t_shirt').innerHTML = "<br />" + product.name + " - " + product.price + " x" + product.quantity;

        if(product.quantity == 0){
            const indexOfObject = cart.findIndex(object => {
                return object.id === productID;
            });
                cart.splice(indexOfObject, 1);
                array_id.splice(indexOfObject, 1);
            if(productID == 1)
                document.getElementById('vest').innerHTML = "";
            else
                document.getElementById('t_shirt').innerHTML = "";
        }
    }
    else{
        alert("You have nothing in the shopping cart.");
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
}


function updateQuantity(productID, quantity){
    for(let product of cart){
        if(product.id == productID){
            product.quantity = quantity;
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function getTotal(){
    let temp = cart.map(function(item){
        return parseFloat(item.price * item.quantity);
    });

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    document.getElementById('total_price').innerHTML = sum;
}

function buy(){
    if(cart.length == 0)
        alert("The shopping cart is empty");
    else
    {
        if(confirm("Are you sure?") == true)
            {
                alert("Thank you.");
                localStorage.setItem("cart", sessionStorage.getItem("cart"));
                this.window.open("store.html", "_self");
            }
    }
}

function quantity1(productID) {
    let product = products.find(function(product){
        return product.id == productID;
    })
};


function quantity2(productID) {
    let product = products.find(function(product){
        return product.id == productID;
    })
};