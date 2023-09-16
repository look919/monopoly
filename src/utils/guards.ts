export const isUndefined = <T>(value: T | undefined): value is undefined => value === undefined;
export const isNull = <T>(value: T | null): value is null => value === null;
export const isNill = <T>(value: T | undefined | null): value is null | undefined =>
  isNull(value) || isUndefined(value);
export const isDefined = <T>(value: T | undefined | null): value is T => !isNill(value);
