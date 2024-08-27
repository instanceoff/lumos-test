import Image from 'next/image';
import MainImage from '../public/Image.svg';
import Button from '@/components/button';
import Trusted from '@/components/trusted';
import Info from '@/components/info';
import Benefit from '@/components/benefit';
import ChooseName from '@/components/choose-name';
import { getUsers } from '@/utils/requests';
import Modal from '@/components/modal';
import Divider from '@/components/divider';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const users = await getUsers();
  const userName = searchParams?.userName;

  return (
    <>
      <main
        id='main'
        className={`flex bg-white min-h-screen max-w-4xl mx-auto flex-col items-center ${
          userName && 'hidden'
        }`}
      >
        <section className='flex flex-col items-center w-full mb-6 mt-[75px]'>
          <h1 className='text-app-black text-center font-bold text-large'>
            Acces{' '}
            <span className='text-app-blue'>
              everything <br /> securely
            </span>{' '}
            with <br /> VPN
          </h1>
          <div className='mb-4 relative w-full h-[230px] max-w-[600px]'>
            <Image
              objectFit='cover'
              layout='fill'
              src={MainImage}
              alt='image'
            />
          </div>
          <a href='#choose-name'>
            <Button value='Get VPN' />
          </a>
        </section>
        <section className='w-full flex flex-col items-center gap-6 mb-10 md:mb-[72px]'>
          <Trusted />
          <Info />
          <p className='text-body  text-app-grey font-medium text-center'>
            VPN-your <span className='text-app-blue'>ultimate</span> solution
            for a private and secure online experience!
          </p>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 '>
          <Benefit type='content' />
          <Benefit type='speed' />
          <Benefit type='location' />
          <Benefit type='bypass' />
          <Divider />
          <div className='hidden md:block'>
            <Divider />
          </div>
        </section>
        <h3 className='text-titleTwo text-app-blue font-bold mt-6 mb-10 md:mb-[72px]'>
          Millions of people trust us!
        </h3>
        <section className='w-full' id='choose-name'>
          <ChooseName users={users} />
        </section>
      </main>
      {userName && <Modal userName={userName} />}
    </>
  );
}
