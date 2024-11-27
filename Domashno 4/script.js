async function fetchPhones() {
  var response = await fetch("https://api.restful-api.dev/objects");
  var data = await response.json();
  return data;
}
var Phones;
fetchPhones().then((Phones) => {
  console.log(Phones)
  Phones.forEach(element => {
    if (element.data == null){
      document.getElementById("search").innerHTML+=``
    }else{
      document.getElementById("search").innerHTML+=`
        <div class="element">
          <p>${element.id}</p>
          <p>${element.name}</p>
          <p>${element.data.color}</p>
          <p>${element.data.price}$</p>
          <p>${element.data.Capacity}</p>
        </div>`
      }

  });
})
var searchBtn = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {
  console.log("clicked");
  })


