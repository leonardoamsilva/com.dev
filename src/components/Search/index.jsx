
import './style.css';

export const Search = ({ setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input type="text" id="search"  placeholder="search" onChange={handleSearch} />
  );
};