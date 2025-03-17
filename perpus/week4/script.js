const trending = document.querySelector(".trending");
const latest = document.querySelector(".latest");

fetch("./film.json")
  .then((response) => response.json())
  .then((data) => {
    // Filter type trending
    const filteredDataTrending = data.film.filter(
      (item) => item.type === "trending"
    );

    filteredDataTrending.forEach((film) => {
      console.log(film);

      trending.innerHTML += `
        <div class="film">
          <img src="${film.imgpath}" alt="" />
          <h4>${film.title} (${film.year})</h4>
          <p>Director : ${film.director}</p>
          </div>
      `;
    });
    // Filter type trending
    const filteredDataLatest = data.film.filter(
      (item) => item.type === "latest"
    );

    filteredDataLatest.forEach((film) => {
      console.log(film);

      latest.innerHTML += `
          <div class="film">
            <img src="${film.imgpath}" alt="" />
            <h4>${film.title} (${film.year})</h4>
          <p>Director : ${film.director}</p>
            </div>
        `;
    });
  });
