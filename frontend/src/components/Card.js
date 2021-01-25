import { FiTag, FiMapPin, FiCalendar, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

import { Container, Info, Text, Button, Content } from '../styles/components/Card';
import { maskDate, maskCurrency } from '../utils';

const Card = ({ data: { name, address, inicialDate, finalDate, campus, value } }) => {
  return (
    <Container>
      <Content>
        <Info>
          <FiTag size={20} strokeWidth="0.833333" />
          <Text>{name}</Text>
        </Info>
        <Info>
          <FiMapPin size={20} strokeWidth="0.833333" />
          <Text>{address}</Text>
        </Info>
        <Info>
          <FiCalendar size={20} strokeWidth="0.833333" />
          <Text>{maskDate(inicialDate)} - {maskDate(finalDate)}</Text>
        </Info>
        <Info>
          <FiBook size={20} strokeWidth="0.833333" />
          <Text>{campus}</Text>
        </Info>
        <Info>
          <FiDollarSign size={20} strokeWidth="0.833333" />
          <Text>{maskCurrency(value)}</Text>
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