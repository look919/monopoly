'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { GameField, StringFieldId } from '@logic/fields.types';
import { Player } from '@logic/types';

type Props = {
  gameFields: GameField[];
  player: Player;
  numberOfPawnsOnTheSameField: number;
};

const mapPlayerPawnColor: Record<Player['id'], string> = {
  PLAYER_1: 'border-red-600 shadow-red-600',
  PLAYER_2: 'border-blue-500 shadow-blue-500',
  PLAYER_3: 'border-yellow-400 shadow-yellow-400',
  PLAYER_4: 'border-emerald-400 shadow-emerald-400',
};

const translateMyselfIfOtherPawnsOccupiesTheSameField = (
  playerId: Player['id'],
  numberOfPawnsOnTheSameField: number,
) => {
  if (numberOfPawnsOnTheSameField === 0) {
    return null;
  }

  switch (true) {
    case playerId === 'PLAYER_1': {
      return `top-1/3 left-1/3`;
    }
    case playerId === 'PLAYER_2': {
      return `top-2/3 left-2/3`;
    }
    case playerId === 'PLAYER_3': {
      return `top-1/3 left-2/3`;
    }
    case playerId === 'PLAYER_4': {
      return `top-2/3 left-1/3`;
    }
    default: {
      return null;
    }
  }
};

type PawnField = {
  stringId: StringFieldId;
  id: number;
};

export const Pawn = ({ player, gameFields, numberOfPawnsOnTheSameField }: Props) => {
  const [field, setField] = useState<PawnField>({
    stringId: gameFields[0].stringId,
    id: gameFields[0].id,
  });

  useEffect(() => {
    if (player.fieldId !== field.id) {
      const interval = setInterval(() => {
        setField(prevState => {
          const newId = prevState.id >= 39 ? 0 : prevState.id + 1;
          return {
            stringId: gameFields[newId].stringId,
            id: newId,
          };
        });
      }, 300);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player.fieldId, field]);

  return (
    <Image
      alt={`pawn ${player.id}`}
      src={`/${player.img}`}
      width='64'
      height='64'
      className={twMerge(
        'top- absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-solid shadow-2xl ease-linear',
        mapPlayerPawnColor[player.id],
        translateMyselfIfOtherPawnsOccupiesTheSameField(player.id, numberOfPawnsOnTheSameField),
      )}
      style={{ gridArea: field.stringId }}
    />
  );
};
