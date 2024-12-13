const id = new URLSearchParams(window.location.search).get("id");
const showName = new URLSearchParams(window.location.search).get("name");


async function getCastData(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
  const cast = await response.json();
  return cast;
}

document.getElementById("showTitle").innerHTML+=` ${showName}`



getCastData(id).then((cast) => {
    populateCast(cast);
  });

  function populateCast(cast) {
    const castContainerDiv = document.getElementById("cast-container");
    cast.forEach((cast) => {
      const castDiv = document.createElement("div");
      castDiv.classList.add("cast-item");
  
      
      castDiv.innerHTML = `
      <div class="cast">
      <div class="cast-persons">
      <div class="person">
          <h3>${cast.person.name}</h3>
          <img src="${cast.person.image.medium}" alt=""> 
      </div>
        <div class="character">
          <h3>${cast.character.name}</h3>
          <img src="${cast.character.image.medium}" alt=""> 
        </div>
      </div>
      <div class="cast-a">
      <a href=people.html?id=${cast.person.id}>Click for more personal info</a>
      </div>
      </div>

      `;
      castContainerDiv.appendChild(castDiv);
    });
  }
  