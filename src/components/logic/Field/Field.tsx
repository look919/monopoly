import React from 'react';
import { twMerge } from 'tailwind-merge';
import { GameField } from '@logic/fields.types';
import { CornerField } from './CornerField';
import { FieldIcon } from './FieldIcon';
import { Name } from './Name';
import { Ownership } from './Ownership';
import { Value } from './Value';
import './field.css';

type Props = GameField & {
  ownership: 'PLAYER_1' | 'PLAYER_2' | 'NONE' | null;
};

export const Field = ({ id, ownership, ...props }: Props) => {
  const isCornerField = id % 10 === 0;
  const fieldRotation = Boolean(id > 10 && id < 20) || Boolean(id > 30 && id < 40) ? 'HORIZONTAL' : 'VERTICAL';
  const horizontalRotationStyles = fieldRotation === 'HORIZONTAL' && '-rotate-90 translate-x-8';
  const randomValue = props.purchasable ? 360 + id * 10 : null;
  const invertBoxShadowForCertainFields = Boolean(id < 10 || id > 30) && 'field-shadow-inset';

  if (isCornerField && props.type === 'SPECIAL') {
    return <CornerField id={id} {...props} />;
  }

  return (
    <div
      className={twMerge(
        'field h-32 w-16 cursor-pointer border-y border-black',
        horizontalRotationStyles,
        invertBoxShadowForCertainFields,
      )}
      style={{ gridArea: props.stringId }}
    >
      <Ownership ownership={ownership} />
      <FieldIcon stringId={props.stringId} />
      <Name {...props} />
      <Value value={randomValue} {...props} />
    </div>
  );
};
