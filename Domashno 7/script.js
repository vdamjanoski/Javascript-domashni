async function getShows(searchKeyword) {
  if (searchKeyword == "" || searchKeyword == undefined) {
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchKeyword}`
    );
    const data = await response.json();
    const mappedShows = data.map((x) => x.show);
    return mappedShows;
  }
}

const showsContainer = document.getElementById("shows");

function renderGenres(genres) {
  var genresHtml = "";
  genres.forEach((genre) => {
    genresHtml.innerHTML += `<span class="genre">${genre}</span>`;
  });
  return genresHtml;
}

// Alternative way of rendering the genres using forEach
// ${renderGenres(show.genres)}

// Initial load
getShows().then((shows) => {
  populateShows(shows);
});

function populateShows(shows) {
  showsContainer.innerHTML = "";
  var noResultsContainer = document.getElementById("no-results");

  if (shows.length == 0) {
    noResultsContainer.innerHTML = `
        <img src="./images/no-results.png" />
        <h2>No Results</h2>
        <p>Please change your search keyword</p>
    `;
  } else {
    noResultsContainer.innerHTML = "";
    shows.forEach((show) => {
      showsContainer.innerHTML += `
      <div class="show">
        <i class="fa-solid fa-bookmark bookmark"></i>
        <img class="show-img" src="${show.image.medium}" />
        <div class="show-data">
        <h2>${show.name}</h2>
        <p><i class="fa-solid fa-star"></i> ${show.rating.average}</p>
        <div class="genres">
        ${show.genres
          .map((genre) => `<span class="genre">${genre}</span>`)
          .join("")}
          </div>
          <div class="links">
          <a href="https://www.imdb.com/title/${
            show.externals.imdb
          }" target="_blank">Learn More</a></div></div>
      </div>
          `;
    });
  }
} 
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
function getData(){
    getShows(searchInput.value).then((shows)=>{
        populateShows(shows);
    })
}  