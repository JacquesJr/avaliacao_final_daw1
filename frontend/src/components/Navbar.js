import { FiClipboard, FiPlus, FiUser } from 'react-icons/fi';

<<<<<<< HEAD
import { Container, Option, Text, ImageLogo } from '../styles/Navbar';
=======
import { Container, Option, Text, ImageLogo } from '../styles/components/Navbar';
>>>>>>> b85bc1f949fc11d2c3634e228731576edeec2222
import IF from '../assets/IF.svg';

const Navbar = () => {
  return (
    <Container>
      <ImageLogo>
        <IF />
      </ImageLogo>
      <Option>
        <FiUser size="1.8em" strokeWidth="0.833333" />
        <Text>Márcio</Text>
      </Option>
      <Option>
        <FiPlus size="1.8em" strokeWidth="0.833333" />
        <Text>Adicionar</Text>
      </Option>
      <Option>
        <FiClipboard size="1.8em" strokeWidth="0.833333" />
        <Text>Eventos</Text>
      </Option>
    </Container>
  )
}

export default Navbar;