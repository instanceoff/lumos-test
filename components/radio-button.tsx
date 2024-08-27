import Image from 'next/image';
import CheckedIcon from '../public/Subtract.svg';

interface RadioButtonProps {
  id: string;
  value: string;
  defaultChecked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  defaultChecked,
}) => {
  return (
    <div className='flex pointer-events-auto peer gap-2 items-center px-[10px] py-8 shadow-app rounded-2xl'>
      <input
        name='name'
        className='peer relative appearance-none cursor-pointer shrink-0 w-6 h-6 border-2 checked:border-0 border-app-grey rounded-full'
        type='radio'
        id={id}
        value={value}
        defaultChecked={defaultChecked}
      />
      <Image
        className='absolute pointer-events-none w-6 h-6 hidden peer-checked:block  rounded-full'
        src={CheckedIcon}
        alt={'Checked Icon'}
      />
      <label
        htmlFor={id}
        className='text-subtitle text-app-black font-semibold'
      >
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
