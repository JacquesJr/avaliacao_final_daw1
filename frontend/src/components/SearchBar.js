import { FiSearch } from 'react-icons/fi';
import { Container } from '../styles/components/SearchBar';

const SearchBar = ({onChange}) => {
  return (
    <Container>
      <FiSearch size={20} strokeWidth="0.9" />
      <input
        type="text"
        placeholder="Digite o nome do eventos para pesquisar"
        onKeyUp={(e) => {
          onChange(e.target.value)
        }}
      />
    </Container>
  )
};

export default SearchBar;