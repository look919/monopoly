'use client';

import React, { useEffect, useRef, useState } from 'react';
// import { useGameContext } from 'app/game/[id]/GameContext';
import Dice from 'react-dice-roll';
import { Button } from '@components/ui/button';
import type { DiceResult } from '@logic/types';

export const Dices = () => {
  //   const { gameState, handleChangeGameState } = useGameContext();
  const dice1Ref = useRef<any>(null);
  const dice2Ref = useRef<any>(null);
  const [diceOneValue, setDiceOneValue] = useState<DiceResult | null>(null);
  const [diceTwoValue, setDiceTwoValue] = useState<DiceResult | null>(null);
  const [isRollDicesButtonEnabled, setIsRollDicesButtonEnabled] = useState(false);

  useEffect(() => {
    if (!diceOneValue || !diceTwoValue) {
      return;
    }

    // handleChangeGameState({
    //   type: 'ROLL_DICES',
    //   payload: {
    //     diceOne: diceOneValue,
    //     diceTwo: diceTwoValue,
    //   },
    // });
    // handleChangeGameState({
    //   type: 'CHANGE_PLAYER_LOCATION',
    // });

    if (diceOneValue === diceTwoValue) {
      setIsRollDicesButtonEnabled(true);
      return;
    }

    setDiceTwoValue(null);
  }, [diceOneValue, diceTwoValue]);

  const handleRollDice = () => {
    setDiceOneValue(null);
    setDiceTwoValue(null);
    dice1Ref.current?.rollDice();
    dice2Ref.current?.rollDice();
    setIsRollDicesButtonEnabled(false);
  };

  return (
    <div className='absolute bottom-40 left-40 '>
      <div className='flex'>
        <div className='pointer-events-none m-3 rotate-[20deg]'>
          <Dice cheatValue={5} ref={dice1Ref} size={80} onRoll={value => setDiceOneValue(value)} />
        </div>
        <div className='pointer-events-none m-3 rotate-[20deg]'>
          <Dice cheatValue={5} ref={dice2Ref} size={80} onRoll={value => setDiceTwoValue(value)} />
        </div>
      </div>
      <Button disabled={!isRollDicesButtonEnabled} onClick={handleRollDice} className='mt-8 w-full'>
        Throw
      </Button>
    </div>
  );
};
