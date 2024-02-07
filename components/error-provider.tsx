'use client';
import { Toaster } from 'react-hot-toast';

export const ErrorProvider = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
