import { useState } from 'react';
import Image from 'next/image';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`flex p-1 ${ isChecked?'bg-onBackgroundSecondary':'bg-toggleBackground'} justify-between items-center w-16 rounded-2xl`}>
      <div
        className={`rounded-full w-4 h-4 bg-white dark border border-onBackgroundSecondary  cursor-pointer transition-transform ${
          isChecked ? 'transform translate-x-8' : ''
        }`}
        onClick={toggleChecked}
      ></div>
      <Image
        src={isChecked ? "/images/moon.svg" : "/images/sun.svg"}
        width={0}
        height={0}
        alt={isChecked ? "moon" : "sun"}
        className={`w-auto h-auto transition-transform ${
          isChecked ? 'transform -translate-x-8' : ''}`}
      />
    </div>
  );
};

export default ToggleButton;
