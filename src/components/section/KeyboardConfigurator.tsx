import React from 'react';
import V3DApp from '@/components/section/Verge3d.tsx';

const KeyboardConfigurator: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full p-6 bg-stone-900">
      <div className="flex justify-center items-center flex-grow p-4">
        <V3DApp />
      </div>
    </div>
  );
};

export default KeyboardConfigurator;
