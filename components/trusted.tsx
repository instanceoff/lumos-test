import Image from 'next/image';
import LeftWing from '../public/left.png';
import RightWing from '../public/right.png';

interface TrustedProps {}

const Trusted: React.FC<TrustedProps> = () => {
  return (
    <>
      <div className='flex items-center gap-2'>
        <Image src={LeftWing} alt={'Left Wing'} />
        <p className='mb-1 text-capture text-center text-app-blue'>
          Trusted by <br />
          <span className='font-semibold'>50M+ Users</span>
        </p>
        <Image src={RightWing} alt={'Right wing'} />
      </div>
    </>
  );
};

export default Trusted;
