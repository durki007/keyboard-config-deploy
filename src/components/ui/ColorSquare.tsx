import { Button } from '@/components/ui/button.tsx';
import React, { useMemo } from 'react';
import { useColor } from '@/context/ColorContext.tsx';

interface ColorSquareProps {
  value: string;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ value }) => {
  const parsedValue = useMemo(() => {
    return value || '#FFFFFF';
  }, [value]);

  const { setColor } = useColor();

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
