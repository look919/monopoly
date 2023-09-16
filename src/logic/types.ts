export type Player = {
  id: 'PLAYER_1' | 'PLAYER_2' | 'PLAYER_3' | 'PLAYER_4';
  name: string;
  img: string;
  money: number;
  positionFieldId: number;
  isBankrupt: boolean;
  cards: any[];
  houses: any[];
  properties: any[];
};

export type DiceResult = 1 | 2 | 3 | 4 | 5 | 6;
export type NumberOfDoublets = 1 | 2 | 3 | null;
