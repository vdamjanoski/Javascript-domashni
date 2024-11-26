async function fetchPhones() {
    var response = await fetch("https://api.restful-api.dev/objects");
    var data = await response.json();
    return data;
  }
  var Phones;
  console.log(Phones);
  fetchPhones().then((Phones) => {
    console.log(Phones)
    Phones.forEach(element => {
        document.getElementById("search").innerHTML+=`
        <div class="element">
        <p>${element.id}</p>
        <p>${element.name}</p>
        <p>${element.data}</p>
        <p>${element.data.color}</p>

        </div>`
    });
  })
var searchBtn = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");


  
  