import { useEffect, useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if(search === '') {
            setError('No se puede dejar el campo vacío');
            return;
        }

        if(search.length < 3) {
            setError('La búsqueda ha de contener almenos 3 caracteres');
            return;
        }

        setError(null);
    }, [search]);

    return {search, setSearch, error}
}
