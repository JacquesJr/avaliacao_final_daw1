import { useCallback } from 'react';
import { useRouter } from 'next/router'
import { Form } from '@unform/web';
import { compareDesc, formatISO } from 'date-fns';

import api from '../api';
import { maskDate } from '../utils';
import { Container } from '../styles/Register';
import { FiBook, FiCalendar, FiDollarSign, FiMapPin, FiTag, FiCheckCircle } from 'react-icons/fi';
import Input from '../components/Input';
import InputMask from '../components/InputMask';
import Button from '../components/Button';
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';

const Home = () => {
  const { token, user } = useAuth()
  const { addToast } = useToast();
  const history = useRouter();
  const handleSubmit = useCallback(async ({ name, address, campus, inicialDate, finalDate, value }) => {
    const inicial = inicialDate.split('/').reverse().join();
    const final = finalDate.split('/').reverse().join();
    const compareDates = compareDesc(new Date(inicial), new Date(final))

    if (compareDates < 0) {
      addToast({
        type: 'error',
        title: 'Datas inicial maior que data final',
      });
    } else {
      try {
        await api.post('/events', {
          name,
          address,
          campus,
          inicialDate: formatISO(new Date(inicial)),
          finalDate: formatISO(new Date(final)),
          owner_id: user.id,
          value
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        history.push('/home')  
        addToast({
          type: 'success',
          title: 'Evento adicionado com sucesso',
        });      
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao adicionar o evento',
        });  
        console.log(err)
      }
    }
  }, [user, token]);

  return (
    <Container>
      <h1>Preencha os dados do evento</h1>
      <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome do evento" icon={FiTag} />
          <Input name="address" placeholder="Endereço do evento" icon={FiMapPin} />
          <Input name="campus" placeholder="Campus" icon={FiBook} />
          <InputMask name="inicialDate" placeholder="Data inicial"icon={FiCalendar} mask="99/99/9999" />
          <InputMask name="finalDate" placeholder="Data final" icon={FiCalendar} mask="99/99/9999" />
          <Input name="value" placeholder="Valor" icon={FiDollarSign} />
          <Button type="submit">
            <FiCheckCircle size={21} />
            Cadastrar evento
          </Button>
      </Form>
    </Container>
  )
}

export default Home;