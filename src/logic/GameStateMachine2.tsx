/* eslint-disable no-param-reassign */

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createMachine, assign } from 'xstate';
import { Player } from './types';

// Define types for context and events
interface MonopolyContext {
  players: Player[];
  currentPlayer: Player;
  diceRoll: number;
  numberOfDoublets: number;
}

const context: MonopolyContext = {
  players: [
    {
      id: 'PLAYER_1',
      name: 'Player 1',
      positionFieldId: 0,
      money: 1500,
      properties: [],
      cards: [],
      isBankrupt: false,
      houses: [],
      img: '',
    },
    {
      id: 'PLAYER_2',
      name: 'Player 2',
      positionFieldId: 0,
      money: 1500,
      properties: [],
      cards: [],
      isBankrupt: false,
      houses: [],
      img: '',
    },
  ],
  currentPlayer: {
    id: 'PLAYER_1',
    name: 'Player 1',
    positionFieldId: 0,
    money: 1500,
    properties: [],
    cards: [],
    isBankrupt: false,
    houses: [],
    img: '',
  },
  diceRoll: 0,
  numberOfDoublets: 0,
};

type MonopolyEvent = { type: 'START' } | { type: 'ROLL' };

// Actions
const swapPlayers = ({ players, currentPlayer }: MonopolyContext) => {
  const currentPlayerIndex = players.findIndex(player => player.id === currentPlayer.id);
  const nextPlayerIndex = currentPlayerIndex === players.length - 1 ? 0 : currentPlayerIndex + 1;

  // TODO:
  //   if (players[nextPlayerIndex].isBankrupt) {
  //     const nextPlayer = swapPlayers({ players, currentPlayer: players[nextPlayerIndex] });
  //   }

  return players[nextPlayerIndex];
};

const rollDiceAndMovePlayer = ({ diceRoll, currentPlayer }: MonopolyContext) => {
  (diceRoll = Math.floor(Math.random() * 6) + 1), (currentPlayer.positionFieldId += diceRoll);
};

// Services
const checkIfPlayerWins = (): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    resolve(false);
  });
};

// Machine definition
export const gameMachine = createMachine<MonopolyContext, MonopolyEvent>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QFsD2A7VAHVAbAngHSwAuAhgE4kDEAygCoCCASvQNoAMAuoqDrAEsSAjLxAAPRAEYAbFMIdFigMwAmKQBYOADgCsy3QBoQ+ROpmFtq1QE5125coDsu-QF83xtJhwFCWXDJ8AXQoaggMMEIQgDdUAGso72w8IgCgkKgEWNQAYzJhDE4uYrF+IRF0MUkEDWULbRsOGQMnKUUZGRtlY1MEVUdCLRlVVxknbQ1VDg0PLwwUv3Tg0OpmAHkAGU3SpBBywqq9mtUHQl0pXRapZxsbJ3vexG15XSUOKVOB7ScZD08QJgIHAxMlfH0+KhBIdqogALQyJ4IBFzEBg1LEchUMpQiqiY6IKZI9ROQhqWz2RwudwA9FLQIrKA46GVWH9JyqSynG7tRyKDSIkxmHSEJojXQabSdCaqTqoulEADuIWZeKOoBqMg0pOUdV+42UOkeQv6ynkl3Frkamg4qlm-yAA */
    id: 'monopoly',
    initial: 'start',
    context,
    states: {
      start: {
        on: {
          START: {
            actions: ['drawInGameBonuses'],
            target: 'rollDices',
          },
        },
      },
      rollDices: {
        on: {
          ROLL: {
            actions: ['rollDiceAndMovePlayer'],
            target: 'newPlayerLocation',
          },
        },
      },
      newPlayerLocation: {
        states: {},
      },

      playing: {
        invoke: {
          src: checkIfPlayerWins,
          onDone: {
            target: 'win',
            cond: (context, event) => event.data === true,
          },
        },
      },
      win: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      rollDiceAndMovePlayer,
      drawInGameBonuses: () => {
        console.log('Drawing in game bonuses');
      },
      swapPlayers: ({ players, currentPlayer }) => {},
    },
  },
);
