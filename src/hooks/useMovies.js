import filmResults from "../mocks/results.json";

export function useMovies() {
    const movies = filmResults.Search;

    const mappedMovies = movies?.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year
        }
    });

    return mappedMovies;
}