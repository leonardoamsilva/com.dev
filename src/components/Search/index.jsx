import { useEffect, useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import './style.css';

export const Search = ({ setSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
  
    const debouncedSearch = useDebounce(inputValue, 250);
  
    useEffect(() => {
      setSearch(debouncedSearch);
    }, [debouncedSearch, setSearch]);
  
    const handleSearch = (event) => {
      setInputValue(event.target.value);
      setIsTyping(true); // Inicia a animação de carregamento
    };
  
    useEffect(() => {
      if (inputValue === '') {
        setIsTyping(false); // Reseta quando não houver texto
      }
    }, [inputValue]);

  return (
    <input type="text" id="search"  placeholder="search" value={inputValue} onChange={handleSearch} />
  );
};