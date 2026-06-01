import { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function SearchInput() {
    const { setSearch } = useContext(SearchContext);


    return (
        <input
            type="text"
            placeholder="Buscar framework"
            onChange={(ev) => setSearch(ev.target.value)}
        />
    )
}

export default SearchInput;