const id = new URLSearchParams(window.location.search).get("id");


async function getEpisodeOnly(id) {
    const response = await fetch(`https://api.tvmaze.com/episodes/${id}`);
    const episodeOnly = await response.json();
    return episodeOnly;
}

getEpisodeOnly(id).then((episodeOnly) =>{
    populateEpisodeOnly(episodeOnly);
});



function populateEpisodeOnly(episodeOnly) {
    const episodeDivContainer = document.getElementById("episodeDiv");
    const episodeDivElement = document.createElement("div");
    episodeDivContainer.innerHTML += `
    <div class="main-container">
      <div class="image-container">
            <img src="${episodeOnly.image.medium}" />
        </div>
            <div class="content">
                <h3>${episodeOnly.name}</h3>
                <span>${episodeOnly.airdate}</span>
                <span>${episodeOnly.summary}</span
            </div>
            <div class="rating-container">
                <span><i class="fa fa-star" style="color: gold"></i> ${episodeOnly.rating.average}</span>
                <button>Rate</button>
            </div>
        </div>
      `;
      episodeDivContainer.appendChild(episodeDivElement);

  ;

}
