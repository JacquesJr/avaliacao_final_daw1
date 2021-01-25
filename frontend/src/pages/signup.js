import Link from 'next/link';
import { Form } from '@unform/web';
import { FiArrowLeft, FiAward, FiBriefcase, FiCheckCircle, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from '../styles/SignUp';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../api';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/toast';

const SignUp = () => {
  const history = useRouter();
  const { addToast } = useToast();
  const handleSubmit = useCallback(async ({ name, cpf, password }) => {
    try {
      const response = await api.post('/users', {
        name,
        cpf,
        password
      })    
      if (response) {
        history.push('/')
        addToast({
          type: 'success',
          title: 'Usuario cadastrado com sucesso',
        });
        console.log(response)
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao cadastrar o usuário',
      });
      console.log(err)
    }
  }, [])

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="cpf" icon={FiAward} placeholder="CPF" />

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