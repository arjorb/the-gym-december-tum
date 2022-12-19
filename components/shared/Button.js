import { cva } from 'class-variance-authority';

const buttonClass = cva('text-white py-4 mt-7', {
  variants: {
    variant: {
      primary: 'bg-[#14519A]',
    },
    size: {
      sm: ' w-[120px] text-center',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const Button = ({ children, variant, size }) => {
  return <div className={buttonClass({ variant, size })}>{children}</div>;
};

export default Button;
