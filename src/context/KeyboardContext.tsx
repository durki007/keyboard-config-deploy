import React, { createContext, ReactNode, useContext, useState } from 'react';
import { KeyboardModel } from '@/types/types.ts';

type KeyboardContextType = {
  colorPallet: string[];
  setColorPallet: React.Dispatch<React.SetStateAction<string[]>>;
  keyboardModel: KeyboardModel;
  setKeyboardModel: React.Dispatch<React.SetStateAction<KeyboardModel>>;
};

const KeyboardContext = createContext<KeyboardContextType | undefined>(
  undefined
);

export const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error('useKeyboard must be used within a KeyboardProvider');
  }
  return context;
};

export const KeyboardProvider = ({ children }: { children: ReactNode }) => {
  const [colorPallet, setColorPallet] = useState<string[]>([]);
  const [keyboardModel, setKeyboardModel] = useState<KeyboardModel>(
    KeyboardModel.hyperX
  );

  return (
    <KeyboardContext.Provider
      value={{ colorPallet, setColorPallet, keyboardModel, setKeyboardModel }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
