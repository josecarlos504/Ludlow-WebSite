/* Code adapted step by step from the following tutorial (https://www.youtube.com/watch?v=B20Getj_Zk4&list=RDCMUCADAkBGiLWIPkCu8D1R1M6g&index=2 by Telmo Sampaio)


/*targeting/calling add-cart class */
let carts = document.querySelectorAll('.add-cart');

let products = [
		{
            name: "Lodge Cast Iron",
			tag:"LodgeDutchOven_580x",
            price: 155,
            inCart: 0
        },
        {
            name: "Optimal Tagine Red",
			tag:"Dexam_ChausseurTagine_1024x1024",
            price: 45,
            inCart: 0
        },
        {
            name: "Ilsa Mussel Pot",
			tag:"MusselsPan",	
            price: 25,
            inCart: 0
        },
        {
            name: "De Prim'Appety",
			tag:"Le_Pentole_Casserole_with_Lid_24cm_Website_1024x1024",
            price: 165,
            inCart: 0
        },
        {
            name: "De Buyer Non Stick Frypan - Copper",
			tag:"Fryingpans2",
            price: 66,
            inCart: 0
        },
        {
            name: "De Buyer Non Stick Frypan - Black",
			tag:"Fryingpans3",
            price: 45,
            inCart: 0
        },
        {
            name: "De Buyer Non Stick Frypan - Lid",
			tag:"Fryingpans4",
            price: 54,
            inCart: 0
        },
        {
            name: "De Buyer Non Stick Frypan - Grilled",
			tag:"Fryingpans6",
            price: 55,
            inCart: 0
        }
    ];
	
    /*loop through class add-cart, looping the array length */
for (let i = 0; i < carts.length; i++) {
    /*whenever click on add-cart add to cart */
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]); /*When called card number pass product*/
        totalCost(products[i]);
    })
}

/*this function is going to check the local storage if there is an items of cart numbers if is exists  */
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers'); /*get the number of items on click*/
    if (productNumbers) { /*if there is there are product number from local storage */
        document.querySelector('.cart span').textContent = productNumbers; /*set the product number to the number of product in the storage */
    }
}

/*Items to be add to the cart */
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers'); /*product number local storage */

    /*Covert string to int for product number */
    productNumbers = parseInt(productNumbers);
    /*if there  */
    if (productNumbers) { /*if there is product in the cart or if it exsts and true */
        localStorage.setItem('cartNumbers', productNumbers + 1); /*add plus one our default is 0, add one to it */
		/*display num of products in the cart to the nav menu icon*/
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else { /*if there is no product in the storage */
        localStorage.setItem('cartNumbers', 1); /*set the cart to one */
        document.querySelector('.cart span').textContent = 1; /*if that is the first item make 1 */
    }
	/**/
    setItems(product);

}

function setItems(product) {
	
    let cartItems = localStorage.getItem('productsInCart');
    /*pass from JSON to js */
    cartItems = JSON.parse(cartItems);
	
    if (cartItems != null) {
		/*if you find an undefined tag update the cart*/
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
		/*add first item's details*/
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    /*Pass as String not JSON */
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/*creates a var in the local storage where to store the accumulative price of the items in the cart */
function totalCost(product) {

    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } 
	else {
        localStorage.setItem("totalCost", product.price);
    }
	console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let cartHolder = document.querySelector(".products");
	let cartCost = localStorage.getItem("totalCost");
    if (cartItems && cartHolder) {
        cartHolder.innerHTML = "";
        Object.values(cartItems).map(item => {
            cartHolder.innerHTML += `
            <div class="product">
                
                <tr>
                    <td>
                        <img class="product-img" src="./img/${item.tag}.png">
                        <span class="product-desc">${item.name}</span>
                    </td>
                    <td>                
		                <span class="pPrice">£${item.price}</span>
                    </td>
                    <td>
                        <span class="pQuantity"><a onclick="popItem()" href="#"><i class="fa fa-minus-circle" aria-hidden="true"></i></a><span>${item.inCart}</span><a class="add-cart" href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                    </td>
                    <td>
                        <span class="pTotal">£${item.inCart * item.price}</span>
                    </td>
                
                `
        })
		cartHolder.innerHTML +=`
			<div class="cartTotalContainer">
				<h4 class="cartTotalTitle">Total Price : £${cartCost}</h4>
			</div>
			`
    }

}
/**/
	function clearLoStorage(){
		localStorage.clear();
	}
onLoadCartNumbers(); /*when ever we run for the first time this will run */
displayCart();
