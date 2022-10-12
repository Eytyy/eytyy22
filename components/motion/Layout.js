import React from 'react';
import LabLayout from '@components/lab/Layout';
import MotionHeader from './Header';

export default function MotionLayout({ children }) {
  return (
    <LabLayout>
      <MotionHeader />
      {children}
    </LabLayout>
  );
}
