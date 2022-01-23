const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

const container = document.querySelector(".container");

let price = "unavailable";

if(product.price) {
    price = product.price;
}

let onSale = "none";

if(product.onSale) {
    onSale = "underline";
}

container.innerHTML = ` <div class="product">
                        <h4 style="text-decoration: ${onSale}">${product.name}</h4>
                        <div>Price: ${price}</div>
                        </div>`;
