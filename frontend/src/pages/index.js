import Link from 'next/link';
import { Form } from '@unform/web';
import { FiAward, FiCheckCircle, FiLock, FiLogIn } from 'react-icons/fi';

import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';
import { Container, Content, Background } from '../styles/Login';
import Input from '../components/Input';
import Button from '../components/Button';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const history = useRouter();
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const handleSubmit = useCallback(async ({ cpf, password }) => {
    try {
      await signIn({
        cpf,
        password,
      });     
      history.push('/home')
      addToast({
        type: 'success',
        title: 'Login efetuado com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao fazer o login',
      });
      console.log(err)
    }
  }, [signIn])

  return (
    <Container>
      <Background />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="cpf" icon={FiAward} placeholder="CPF" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">
            <FiCheckCircle size={21} />
            Entrar
          </Button>
          
          <Link href="/signup">
            <a>
              <FiLogIn />
              Criar Conta
            </a>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default Home;