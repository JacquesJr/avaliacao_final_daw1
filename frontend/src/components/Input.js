import { useEffect, useRef } from 'react';
import { Container } from '../styles/components/Input';
import { useField } from '@unform/core';

const Input = ({ label, name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={21} color="#3FA14C" strokeWidth="0.9" />}
      <input type="text" defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input;