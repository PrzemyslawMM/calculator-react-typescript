import React from 'react';
import { Wrapper } from './Screen.style';
import { useStateContext } from '../context/ContextProvider';

const Screen: React.FC = () => {
  const { value } = useStateContext();

  return (
    <Wrapper>
      <p>{value}</p>
    </Wrapper>
  );
};

export default Screen;
