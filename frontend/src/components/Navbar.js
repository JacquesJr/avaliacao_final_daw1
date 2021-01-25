import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiClipboard, FiPlus, FiPower, FiUser } from 'react-icons/fi';

import { Container, Option, Text, ImageLogo } from '../styles/components/Navbar';
import IF from '../assets/IF.svg';
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';
import { useCallback } from 'react';

const Navbar = () => {
  const history = useRouter();
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const { user } = useAuth()

  const handleSignOut = useCallback(() => {
    history.push('/');
    signOut()
    addToast({
      type: 'success',
      title: 'Deslogado com sucesso',
    });
  }, [signOut, addToast]);

  return (
    <Container>
      <Link href="/home">
        <ImageLogo>
          <IF />
        </ImageLogo>
      </Link>
      <Link href="/user">
        <Option>
          <FiUser size="1.8em" strokeWidth="0.833333" />
          <Text>{user && user.name ? user.name.split(' ')[0] : ''}</Text>
        </Option>
      </Link>
      <Link href="/register">
        <Option>
          <FiPlus size="1.8em" strokeWidth="0.833333" />
          <Text>Adicionar</Text>
        </Option>
      </Link>
      <Link href="/home">
        <Option>
          <FiClipboard size="1.8em" strokeWidth="0.833333" />
          <Text>Eventos</Text>
        </Option>
      </Link>
      <Option onClick={handleSignOut}>
        <FiPower size="1.8em" strokeWidth="0.833333" />
        <Text>Sair</Text>
      </Option>
    </Container>
  )
}

export default Navbar;