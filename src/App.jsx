import { React, useRef, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import "./style.css";


export function App() {
    //const API_KEY = "4287ad07";
    //const [search, setSearch] = useState("");
    //const [films, setFilms] = useState([]);
    //const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;

    const [formError, setFormError] = useState(null);

    const movies = useMovies();
    //const inputRef = useRef();
    const {search, setSearch, error} = useSearch();

    const handleSubmit = (event) => {
        event.preventDefault();

        /**
         * De esta forma se obtienen todos los campos del formulario
         * en forma de objeto en una sola línea
         */
        const fields = Object.fromEntries(new window.FormData(event.target));

        console.log(fields.query);
        handleValidation(fields.query);
    }

    function handleValidation(query) {
        if(query === '') {
            setFormError('No se puede dejar el campo vacío');
            return;
        }

        if(query.length < 3) {
            setFormError('La búsqueda ha de contener almenos 3 caracteres');
            return;
        }

        setFormError(null);
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="page">
            <header>
                <h2>Buscador de películas</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        value={search}
                        name="query"
                        type="text"
                        placeholder="Star Wars, Avengers, Mamma mía..."
                    />
                    <button type="submit">Buscar</button>
                </form>
                {formError && <p style={{ color: "red" }}>{error}</p>}
            </header>
            <main>
                <div className="filmList">
                    <Movies movies={movies} />
                </div>
            </main>
        </div>
    );
}
