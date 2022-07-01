import styled from 'styled-components';

interface WrapperProps {
  haveBGColor?: boolean;
  howManyToSpan?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #011251;
  width: ${({ howManyToSpan }) => (howManyToSpan ? howManyToSpan * 75 : 75)}px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  background-color: ${({ haveBGColor }) => (haveBGColor ? '#011251' : null)};
  color: ${({ haveBGColor }) => (haveBGColor ? 'white' : 'black')};
  grid-column: ${({ howManyToSpan }) =>
    howManyToSpan ? `span ${howManyToSpan}` : null};
  cursor: pointer;
`;
