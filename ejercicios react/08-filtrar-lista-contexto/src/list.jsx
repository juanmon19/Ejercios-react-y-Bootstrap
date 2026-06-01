import { useState } from 'react';
import frameworkList from './frameworkList';
import ListView from './ListView';
import SearchContext from './context/SearchContext';

function List() {
    let [items, setItems] = useState(frameworkList);
    let { search } = useContext(SearchContext);
    useEffect(function(){
        if (!search || search === '')return; 
            filterItems(search);
    } ) 
    function filterItems(searchPattern) {
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    

    function filterItemsBySearchPattern(pattern) {
        let filteredItems = frameworkList.filter(item =>
            item.toLowerCase().includes(pattern.toLowerCase())
        );

        return filteredItems;
    }

    return (
        <SearchProvider>
            <ListView elements={items} />
        </SearchProvider>
    )
}

export default List