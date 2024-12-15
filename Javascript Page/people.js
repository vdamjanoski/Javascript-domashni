const id = new URLSearchParams(window.location.search).get("id");


async function getPeopleData(id) {
  const response = await fetch(`https://api.tvmaze.com/people/${id}`);
  const people = await response.json();
  return people;
}

getPeopleData(id).then((people) => {
    populatePeople(people);
  });

  function populatePeople(people){
    const peopleCard=document.getElementById("peopleCard")
    const peopleDiv=document.createElement("div");
    peopleDiv.innerHTML+=`
            <h1>${people.name}</h1>
<div class="peopleContainer">
    <div class="peopleHeadDiv">
        <div class="imgPeople"><img src="${people.image.medium}" alt=""></div>
        <a href="${people.url}" target="_blank">${people.name}'s more info</a>
    </div>
   <div class="peopleInfo">
   <p><b>Name</b>:  ${people.name}</p>
   <p><b>Country: </b>${people.country.name}/${people.country.code}</p>
   <p><b>Born at:</b> ${people.birthday}</p>
   <p><b>Gender: </b>${people.gender}</p>
   
   </div>
</div>
        `
    // {
    //     "id": 1,
    //     "url": "https://www.tvmaze.com/people/1/mike-vogel",
    //     "name": "Mike Vogel",
    //     "country": {
    //       "name": "United States",
    //       "code": "US",
    //       "timezone": "America/New_York"
    //     },
    //     "birthday": "1979-07-17",
    //     "deathday": null,
    //     "gender": "Male",
    //     "image": {
    //       "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
    //       "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
    //     },
    //     "updated": 1732284645,
    //     "_links": {
    //       "self": {
    //         "href": "https://api.tvmaze.com/people/1"
    //       }
    //     }
    //   }
    peopleCard.appendChild(peopleDiv)
  }