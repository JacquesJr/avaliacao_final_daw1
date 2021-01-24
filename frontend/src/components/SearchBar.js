import { FiSearch } from 'react-icons/fi';
import { Container } from '../styles/components/SearchBar';

const SearchBar = () => {
  return (
    <Container>
      <FiSearch size={20} strokeWidth="0.9" />
      <input type="text" placeholder="Aperte ENTER para pesquisar"/>
    </Container>
  )
};

export default SearchBar;