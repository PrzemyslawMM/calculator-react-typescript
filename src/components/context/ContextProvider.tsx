/* eslint-disable radix */
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

type Chars = '+' | '-' | '*' | '÷';

const useProviderSettings = () => {
  const [changeDigit, setChangeDigit] = useState(false);
  const [end, setEnd] = useState(false);
  const [char, setChar] = useState<Chars>('' as Chars);
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [value, setValue] = useState('0');
  const [result, setResult] = useState('');

  const doResult = () => {
    const method: Chars = char;
    switch (method) {
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
        throw new Error(
          'Using default value in switch in doResult (ContextProvider.tsx)'
        );
    }
    setEnd(true);
  };

  const reset = () => {
    setChangeDigit(false);
    setChar('' as Chars);
    setFirstNumber('');
    setSecondNumber('');
    setValue('0');
    setResult('');
    setEnd(false);
  };

  useEffect(() => {
    if (firstNumber === '') return;
    if (result === '') {
      setValue(() => firstNumber + char + secondNumber);
      return;
    }
    setValue(() => `${firstNumber + char + secondNumber}=${result}`);
  }, [firstNumber, secondNumber, char, result]);

  return {
    doResult,
    reset,
    changeDigit,
    setChangeDigit,
    end,
    setEnd,
    char,
    setChar,
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    value,
    setValue,
    result,
  };
};

type StateContextData = ReturnType<typeof useProviderSettings>;

const StateContext = createContext<StateContextData | null>(null);
export const ContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const values = useProviderSettings();

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
