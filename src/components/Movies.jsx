import { React } from "react";
import "../style.css";

// eslint-disable-next-line react/prop-types
function ListOfMovies({ movies }) {
    return (
        <>
            <span>Resultados de las películas</span>
            <div className="filmList">
                {/*eslint-disable-next-line react/prop-types*/}
                {movies.map((movie) => {
                    return (
                        <article className="filmCard" key={movie.id}>
                            <img src={movie.poster} className="filmPoster" />
                            <h3>{movie.title}</h3>
                            <span>{movie.year}</span>
                        </article>
                    );
                })}
            </div>
        </>
    );
}

function NoResultsMovies() {
    return <p>No se han encontrado resultados</p>
}

// eslint-disable-next-line react/prop-types
export function Movies({ movies }) {
    // eslint-disable-next-line react/prop-types
    const hasMovies = movies?.length > 0;

    return (
        hasMovies 
            ? <ListOfMovies movies={movies} /> 
            : <NoResultsMovies />
    )
}
