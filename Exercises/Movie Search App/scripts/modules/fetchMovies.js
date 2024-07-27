const fetchMovies = async (searchKeyword) => {
    try {
        const data = await fetch(`https://www.omdbapi.com/?apikey=7d3b1cc0&s=${searchKeyword}`);
        const jsonData = await data.json();
        return jsonData.Search;
    } catch (err) {
        return err;
    }
};

export default fetchMovies;
