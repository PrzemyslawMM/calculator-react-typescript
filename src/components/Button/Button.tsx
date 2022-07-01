import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './Button.style';
import { ContextProvider, useStateContext } from '../context/ContextProvider';

interface ButtonProps {
  text: string;
  haveBGColor?: boolean;
  span?: number;
}

const Button: React.FC<ButtonProps> = ({ text, haveBGColor, span }) => {
  const [value, setValue] = useState(text);

  return (
    <Wrapper haveBGColor={haveBGColor} howManyToSpan={span}>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Button;
