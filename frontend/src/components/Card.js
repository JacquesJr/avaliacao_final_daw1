import { FiTag, FiMapPin, FiCalendar, FiBook, FiDollarSign, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useAuth } from '../hooks/auth';

import { Container, Info, Text, Button, Content } from '../styles/components/Card';
import { maskDate, maskCurrency } from '../utils';

const Card = ({ data: { id, name, address, inicialDate, finalDate, campus, owner_id, value }, status, onClick }) => {
  const { user } = useAuth()

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
      {status && status === 'subscribed' ? (
        <Button status={status} onClick={() => onClick(id, user.id, owner_id)}>
          <button type="button">
            <FiXCircle size={16} />
            Cancelar participação
          </button>
        </Button>
      ) : status === 'owner' ? (
        <Button status={status} onClick={() => onClick(id, user.id, owner_id)}>
          <button type="button">
            <FiXCircle size={16} />
            Cancelar evento
          </button>
        </Button>
      ): (
        <Button onClick={() => onClick(id, user.id, owner_id)}>
          <button type="button">
            <FiCheckCircle size={16} />
            Quero participar
          </button>
        </Button>
      )}
    </Container>
  );
}

export default Card;