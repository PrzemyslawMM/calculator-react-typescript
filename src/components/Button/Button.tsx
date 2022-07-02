import React from 'react';
import { Wrapper } from './Button.style';
import { useStateContext } from '../context/ContextProvider';

interface ButtonProps {
  text: string;
  haveBGColor?: boolean;
  span?: number;
}

const Button: React.FC<ButtonProps> = ({ text, haveBGColor, span }) => {
  const {
    changeDigit,
    firstNumber,
    secondNumber,
    setChangeDigit,
    setFirstNumber,
    setSecondNumber,
    value,
    setChar,
    char,
    doResult,
    reset,
  } = useStateContext();

  const handleClick = () => {
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (!changeDigit) {
          setFirstNumber(() => firstNumber + text);
        } else {
          setSecondNumber(() => secondNumber + text);
        }
        break;
      case '-':
      case '+':
      case '÷':
        if (value !== '0' && char === '') {
          setChangeDigit(true);
          setChar(text);
        }
        break;
      case '=':
        doResult();
        break;
      case 'clear':
        reset();
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper
      onClick={handleClick}
      haveBGColor={haveBGColor}
      howManyToSpan={span}
    >
      <p>{text}</p>
    </Wrapper>
  );
};

export default Button;
