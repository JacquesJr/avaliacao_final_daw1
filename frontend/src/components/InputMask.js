import { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';

import { Container } from '../styles/components/Input';

const InputMask = ({ label, name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {Icon && <Icon size={21} color="#3FA14C" strokeWidth="0.9" />}
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default InputMask;