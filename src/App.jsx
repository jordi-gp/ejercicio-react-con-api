import { React } from "react";
import { useState, useEffect } from "react";
import { Movies } from "./components/Movies";
import filmResults from "./mocks/results.json";
import "./style.css";


export function App() {
    const API_KEY = "4287ad07";
    const [search, setSearch] = useState("");
    const [films, setFilms] = useState([]);
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;

    const movies = filmResults.Search;

    /**
     * TODO:
     * - Obtener listado de peliculas por búsqueda
     * - Crear componente de tarjeta de película
     */

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                if (!data.Search) {
                    console.error("No se encontraron resultados");
                    return;
                }

                data.Search.forEach((film) => {
                    setFilms(film);
                });
            });
    }, [search]);

    /**
     * El estado no se actualiza directamente, por eso al hacer el
     * console.log dentro de esta función no se muestra el último valor
     * del estado 'search', para ello se utiliza el useEffect
     */
    const searchFilm = (event) => {
        event.preventDefault();
        const value = document.getElementById("filmTitle").value;
        setSearch(value);
    };

    return (
        <div className="page">
            <header>
                <h2>Buscador de películas</h2>
                <form>
                    <input
                        id="filmTitle"
                        type="text"
                        placeholder="Star Wars, Avengers, Mamma mía..."
                    />
                    <button onClick={searchFilm} type="submit">
                        Buscar
                    </button>
                </form>
            </header>
            <main>
                <span>Resultados de las películas</span>
                <div className="filmList">
                    <Movies movies={movies} />
                </div>
            </main>
        </div>
    );
}
