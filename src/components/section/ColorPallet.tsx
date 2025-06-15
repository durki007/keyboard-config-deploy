import React from 'react';
import ColorSquare from '@/components/ui/ColorSquare.tsx';

interface ColorPalletProps {
  colorList: string[];
  setColor: (color: string) => void;
}

const ColorPallet: React.FC<ColorPalletProps> = ({ colorList, setColor }) => {
  return (
    <div className="space-y-1 flex row space-x-4">
      {colorList.map((color, index) => (
        <ColorSquare key={index} value={color} setColor={setColor} />
      ))}
    </div>
  );
};

export default ColorPallet;
