import { Container } from '../styles/Register';
import { FiBook, FiCalendar, FiDollarSign, FiMapPin, FiTag, FiCheckCircle } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../components/Input';
import Button from '../components/Button';

const Home = () => {
  return (
    <Container>
      <h1>Preencha os dados do evento</h1>
      <Form onSubmit={(data) => {console.log({data})}}>
          <Input name="name" placeholder="Nome do evento" icon={FiTag} />
          <Input name="address" placeholder="Endereço do evento" icon={FiMapPin} />
          <Input name="campus" placeholder="Campus" icon={FiBook} />
          <Input name="inicialDate" placeholder="Data inicial" icon={FiCalendar} />
          <Input name="finalDate" placeholder="Data final" icon={FiCalendar} />
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