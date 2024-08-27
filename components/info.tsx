import Image from 'next/image';
import HierarchyIcon from '../public/hierarchy-square-2.svg';
import LocationIcon from '../public/location.svg';

const Info = () => {
  return (
    <div className='px-4 w-full max-w-4xl mx-auto'>
      <div className='w-full  rounded-2xl shadow-app py-[15px] px-[42px] '>
        <div className='flex justify-between items-center max-w-md mx-auto'>
          <div className='flex items-center gap-[10px]'>
            <Image src={LocationIcon} alt={'Location Icon'} />
            <div>
              <span className='text-titleTwo text-app-black font-bold'>
                50+
              </span>
              <p className='text-capture text-app-grey'>Locations</p>
            </div>
          </div>
          <div className='bg-app-grey w-[1px] h-8'></div>
          <div className='flex items-center gap-[10px]'>
            <Image src={HierarchyIcon} alt={'Hierarchy Icon'} />
            <div>
              <span className='text-titleTwo text-app-black font-bold'>
                1000+
              </span>
              <p className='text-capture text-app-grey'>Servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
