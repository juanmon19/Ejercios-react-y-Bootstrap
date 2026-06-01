import { createContext } from 'react';

export const SearchContext = createContext({ info: 'Hola mundo' });
export  function SearchProvider({children}) {
    let[search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
)} 

