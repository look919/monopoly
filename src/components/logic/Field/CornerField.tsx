import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SpecialField } from '@logic/fields.types';
import { FieldIcon } from './FieldIcon';

type Props = SpecialField;

export const CornerField = (props: Props) => {
  return (
    <div
      className='flex h-32 w-32 cursor-pointer flex-col items-center justify-center border border-black'
      style={{ gridArea: props.stringId }}
    >
      <FieldIcon {...props} />
      <span className={twMerge('font-lg mt-1 font-bold text-white')}>{props.name}</span>
    </div>
  );
};
