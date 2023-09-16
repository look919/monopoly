import React from 'react';
import {
  QuestionMarkCircleIcon,
  TruckIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  ScaleIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  FingerPrintIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { StringFieldId } from '@logic/fields.types';

type Props = {
  stringId: StringFieldId;
};

// eslint-disable-next-line complexity
const getFieldIcon = (stringId: StringFieldId) => {
  switch (stringId) {
    case 'qm1':
    case 'qm5': {
      return <QuestionMarkCircleIcon className='icon-without-name fill-blue-800' />;
    }
    case 'qm2':
    case 'qm3':
    case 'qm4':
    case 'qm6': {
      return <QuestionMarkCircleIcon className='icon-without-name fill-red-600' />;
    }
    case 'rail1':
    case 'rail2':
    case 'rail3':
    case 'rail4': {
      return <PuzzlePieceIcon className='icon-with-name h-6 w-6 fill-white stroke-none' />;
    }
    case 'dice1': {
      return <ScaleIcon className='icon-with-name h-6 w-6 stroke-blue-300' />;
    }
    case 'dice2': {
      return <LightBulbIcon className='icon-with-name h-6 w-6 fill-yellow-400 stroke-black' />;
    }
    case 'duty1':
    case 'duty2':
    case 'duty3': {
      return <TruckIcon className='icon-without-name h-12 w-12 stroke-slate-400' />;
    }
    case 'tax': {
      return <CircleStackIcon className='icon-without-name fill-yellow-400 stroke-slate-900' />;
    }
    case 'start': {
      return <SparklesIcon className='h-12  w-12 stroke-yellow-400' />;
    }
    case 'jail': {
      return <FingerPrintIcon className='h-12 w-12  fill-zinc-600 stroke-yellow-100' />;
    }
    case 'w-cup': {
      return <GlobeAltIcon className='h-12 w-12  fill-black stroke-white' />;
    }
    case 'plane': {
      return <RocketLaunchIcon className='h-12 w-12  fill-red-600 stroke-blue-300' />;
    }

    default: {
      return null;
    }
  }
};

export const FieldIcon = ({ stringId }: Props) => {
  const icon = getFieldIcon(stringId);

  if (!icon) {
    return null;
  }

  return icon;
};
