const apiKey = "apiKey=355211d5";
const params = new URLSearchParams(location.search);
const apiId = params.get('id');

const movieItem = document.querySelector('.movie');

function getMovie() { 
    const url = `https://www.omdbapi.com/?i=${apiId}&${apiKey}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((movie) => {
        displayMovieInformation(movie);
    })
    }
    getMovie(apiId);

    const displayMovieInformation = movie => {
        movieItem.insertAdjacentHTML(
            'beforeend',
            `<div class="card__movie">
            <div class="card__poster">
              <img
                class="card__img"
                src="${movie.Poster}"
                alt="Картинка фильма ${movie.Title}"
              />
            </div>
            <div class="card__info">
              <div class="info__name">${movie.Title}</div>
              <div class="info__year">
                <p class="info__year-title">Год:</p>
                <p class="info__year-text">${movie.Year}</p>
              </div>
              <div class="info__rating">
                <p class="info__rating-title">Рейтинг:</p>
                <p class="info__rating-text">${movie.imdbRating}</p>
              </div>
              <div class="info__release">
                <p class="info__release-title">Дата выхода:</p>
                <p class="info__release-text">${movie.Released}</p>
              </div>
              <div class="info__duration">
                <p class="info__duration-title">Продолжительность:</p>
                <p class="info__duration-text">${movie.Runtime}</p>
              </div>
              <div class="info__genre">
                <p class="info__genre-title">Жанр:</p>
                <p class="info__genre-text">${movie.Genre}</p>
              </div>
              <div class="info__director">
                <p class="info__director-title">Режиссер:</p>
                <p class="info__director-text">${movie.Director}</p>
              </div>
              <div class="info__scenario">
                <p class="info__scenario-title">Сценарий:</p>
                <p class="info__scenario-text">${movie.Writer} </p>
              </div>
              <div class="info__actors">
                <p class="info__actors-title">Актеры:</p>
                <p class="info__actors-text">${movie.Actors}</p>
              </div>
            </div>
          </div>
          <div class="card-movie__box">
            <p class="card-movie__description-text">${movie.Plot}</p>
          </div>
        </div>
             `
        ); 
    };