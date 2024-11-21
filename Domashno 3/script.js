function reload(){
    setTimeout(()=>{
        location.reload();
    },100)

}
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((json) => {
        json.forEach(cat => {
            document.getElementById("cats").innerHTML += `
      <div class="card">
        <h2> Cat id: ${cat.id}</h2>
        <p> Cat width: ${cat.width}</p>
        <a href="${cat.url}" onclick="reload()" target="_blank" >${cat.url}</a>
      </div>
      `;    
        });
    });

  