import { createContext, useContext, useState, ReactNode } from 'react';

type ColorContextType = {
  color: string;
  setColor: (color: string) => void;
  recentColors: string[];
  backlightColor: string;
  setBacklightColors: (color: string) => void;
  recentBacklightColors: string[];
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColorState] = useState('#ffffff');
  const [backlightColor, setBacklightColorState] = useState('#b52929');
  const [recentBacklightColors, setRecentBacklightColors] = useState<string[]>([
    '#4c2897',
    '#069a68',
    '#4e5b7c',
    '#871212',
  ]);
  const [recentColors, setRecentColors] = useState<string[]>([
    '#4c2897',
    '#069a68',
    '#4e5b7c',
    '#871212',
  ]);

  const setColor = (newColor: string) => {
    setColorState(newColor);

    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== newColor); // remove if already exists
      const updated = [newColor, ...filtered]; // add to front
      return updated.slice(0, 4);
    });
  };

  const setBacklightColors = (newColor: string) => {
    setBacklightColorState(newColor);

    setRecentBacklightColors((prev) => {
      const filtered = prev.filter((c) => c !== newColor); // remove if already exists
      const updated = [newColor, ...filtered]; // add to front
      return updated.slice(0, 4);
    });
  };

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
        recentColors,
        backlightColor,
        setBacklightColors,
        recentBacklightColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
