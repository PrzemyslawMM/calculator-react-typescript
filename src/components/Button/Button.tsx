import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  haveBGColor?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #011251;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  background-color: ${({ haveBGColor }) => (haveBGColor ? '#011251' : null)};
  color: ${({ haveBGColor }) => (haveBGColor ? 'white' : 'black')};
`;

interface ButtonProps {
  text: string;
  haveBGColor?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, haveBGColor = false }) => {
  return (
    <Wrapper haveBGColor={haveBGColor}>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Button;
