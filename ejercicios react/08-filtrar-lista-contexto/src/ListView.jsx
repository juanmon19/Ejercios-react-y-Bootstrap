import SearchInput from './form/searchinput';

function ListView({elements,}) {
    return (
        <div>
            <SearchInput/>
            <ul>
                {elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li> )}
            </ul>
        </div>
    )
}

export default ListView