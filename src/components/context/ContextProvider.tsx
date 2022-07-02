/* eslint-disable radix */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface StateContextProviderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setChangeDigit: React.Dispatch<React.SetStateAction<boolean>>;
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>;
  changeDigit: boolean;
  firstNumber: string;
  secondNumber: string;
  setChar: React.Dispatch<React.SetStateAction<string>>;
  char: string;
  doResult: () => void;
  reset: () => void;
}

// @ts-ignore
const StateContext = createContext<StateContextProviderProps>();

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // public
  const [changeDigit, setChangeDigit] = useState(false);
  const [char, setChar] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [value, setValue] = useState('0');

  // private
  const [result, setResult] = useState('');

  useEffect(() => {
    if (firstNumber === '') return;
    if (result === '') {
      setValue(() => firstNumber + char + secondNumber);
      return;
    }
    setValue(() => `${firstNumber + char + secondNumber}=${result}`);
  }, [firstNumber, secondNumber, char, result]);

  const doResult = () => {
    switch (char) {
      case '+':
        setResult(() =>
          (parseInt(firstNumber) + parseInt(secondNumber)).toString()
        );
        break;
      case '-':
        setResult(() =>
          (parseInt(firstNumber) - parseInt(secondNumber)).toString()
        );
        break;
      case '*':
        setResult(() =>
          (parseInt(firstNumber) * parseInt(secondNumber)).toString()
        );
        break;
      case '÷':
        setResult(() =>
          (parseInt(firstNumber) / parseInt(secondNumber)).toFixed(2)
        );
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setChangeDigit(false);
    setChar('');
    setFirstNumber('');
    setSecondNumber('');
    setValue('0');
    setResult('');
  };

  const memorizedValue = useMemo(
    () => ({
      value,
      setValue,
      setChangeDigit,
      setFirstNumber,
      setSecondNumber,
      changeDigit,
      firstNumber,
      secondNumber,
      setChar,
      char,
      doResult,
      reset,
    }),
    [
      value,
      setValue,
      setSecondNumber,
      setFirstNumber,
      setChangeDigit,
      changeDigit,
      firstNumber,
      secondNumber,
      setChar,
      char,
      doResult,
      reset,
    ]
  );

  return (
    <StateContext.Provider value={memorizedValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
