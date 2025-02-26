import './SearchBox.css';

interface SearchboxProps {
    onInputChange: (inputValue: string) => void; 
}

const SearchBox = ({onInputChange}: SearchboxProps) => {
    return (
        <input
            className='search' 
            type="search" 
            placeholder='Search Pokemon'
            onChange={(e) => {
                onInputChange(e.target.value);
            }}
        />
    )
}

export default SearchBox; 