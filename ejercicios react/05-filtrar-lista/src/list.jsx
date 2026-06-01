import { useState } from 'react';
import frameworkList from './frameworkList';
import ListView from './ListView';
//componentes de presentacion y componentes de contenedor
function List() {
    let [items, setItems] = useState(frameworkList);

    function filterItems(searchPattern) {
        if (searchPattern === '') {
            setItems(frameworkList);
        } else {
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(pattern) {
        let filterItems = frameworkList.map(item => item
            .toLowerCase().includes(pattern.toLowerCase()) ? item : null);
        return filterItems;
    }

    return (
        <ListView elements={items} funcFilterItems={filterItems}/>
    )
}
export default List