'use client';

// import { Pawn } from 'components/logic/Pawn/Pawn';
import Image from 'next/image';
import { Dices } from '@components/logic/Dices';
import { Field } from '@components/logic/Field';
import fields from '@logic/fields.json';
import { GameField } from '@logic/fields.types';

// import { useGameContext } from './GameContext';

const gameFields = fields as GameField[];

export const GameContainer = () => {
  // const { gameState } = useGameContext();

  return (
    <div>
      <div className='game-container rotate-12'>
        <Image
          src='/monopoly-center-img2.jpg'
          alt='monopoly-center-image'
          width={2000}
          height={2000}
          className='center-img'
        />
        {gameFields.map(field => (
          <Field key={field.id} {...field} ownership={field.purchasable ? 'NONE' : null} />
        ))}
        {/* {gameState.players.map(player => (
          <Pawn
            key={player.id}
            gameFields={gameFields}
            player={player}
            numberOfPawnsOnTheSameField={
              gameState.players.filter(
                otherPlayer => player.id !== otherPlayer.id && otherPlayer.fieldId === player.fieldId,
              ).length
            }
          />
        ))} */}
      </div>
      <Dices />
    </div>
  );
};
