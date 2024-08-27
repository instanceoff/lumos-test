import Image from 'next/image';
import logo from '../public/logo.svg';
const Header = () => {
  return (
    <div className='flex z-10 sticky top-0 justify-between p-4 items-center bg-white shadow-app'>
      <a href='#main' className='flex items-center'>
        <Image src={logo} alt='logo' />
        <div className='text-app-black font-semibold text-subtitle'>VPN</div>
      </a>

      <a href='#choose-name'>
        <input
          className='bg-app-blue active:bg-blue-700 cursor-pointer appearance-none py-[11px] px-6 font-semibold text-text leading-tight text-white rounded-full border-gray-200'
          type='button'
          name='headerButton'
          id='headerGetVpn'
          value='Get VPN'
        />
      </a>
    </div>
  );
};

export default Header;
