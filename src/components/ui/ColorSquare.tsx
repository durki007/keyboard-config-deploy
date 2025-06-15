import { Button } from '@/components/ui/button.tsx';
import React, { useMemo } from 'react';

interface ColorSquareProps {
  value: string;
  setColor: (color: string) => void;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ value, setColor }) => {
  const parsedValue = useMemo(() => {
    return value || '#FFFFFF';
  }, [value]);

  return (
    <Button
      onClick={() => {
        setColor(parsedValue);
      }}
      size="icon"
      style={{
        backgroundColor: parsedValue,
      }}
      variant="outline"
    >
      <div />
    </Button>
  );
};

export default ColorSquare;
