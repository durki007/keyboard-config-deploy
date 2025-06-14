import React from 'react';
import ColorSquare from '@/components/ui/ColorSquare.tsx';

interface ColorPalletProps {
  colorList: string[];
}

const ColorPallet: React.FC<ColorPalletProps> = ({ colorList }) => {
  return (
    <div className="space-y-1 flex row space-x-4">
      {colorList.map((color, index) => (
        <ColorSquare key={index} value={color} />
      ))}
    </div>
  );
};

export default ColorPallet;
