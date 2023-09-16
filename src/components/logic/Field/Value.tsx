import React from 'react';
import { twMerge } from 'tailwind-merge';
import { isNull } from 'utils/guards';
import { GameField, StringFieldId } from '@logic/fields.types';

type Props = {
  type: GameField['type'];
  stringId: StringFieldId;
  value: number | null;
};

const mapBorderBottomColor = (type: GameField['type'], stringId: StringFieldId) => {
  if (type === 'SPECIAL') {
    return null;
  }

  switch (true) {
    case stringId.startsWith('l1'): {
      return 'border-yellow-300';
    }
    case stringId.startsWith('l2'): {
      return 'border-cyan-300';
    }
    case stringId.startsWith('l3'): {
      return 'border-orange-400';
    }
    case stringId.startsWith('l4'): {
      return 'border-red-500';
    }
    case stringId.startsWith('l5'): {
      return 'border-green-700';
    }
    case stringId.startsWith('l6'): {
      return 'border-blue-700';
    }
    case stringId.startsWith('l7'): {
      return 'border-purple-900';
    }
    case stringId.startsWith('l8'): {
      return 'border-black';
    }
    case stringId.startsWith('rail'): {
      return 'border-gray-400';
    }
    case stringId.startsWith('dice'): {
      return 'border-pink-400';
    }
    default: {
      return null;
    }
  }
};

export const Value = ({ type, stringId, value }: Props) => {
  if (isNull(value)) {
    return null;
  }

  return (
    <div
      className={twMerge(
        'value mx-1 mb-0.5 w-14 rounded-2xl border-b-4 border-solid bg-slate-600',
        mapBorderBottomColor(type, stringId),
      )}
    >
      <span className='text-base'>
        {value}
        <span className='text-xs'>€</span>
      </span>
    </div>
  );
};
