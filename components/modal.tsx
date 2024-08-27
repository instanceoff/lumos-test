import Button from './button';
import LockIcon from '../public/lock.svg';
import Cross from '../public/cross.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SendToConsole } from '@/utils/actions';
interface ModalProps {
  userName: string;
}

const Modal: React.FC<ModalProps> = ({ userName }) => {
  return (
    <div className='flex bg-white w-full h-full z-10 absolute flex-col gap-8 px-4 mb-10'>
      <form action={SendToConsole} className='max-w-4xl mx-auto'>
        <div className='flex w-full flex-end'>
          <Link
            className='ml-auto cursor-pointer text-app-grey opacity-50'
            href={'/'}
          >
            <Image src={Cross} alt={'Cross Icon'} />
          </Link>
        </div>
        <div className='flex flex-col gap-8 mb-10'>
          <h2 className='text-titleOne font-bold text-app-black'>YOUR NAME</h2>
          <h5 className='text-body font-medium text-app-black'>{userName}</h5>
          <div className='flex flex-col gap-2'>
            <input
              name='email'
              type='email'
              className='w-full p-4 border-[1px] border-app-grey rounded-2xl text-app-black'
              placeholder='Enter your email'
              required
            />
            <div className='flex gap-2 items-center'>
              <Image src={LockIcon} alt={'Lock Icon'} />
              <p className='text-footnote opacity-50 text-app-grey font-medium w-full'>
                Your information is 100% secure. We don’t share your personal
                information.
              </p>
            </div>
          </div>
        </div>
        <Button value={'Continue'} type='submit' responsive />
      </form>
    </div>
  );
};

export default Modal;
