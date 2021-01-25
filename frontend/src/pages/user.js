import { useCallback, useEffect, useState } from 'react';
import { Container, Content, Text } from '../styles/User';

import Tab from '../components/Tab';
import Card from '../components/Card';
import api from '../api';
import { useToast } from '../hooks/toast';
import { useAuth } from '../hooks/auth';

const Student = () => {
  const { token, user } = useAuth()
  const { addToast } = useToast();
  const [owners, setOwners] = useState([]);
  const [subscribeds, setSubscribeds] = useState([]);
  const [tab, setTab] = useState(0)

  const handleChangeTab = useCallback((index) => {
    setTab(index)
  }, [tab]);
  
  const handleUnsubscribeEvent = useCallback(async (event_id, user_id, owner_id) => {
    try {
      await api.delete(`/registers?event_id=${event_id}&user_id=${user_id}&owner_id=${owner_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setSubscribeds(subscribeds.filter(e => e.id !== event_id))
      addToast({
        type: 'success',
        title: 'Sua inscrição foi cancelada com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao desinscrever do evento',
      });
      console.log(err)
    }
  }, [subscribeds, token]);

  const handleDeleteEvent = useCallback(async (event_id) => {
    try {
      await api.delete(`/events/${event_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setOwners(owners.filter(e => e.id !== event_id))
      addToast({
        type: 'success',
        title: 'Evento deletado com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao deletar o evento',
      });
      console.log(err)
    }
  }, [owners, token]);
  
  useEffect(async () => {
    try {
      if (tab === 1) {
        const response = await api.get(`/events`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOwners(response.data.filter(e => e.owner_id === user.id));
      } else {
        const response = await api.get(`/events/${user.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setSubscribeds(response.data);
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar os eventos',
      });
      console.log(err)
    }
  }, [tab]);

  return (
    <Container>
        <Tab options={['Eventos inscritos', 'Seus eventos']} tab={tab} onChange={(index) => handleChangeTab(index)} />
        <Content>
          {tab === 1 ? (
            owners && !owners.length ? (
              <Text>Nenhum evento encontrado!</Text>
            ) : (
              owners.map(event => (
                <Card key={event.id} data={event} status="owner" onClick={(event_id) => handleDeleteEvent(event_id)} />
              ))
            )
          ) : (
            subscribeds && !subscribeds.length ? (
              <Text>Nenhum evento encontrado!</Text>
            ) : (
              subscribeds.map(event => (
                <Card key={event.id} data={event} status="subscribed" onClick={(event_id, user_id, owner_id) => handleUnsubscribeEvent(event_id, user_id, owner_id)} />
              ))
            )
          )}
        </Content>
    </Container>
  );
};

export default Student