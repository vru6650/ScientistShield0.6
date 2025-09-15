import { forwardRef } from 'react';

const base =
  'flex h-10 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-neutral ';

export const Input = forwardRef(({ className = '', ...props }, ref) => (
  <input ref={ref} className={`${base} ${className}`} {...props} />
));

Input.displayName = 'Input';
