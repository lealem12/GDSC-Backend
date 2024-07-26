const movieElement = (movieObj) => {
    return `<section class="movies-list">
            <div class="movie">
                <img src="${movieObj.Poster}" class="poster">
                <div class="title">Title: ${movieObj.Title}</div>
                <div class="description">
                    <div class="type">Type: ${movieObj.Type}</div>
                    <div class="year">Year: ${movieObj.Year}</div>
                    <div class="imdbID">imdbID: ${movieObj.imdbID}</div>
                </div>
            </div>
        </section>`
}

export default movieElement;
