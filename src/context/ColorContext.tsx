import { createContext, useContext, useState, ReactNode } from 'react';

type ColorContextType = {
  color: string;
  setColor: (color: string) => void;
  recentColors: string[];
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
  const [recentColors, setRecentColors] = useState<string[]>([
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
  ]);

  const setColor = (newColor: string) => {
    setColorState(newColor);

    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== newColor); // remove if already exists
      const updated = [newColor, ...filtered]; // add to front
      return updated.slice(0, 4);
    });
  };

  return (
    <ColorContext.Provider value={{ color, setColor, recentColors }}>
      {children}
    </ColorContext.Provider>
  );
};
