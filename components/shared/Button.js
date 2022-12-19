import { cva } from 'class-variance-authority';

const buttonClass = cva('text-white py-4 mt-7', {
  variants: {
    variant: {
      primary: 'bg-[#14519A]',
      secondary: 'border-[#14519A] border text-blue-600',
    },
    size: {
      sm: ' w-[120px] text-center',
      md: ' w-[180px] text-center',
      lg: ' w-[250px] text-center',
      xl: ' w-[300px] text-center',
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
