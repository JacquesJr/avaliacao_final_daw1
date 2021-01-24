import { Container, Content } from '../styles/Home';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <Content>
        <Card />
      </Content>
    </Container>
  )
}

export default Home;