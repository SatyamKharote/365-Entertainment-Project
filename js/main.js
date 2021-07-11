var indexValue = 1;
    showImg(indexValue);

    function btm_slide(e) {
        showImg((indexValue = e));
    }

    function side_slide(e) {
        showImg((indexValue += e));
    }

    function showImg(e) {
        var i;
        const img = document.querySelectorAll(".images img");
        const sliders = document.querySelectorAll(".btm-sliders span");
        if (e > img.length) {
            indexValue = 1;
        }
        if (e < 1) {
            indexValue = img.length;
        }
        for (i = 0; i < img.length; i++) {
            img[i].style.display = "none";
        }
        for (i = 0; i < sliders.length; i++) {
            sliders[i].style.background = "none";
        }
        img[indexValue - 1].style.display = "block";
        sliders[indexValue - 1].style.background = "white";
    }


var currentGenre = "Genre";
var movieTitle;
// function showNoResultsText(totalcount) {

//     if (totalcount == 0) {
//     //   document.getElementById("no-results").style.display = "block";
//       console.log('totalcount in showNoResultsText' + totalcount);
//     } else {
//       document.getElementById("no-results").style.display = "none";
//     }
  
// }
function getMediaPosters(selectedGenre) {
  var countMovies = 0;
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreText").innerHTML = selectedGenre;

  if (selectedGenre == 'All') {
    document.getElementById('movies-action').style.display = "flex";
    document.getElementById('movies-drama').style.display = "flex";
    document.getElementById('movies-scifi').style.display = "flex";
    mediaCarouselMovies = document.getElementById("film-section");
  }
    console.log(selectedGenre);
    if (selectedGenre == 'Action') {
        document.getElementById('movies-action').style.display = "flex";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-scifi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }
      if (selectedGenre == 'Drama') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "flex";
        document.getElementById('movies-scifi').style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }
      if (selectedGenre == 'Sci-Fi') {
        document.getElementById('movies-action').style.display = "none";
        document.getElementById('movies-drama').style.display = "none";
        document.getElementById('movies-scifi').style.display = "flex";
        mediaCarouselMovies = document.getElementsByClassName("film-section-card");
      }

  var mediaCarouselMoviesCount = mediaCarouselMovies.length;

  for (var count = 0; count < mediaCarouselMoviesCount; count++) {
    if (mediaCarouselMovies[count].style.display == "block")
      countMovies++;
  }
  console.log(countMovies);

//   showNoResultsText(countMovies);
}

function updateResults() {
    var query = document.getElementById('mysearch').value.trim().toLowerCase();
    var counter = 0;
  
    if (currentGenre == 'All' || currentGenre == 'Genre') {
      movieTitle = document.getElementsByClassName('film-name');
    }
    if (currentGenre == 'Action') {
      movieTitle = document.getElementById('movies-action').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Drama') {
      movieTitle = document.getElementById('movies-drama').getElementsByClassName('film-name');
    }
    if (currentGenre == 'Sci-Fi') {
      movieTitle = document.getElementById('movies-scifi').getElementsByClassName('film-name');
    }
    for (var name = 0; name < movieTitle.length; name++) {
      var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();
  
      if (compareMovieTitles.indexOf(query) === -1) {
        movieTitle[name].closest('div.film-section-card').style.display = "none";
      } else {
        movieTitle[name].closest('div.film-section-card').style.display = "block";
        counter++;
      }
    }
  
    // showNoResultsText(counter);
  }
  