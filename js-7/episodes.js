const id = new URLSearchParams(window.location.search).get("id");


async function getShowData(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();
  return show;
}


async function getEpisodesForShow(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await response.json();
  return episodes;
}




getEpisodesForShow(id).then((episodes) => {
  populateEpisodes(episodes);
});


getShowData(id).then((show) => {
  populateShow(show);
});





function populateShow(show) {
  const showContainer = document.getElementById("show");
  const showTitle = document.getElementById("show-title");
  showTitle.innerText = show.name;


  const showDivElement = document.createElement("div");
  showDivElement.classList.add("show");
  showDivElement.innerHTML = `
       <div class="show-left">
        <img src="${show.image.original}" width="350" />
       </div>
       <div class="show-right">
            <div class="genres">
            ${show.genres
              .map((genre) => `<span class="genre">${genre}</span>`)
              .join("")}
            </div>
            ${show.summary}
            <p>Premiered: ${show.premiered}</p>
            <p>Ended: ${show.ended}</p>
       </div>
    `;


  showContainer.appendChild(showDivElement);
}

const episodeContainer = document.getElementById("episodes");
function populateEpisodes(episodes) {

  episodeContainer.innerHTML = `<h1>Episodes: ${episodes.length}</h1>`;
  episodes.forEach((episode) => {
    const episodeDivElement = document.createElement("div");
    episodeDivElement.classList.add("episode");
    episodeDivElement.innerHTML = `
        <div class="episode-img">
            <img src="${episode.image.medium}" />
        </div>
        <div class="episode-data">
            <div class="episode-title-div">
                <h3>${episode.name}</h3>
                <span>${episode.airdate}</span>
                <span>${episode.id}</span>
            </div>
            ${episode.summary}
            <div class="episode-rate">
                <span><i class="fa fa-star" style="color: gold"></i> ${episode.rating.average}</span>
                <button><i class="fa fa-star" style="color: blue"></i> Rate</button>
            </div>
        </div>
      `;

      episodeDivElement.addEventListener("click", () => {
        window.location.href = `episodesOnly.html?id=${episode.id}`
    });

      


    episodeContainer.appendChild(episodeDivElement);
  });
}


// episodeContainer.addEventListener("click", () => {
//   console.log(`clicked`);
// });

// function populateEpisodeOnly(episodeOnly) {
//   const episodeDivContainer = document.getElementById("episodeDiv");{
//     const episodeDivElement = document.createElement("div");
//     episodeDivContainer.innerHTML += `
//       <div>
//             <img src="${episodeOnly.image.medium}" />
//         </div>
//         <div>
//             <div>
//                 <h3>${episodeOnly.name}</h3>
//                 <span>${episodeOnly.airdate}</span>
//             </div>
//             ${episodeOnly.summary}
//             <div>
//                 <span> ${episodeOnly.rating.average}</span>
//                 <button>Rate</button>
//             </div>
//         </div>
    
//       `;
//       episodeDivContainer.appendChild(episodeDivElement);
//   };

// }
