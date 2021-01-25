import { useCallback, useState } from 'react';
import { Container, Option } from '../styles/components/Tab';

const Tab = ({ options, children, tab, onChange }) => {
  return (
    <Container>
      {options && options.length && options.map((option, index) => (
        <Option
          key={option}
          isActive={tab === index}
          onClick={() => onChange(index)}
        >
          <span>{option}</span>
        </Option>
      ))}
    </Container>
  );
};

export default Tab;