import { useEffect, useState } from 'react';
import { Container, Content } from '../styles/User';

import Tab from '../components/Tab';
import Card from '../components/Card';
import api from '../api';
import { useToast } from '../hooks/toast';
import { useAuth } from '../hooks/auth';

const Student = () => {
  const { token, user } = useAuth()
  const { addToast } = useToast();
  const [events, setEvents] = useState([]);
  
  useEffect(async () => {
    try {
      const { data } = await api.get(`/events/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setEvents(data)
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar os eventos',
      });
      console.log(err)
    }
  }, []);

  return (
    <Container>
        <Tab options={['Eventos inscritos', 'Seus eventos']} />
        <Content>
          {events.map(event => <Card key={event.id} data={event} />)}
        </Content>
    </Container>
  );
};

export default Student