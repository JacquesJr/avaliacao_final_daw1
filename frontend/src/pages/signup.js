import Link from 'next/link';
import { Form } from '@unform/web';
import { FiArrowLeft, FiBriefcase, FiCheckCircle, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from '../styles/SignUp';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = () => {
  return (
    <Container>
      <Content>
        <Form onSubmit={(data) => console.log(data)}>
          <h1>Faça seu cadastro</h1>

          <Input name="cpf" icon={FiUser} placeholder="CPF" />

          <Input
            name="role"
            icon={FiBriefcase}
            type="role"
            placeholder="Cargo (Professor ou Aluno)"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">
            <FiCheckCircle size={21} />
            Cadastrar
          </Button>
          
          <Link href="/">
            <a>
              <FiArrowLeft />
              Voltar
            </a>
          </Link>
        </Form>
      </Content>
      <Background />
    </Container>
  )
}

export default SignUp;