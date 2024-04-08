const apiKey = "apikey=355211d5";

const btn = document.querySelector(".js-btn");
const form = document.querySelector("form");
const input = document.querySelector(".form__search");
const moviesList = document.querySelector(".movies__list");

btn.addEventListener("click", searchMovies);
form.addEventListener("submit", function(event) {
event.preventDefault();
searchMovies();
input.value = '';
});

function searchMovies() {
const searchTerm = input.value.trim();

if (searchTerm === "") {
    moviesList.innerHTML = `<p class = name__movie>Введите названия фильма !!!</p>`;
return;
}

const url = `https://www.omdbapi.com/?s=${searchTerm}&${apiKey}`;

fetch(url)
.then((response) => response.json())
.then((data) => {
if (data.Response === "True") {
displayMovies(data.Search);

} else {
    moviesList.innerHTML = `<p class = 'no__movies'>Фильмы не найдены</p>`;
}
})
.catch((error) => console.error("Error:", error));
}

function displayMovies(movies) {
moviesList.innerHTML = "";

movies.forEach((movie) => {
const moviePoster = movie.Poster === "N/A" ? "placeholder-image.jpg" : movie.Poster;
const movieType = movie.Type === 'movie' ? 'Фильм' : '';
const TypeSeries =  movie.Type === 'series' ? 'Сериал' : '';
const TypeGame = movie.Type === 'game' ? 'Игра' : '';
const movieElement = `
  <a class="movie__wrapper"
  target="_blank"
  href="modal.html?id=${movie.imdbID}">
    <div class="movie">
      <img src="${moviePoster}" class="movie__cover" 
      alt = "логотип фильма ${movie.Title}"/>
    </div>
    <div class="movie__info">
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__data">${movie.Year}</div>
      <div class="movie__category">${movieType}${TypeSeries}${TypeGame}</div>
    </div>
  </a>
`;
moviesList.insertAdjacentHTML("beforeend", movieElement);
});
}