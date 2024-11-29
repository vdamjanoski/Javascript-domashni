async function getShows() {
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  return data;
  
}
const showContainer= document.getElementById("showContainer");

getShows().then((data)=>{
  data.forEach(Element => {
    showContainer.innerHTML+=`
    <div class="show">
      
    </div>`
    
  });
})