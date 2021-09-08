var elMoviesList = document.querySelector('.movies-list');
var movieses = movies.slice(0, 100);
var elMoviesTemplate = document.querySelector('#movies-template').content;
var elMoviesFragment = document.createDocumentFragment();


movieses.forEach (function (movie, index) {
  var elMoviesItem = elMoviesTemplate.cloneNode(true);

  elMoviesItem.querySelector('.movies-img').src = `http://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`;
  elMoviesItem.querySelector('.movies-img').alt = movie.Title;
  elMoviesItem.querySelector('.movies-name').textContent = movie.Title;
  elMoviesItem.querySelector('.movies-star').textContent = movie.imdb_rating;
  elMoviesItem.querySelector('.movies-date').textContent = movie.movie_year;
  elMoviesItem.querySelector('.movies-time').textContent = Math.floor(Number(movie.runtime / 60)) + 'hr' + ' ' + (movie.runtime % 60) + 'min';
  elMoviesItem.querySelector('.movies-catecories').textContent = movie.Categories.split('|').join(', ');
  elMoviesItem.querySelector('.movies-link').dataset.index = index;
 
  elMoviesFragment.appendChild(elMoviesItem);
})

elMoviesList.appendChild(elMoviesFragment);



var elMovielink = document.querySelectorAll('.movies-link');
var elMovieModal = document.querySelector('#movieModal');

elMovielink.forEach(function (btn) {
  btn.addEventListener('click', () => {
    var movie = movieses[Number(btn.dataset.index)];
    elMovieModal.querySelector('.movie__title').textContent = movie.Title;
    elMovieModal.querySelector('.movie__rating').textContent = movie.imdb_rating;
    elMovieModal.querySelector('.movie__year').textContent = movie.movie_year;
    elMovieModal.querySelector('.movie__duration').textContent = Math.floor(Number(movie.runtime / 60)) + 'hr' + ' ' + (movie.runtime % 60) + 'min';
    elMovieModal.querySelector('.movie__catigories').textContent = movie.Categories.split('|').join(', ');
    elMovieModal.querySelector('.movie__trailer').src = `https://www.youtube.com/embed/${movie.ytid}`;
    elMovieModal.querySelector('.movie__summary').textContent = movie.summary;
    elMovieModal.querySelector('.movie__imdb-link').href = `https://www.imdb.com/title/${movie.imdb_id}`;
  })
})