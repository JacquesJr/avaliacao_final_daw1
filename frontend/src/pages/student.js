import { Container, Content } from '../styles/Student';

import Tab from '../components/Tab';
import Card from '../components/Card';

const Student = () => {
  return (
    <Container>
        <Tab options={['Seus eventos', 'Pendentes',]} />
        <Content>
          <Card />
        </Content>
    </Container>
  );
};

export default Student