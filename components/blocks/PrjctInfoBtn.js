import React from 'react';
import { BsX, BsQuestion } from 'react-icons/bs';
import BtnBlock from './BtnBlock';

export default function PrjctInfoBtn({
  title,
  active,
  freeze,
  onClick,
}) {
  function Icon() {
    if (active) {
      return <BsX />;
    }
    return <BsQuestion />;
  }
  return (
    <BtnBlock
      onClick={onClick}
      freeze={freeze}
      bg="blue"
      color="white"
      speed={0.3}
      sticky={true}
      title={title}
      Icon={Icon}
    />
  );
}
