import React from 'react';
import { Wrapper } from './App.style';
import Screen from './components/Screen/Screen';
import Button from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div>
      <Screen />
      <Wrapper>
        <Button text="clear" span={3} />
        <Button text="÷" haveBGColor />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="-" haveBGColor />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="+" haveBGColor />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="=" haveBGColor />
      </Wrapper>
    </div>
  );
};

export default App;
