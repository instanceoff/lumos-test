import RadioButton from './radio-button';
import Button from './button';
import { User } from '../utils/requests';
import { OpenModal } from '@/utils/actions';
interface ChooseNameProps {
  users: User[];
}

const ChooseName: React.FC<ChooseNameProps> = ({ users }) => {
  return (
    <div className='w-full px-4 flex flex-col mb-9 max-w-4xl'>
      <h2 className='text-titleOne font-bold text-app-black mb-4'>
        CHOOSE <span className='text-app-blue'>YOUR NAME</span>
      </h2>

      <form action={OpenModal}>
        <div className='flex flex-col gap-4 mb-4'>
          {users.map(({ name }, i) => (
            <RadioButton
              key={`name-${i}`}
              id={`name-${i}`}
              value={name.first + ' ' + name.last}
              defaultChecked={i === 0}
            />
          ))}
        </div>
        <Button value='Get VPN' type='submit' responsive />
      </form>
    </div>
  );
};

export default ChooseName;
