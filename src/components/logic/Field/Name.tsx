import React from 'react';
import { twMerge } from 'tailwind-merge';
import { GameField } from '@logic/fields.types';

type Props = {
  type: GameField['type'];
  name: string;
};

export const Name = ({ type, name }: Props) => {
  const nameFontSize = name.length > 6 ? 'text-xs' : 'text-sm';

  if (type === 'SPECIAL') {
    return null;
  }

  return <span className={twMerge('mb-auto mt-1 font-semibold text-white', nameFontSize)}>{name}</span>;
};
