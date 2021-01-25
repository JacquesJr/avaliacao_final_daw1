import { useCallback } from 'react';
import { FiTag, FiMapPin, FiCalendar, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi';
import api from '../api';
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';

import { Container, Info, Text, Button, Content } from '../styles/components/Card';
import { maskDate, maskCurrency } from '../utils';

const Card = ({ data: { id, name, address, inicialDate, finalDate, campus, owner_id, value } }) => {
  const { token, user } = useAuth()
  const { addToast } = useToast();

  const handleParticipateEvent = useCallback(() => {
    try {
      api.post('/registers', {
        event_id: id,
        user_id: user.id,
        owner_id: owner_id,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      addToast({
        type: 'success',
        title: 'Parabéns! Você está participando do evento',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao participar do evento',
      });
      console.log(err)
    }
  }, []);

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
      <Button onClick={() => {handleParticipateEvent()}}>
        <button type="button">
          <FiCheckCircle size={16} />
          Quero participar
        </button>
      </Button>
    </Container>
  );
}

export default Card;