import { useCallback, useState } from 'react';
import { Container, Option } from '../styles/components/Tab';

const Tab = ({ options }) => {
  const [isActive, setIsActive] = useState(0)

  const handleActiveTab = useCallback((index) => {
    setIsActive(index)
  }, []);

  return (
    <Container>
      {options && options.length && options.map((option, index) => (
        <Option
          key={option}
          isActive={isActive === index}
          onClick={() => handleActiveTab(index)}
        >
          <span>{option}</span>
        </Option>
      ))}
    </Container>
  );
};

export default Tab;