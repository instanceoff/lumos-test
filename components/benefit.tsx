import Image from 'next/image';
import React from 'react';
import ContentIcon from '../public/content.svg';
import SpeedIcon from '../public/speed.svg';
import LocationIcon from '../public/locationBenefit.svg';
import BypassIcon from '../public/bypass.svg';
import Divider from './divider';

const data = {
  content: {
    title: 'Unlimited access to content',
    description: `Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!`,
    icon: ContentIcon,
  },
  speed: {
    title: 'Flashing connecting speed',
    description:
      'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!',
    icon: SpeedIcon,
  },
  location: {
    title: 'Hide your location',
    description:
      'Get your own unique IP for added security and access to restricted sites, apps, and services!',
    icon: LocationIcon,
  },
  bypass: {
    title: 'Bypass blocked sites',
    description: 'Access any website safely and anonymously!',
    icon: BypassIcon,
  },
};

interface BenefitProps {
  type: keyof typeof data;
}

const Benefit: React.FC<BenefitProps> = ({ type }) => {
  const { title, description, icon } = data[type];
  const [firstWord, ...restTitle] = title.toLocaleUpperCase().split(' ');

  return (
    <>
      <div className='flex flex-col '>
        <Divider />
        <div className='flex px-4 flex-col items-center my-4 h-full'>
          <Image src={icon} alt={'Icon'} width={104} height={104} />
          <h3 className='text-titleOne font-bold mb-2 mt-4 text-app-blue text-center capitalize'>
            <span className='text-app-orange'>{firstWord}</span> <br />
            {restTitle.join(' ')}
          </h3>
          <p className='text-subtitle font-semibold text-center text-app-grey'>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Benefit;
