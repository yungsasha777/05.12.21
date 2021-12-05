var xhttp = new XMLHttpRequest();
let result = 'empty';
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fetchJson(JSON.parse(this.responseText), this.responseText);
    };
};
xhttp.open("GET", "https://raw.githubusercontent.com/yungsasha777/21.11.21/main/db.json", true);
xhttp.send();

function fetchJson(arg, arg2) {
    result = arg;
    console.log(result.products);
    result.products.forEach(constructPage)
};

function constructPage(item, index, arr) {
    let contentToAppend = `<div class="container">
  <h1 class="name">${item.name}</h1>
  <h3 class="name">Description:</h3>
  <p style="margin-left: 20px">${JSON.stringify(item.description).replace(/"|{|}/gi, ' ').replace(/ , /gi, "; ").replace('[', ' ').replace(']', ' ')}</p>
  <h3 class="name">Seller: ${item.seller}</h3>
  <h3 class="name">Price: ${item.price}</h3>
</div>`;

    $('#maincontainer').append(contentToAppend)

}