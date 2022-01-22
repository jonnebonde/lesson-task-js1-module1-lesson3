const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];


const container = document.querySelector(".container");

console.log(container)

let html = "";




for(let i = 0; i < products.length; i++) {
    console.log(products[i].name)

    let stock = products[i].soldOut;
  

    if(stock === false) {
        stock = "green";
    }
    else {
        stock = "red";
    }
    
    let price = products[i].price;

    if(!price) {
        price = "Unknown";
    }
    
    
    html += `<h1 style="color: ${stock}">${products[i].name}</h1>
            <p>Price: ${price}</p>`;

}


container.innerHTML = html;