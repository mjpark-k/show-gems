type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyle = 'px-6 py-3 rounded-lg border-white border';

  const variantStyle = {
    primary: {
      enabled: 'bg-black text-white hover:bg-gray-800',
      disabled: 'bg-black text-white',
    },
    secondary: {
      enabled: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      disabled: 'bg-gray-100 text-gray-400',
    },
    ghost: {
      enabled: 'bg-transparent text-gray-900 hover:bg-gray-100',
      disabled: 'bg-transparent text-gray-400',
    },
  };

  const stateStyle = disabled
    ? variantStyle[variant].disabled
    : variantStyle[variant].enabled;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${stateStyle} ${
        disabled ? 'opacity-50' : 'cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
}
