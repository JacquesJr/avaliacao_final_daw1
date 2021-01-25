import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../hooks/auth';
import api from '../api';
import { Container, Content, Text } from '../styles/Home';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { useToast } from '../hooks/toast';
import { filter } from '../utils';

const Home = () => {
  const { token } = useAuth()
  const { addToast } = useToast();
  const [filtered, setFiltered] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.get('/events', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });  
      setEvents(data)
      setFiltered(data)
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar os eventos',
      });
      console.log(err)
    }
  }, []);

  const handleParticipateEvent = useCallback(async (event_id, user_id, owner_id) => {
    try {
      await api.post('/registers', {
        event_id,
        user_id,
        owner_id,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      addToast({
        type: 'success',
        title: 'Sua inscrição foi feita com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao participar do evento',
      });
      console.log(err)
    }
  }, [token]);

  return (
    <Container>
      <SearchBar onChange={(input) => setFiltered(filter(events, input))} />
      <Content>
        {filtered && !filtered.length ? (
          <Text>Nenhum evento encontrado!</Text>
        ) : (
          filtered.map(event => 
            <Card
              key={event.id}
              data={event}
              onClick={(event_id, user_id, owner_id) => handleParticipateEvent(event_id, user_id, owner_id)}
            />
          )
        )}
      </Content>
    </Container>
  )
}

export default Home;