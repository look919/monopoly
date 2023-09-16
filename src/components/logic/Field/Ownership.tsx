import React from 'react';
import { twMerge } from 'tailwind-merge';
import { isNull } from 'utils/guards';

type Props = {
  ownership: 'PLAYER_1' | 'PLAYER_2' | 'NONE' | null;
};

export const Ownership = ({ ownership }: Props) => {
  if (isNull(ownership)) {
    return null;
  }

  const mapOwnershipToGivenColor = {
    PLAYER_1: 'bg-red-600',
    PLAYER_2: 'bg-blue-600',
    NONE: 'bg-slate-600',
  };

  return <div className={twMerge('mx-[1px] h-6 w-full border-r border-black', mapOwnershipToGivenColor[ownership])} />;
};
