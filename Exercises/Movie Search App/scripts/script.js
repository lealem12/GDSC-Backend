import movieElement from "./elements/movieElement.js";
import fetchMovies from "./modules/fetchMovies.js";

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const moviesContainer = document.querySelector(".main");
const loader = document.createElement("div");
loader.classList.add("loader-wheel");

searchBtn.addEventListener('click', async () => {
    moviesContainer.appendChild(loader);
    const moviesList = await fetchMovies(searchInput.value);
    moviesContainer.innerHTML = "";
    moviesList.forEach(movie => {
        moviesContainer.innerHTML += movieElement(movie);
    });
})

moviesContainer.addEventListener('click', (event)=> {
    if (event.target.tagName === "IMG") {
        const clickedMovie = event.target.parentNode;
        if (clickedMovie.children[2].classList.contains("show-description")) {
            clickedMovie.children[2].classList.remove("show-description");
        } else {
            clickedMovie.children[2].classList.add("show-description");
        }
    }
})

