var xhttp = new XMLHttpRequest();
let result = 'empty';
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fetchJson(JSON.parse(this.responseText), this.responseText);
    };
};
xhttp.open("GET", "https://raw.githubusercontent.com/yungsasha777/21.11.21/main/db.json", true);
xhttp.send();

const cart = document.getElementById('cartContainer');
let cartList = [];

function fetchJson(arg, arg2) {
    result = arg;
    console.log(result.products);
    result.products.forEach(constructPage)
};

function constructPage(item, index, arr) {
    let contentToAppend = `<div class="container" id="item${index}">
  <h1 class="name">${item.name}</h1>
  <h3 class="name">Description:</h3>
  <p style="margin-left: 20px">${JSON.stringify(item.description).replace(/"|{|}/gi, ' ').replace(/ , /gi, "; ").replace('[', ' ').replace(']', ' ')}</p>
  <h3 class="name">Seller: ${item.seller}</h3>
  <h3 class="name">Price: ${item.price}</h3>
  <button type="button" id="item${index}button" onclick="addToCart(${index})">Buy</button>
</div>`;

    $('#maincontainer').append(contentToAppend)

}

function openCart() {
    cart.classList.toggle('hide');
};

function addToCart(id){
    let elem = document.getElementById(`item${id}`);
    cart.prepend(elem);
    elem.style.marginLeft = '15px';
    elem.style.marginTop = '15px';
    document.getElementById(`item${id}button`).innerText = "Remove";
    document.getElementById(`item${id}button`).setAttribute("onclick", `removeFromCart(${id})`);
    cartList.unshift(id);
};

function removeFromCart(id){
    let parent = document.getElementById('maincontainer');
    let elem = document.getElementById(`item${id}`);
    parent.prepend(elem);
    elem.style.marginLeft = '0px';
    elem.style.marginTop = '0px';
    document.getElementById(`item${id}button`).innerText = "Buy";
    document.getElementById(`item${id}button`).setAttribute("onclick", `addToCart(${id})`);
}