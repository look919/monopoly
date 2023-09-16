type PropertyCosts = {
  purchase: number;
};

type PropertyIncomes = {
  sell: number;
  property: number;
};

type LinePropertyIncomes = PropertyIncomes & {
  house: number;
  hotel: number;
  sellHouse: number;
  sellHotel: number;
};

type LinePropertyCosts = PropertyCosts & {
  house: number;
  hotel: number;
};

export type CommonField = {
  id: number;
  stringId: StringFieldId;
  name: string;
  img?: string;
};

export type LinePropertyField = CommonField & {
  type: 'LINE_PROPERTY';
  purchasable: true;
  costs: LinePropertyCosts;
  incomes: LinePropertyIncomes;
};

export type PropertyField = CommonField & {
  type: 'PROPERTY';
  purchasable: true;
  costs: PropertyCosts;
  incomes: PropertyIncomes;
};

export type SpecialField = CommonField & {
  type: 'SPECIAL';
  purchasable: false;
};

export type GameField = LinePropertyField | PropertyField | SpecialField;

export type StringFieldId =
  | 'start'
  | 'l1-1'
  | 'qm1'
  | 'l1-2'
  | 'duty1'
  | 'rail1'
  | 'l2-1'
  | 'qm2'
  | 'l2-2'
  | 'l2-3'
  | 'jail'
  | 'l3-1'
  | 'l3-2'
  | 'dice1'
  | 'l3-3'
  | 'rail2'
  | 'tax'
  | 'l4-1'
  | 'qm3'
  | 'l4-2'
  | 'w-cup'
  | 'duty2'
  | 'l5-1'
  | 'qm4'
  | 'l5-2'
  | 'rail3'
  | 'l6-1'
  | 'dice2'
  | 'l6-2'
  | 'l6-3'
  | 'plane'
  | 'plane'
  | 'l7-1'
  | 'qm5'
  | 'l7-2'
  | 'l7-3'
  | 'rail4'
  | 'qm6'
  | 'l8-1'
  | 'duty3'
  | 'l8-2';
