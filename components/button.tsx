interface ButtonProps {
  value: string;
  type?: 'button' | 'submit';
  responsive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  value,
  type = 'button',
  responsive,
}) => {
  return (
    <>
      <input
        className={`w-96 cursor-pointer pointer-events-auto bg-app-orange rounded-2xl py-4 ${
          responsive && 'w-full'
        }`}
        type={type}
        name='getVpn'
        id='getVpn'
        value={value}
      />
    </>
  );
};

export default Button;
