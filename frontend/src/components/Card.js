import { FiTag, FiMapPin, FiCalendar, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

import { Container, Info, Text, Button, Content } from '../styles/components/Card';

const Card = () => {
  return (
    <Container>
      <Content>
        <Info>
          <FiTag size={20} strokeWidth="0.833333" />
          <Text>Bsides São Paulo</Text>
        </Info>
        <Info>
          <FiMapPin size={20} strokeWidth="0.833333" />
          <Text>R. Monte Alegre, 984 - Perdizes, São Paulo - SP</Text>
        </Info>
        <Info>
          <FiCalendar size={20} strokeWidth="0.833333" />
          <Text>15/02/2020 - 21/02/2020</Text>
        </Info>
        <Info>
          <FiBook size={20} strokeWidth="0.833333" />
          <Text>Campus: IFTM - UPT</Text>
        </Info>
        <Info>
          <FiDollarSign size={20} strokeWidth="0.833333" />
          <Text>Bolsa: R$ 80/dia</Text>
        </Info>
      </Content>
      <Button>
        <button type="button">
          <FiCheckCircle size={16} />
          Quero participar
        </button>
      </Button>
    </Container>
  );
}

export default Card;