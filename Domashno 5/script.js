async function getShows() {
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();
  
  
    return data;
  }
  
  
  const showsContainer = document.getElementById("shows");
  
  
  getShows().then((data) => {
    data.forEach((show) => {
      showsContainer.innerHTML += `
              <div class="show">
                  <h2>${show.name}</h2>
                  <img src="${show.image.medium}" />
                  <p>Star ${show.rating.average}</p>
                  ${show.genres.map(genre => `<p>${genre}</p>`)}
                  <a href="https://www.imdb.com/title/${show.externals.imdb}" target="_blank">Learn More</a>
              </div>
          `;
    });
  });
  