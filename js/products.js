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

let html = "";


for(let i = 0; i < products.length; i++) {
    
    let stock = products[i].soldOut;

  
    if(!stock) {
        stock = "green";
    }
    else {
        stock = "red"
    }
    
    
    let price = products[i].price;

    if(!price) {
        price = "Unavailable";
    }
    
    html += `<h4 style="color: ${stock}">${products[i].name}</h4>
            <p>Price: ${price}</p>`;

}


container.innerHTML = html;