const searchInput = document.getElementById("search");
const wrapper = document.getElementById("movie-wrapper");
const resultSec = document.querySelector(".result");
const trendingSec = document.querySelector(".trending");
const latestSec = document.querySelector(".latest");
const textResult = document.getElementById("tResult");
const textTrending = document.getElementById("tTrending");
const textLatest = document.getElementById("tLatest");

//search
searchInput.addEventListener("input", () => {
  const search = searchInput.value;
  // console.log(search);
  let temp = ``;

  if (search == "") {
    if (window.innerWidth < 780) {
      trendingSec.style.display = "grid";
      latestSec.style.display = "grid";
      textTrending.style.display = "block";
      textLatest.style.display = "block";
      resultSec.innerHTML = temp;
      textResult.style.display = "none";
      return;
    } else {
      trendingSec.style.display = "flex";
      latestSec.style.display = "flex";
      textTrending.style.display = "block";
      textLatest.style.display = "block";
      resultSec.innerHTML = temp;
      textResult.style.display = "none";
      return;
    }
  }
  trendingSec.style.display = "none";
  latestSec.style.display = "none";
  textTrending.style.display = "none";
  textLatest.style.display = "none";
  textResult.style.display = "block";

  fetch("./film.json")
    .then((response) => response.json())
    .then((data) => {
      //filter data sesuai input search
      console.log(data.film);
      const filteredData = data.film
        .filter(
          (item) => item.title.toLowerCase().includes(search.toLowerCase()) //filter sesuai value input
        )
        .filter(
          (item, index, self) =>
            index === self.findIndex((film) => film.title === item.title) //hapus duplikat
        );
      if (filteredData.length == 0) {
        temp += `<p> Tidak ada hasil yang ditemukan .....</p>`;
        resultSec.innerHTML = temp;
        return;
      }
      filteredData.forEach((data) => {
        console.log(data);
        temp += `
          <div class="film">
          <img src="${data.imgpath}" alt="" />
          <h4>${data.title} (${data.year})</h4>
          <p>Director : ${data.director}</p>
          
          </div>
        
        `;
      });

      resultSec.innerHTML = temp;
      return;
    });
});
