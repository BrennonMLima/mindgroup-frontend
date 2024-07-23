import React from 'react';
import { InputStyles } from './input.styles';

interface InputProps {
  type?: 'text' | 'image' | 'number' | 'password' | 'date';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, className, value, onChange }) => {
  switch (type) {
    case 'text':
      return (
        <InputStyles
          type="text"
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'password':
      return (
        <InputStyles
          type="password"
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'number':
      return (
        <InputStyles
          type="text"
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'date':
      return (
        <InputStyles
          type="date"
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
        />
      );
    default:
      return <InputStyles type="text" placeholder={placeholder} className={className} value={value as string} onChange={onChange} />;
  }
};

export default Input;
