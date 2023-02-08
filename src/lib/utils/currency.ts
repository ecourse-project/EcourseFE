import { formatCommas } from './formatNumber';

export const formatCurrency = (value: number | string, removeDecimalZero = true): number | string => {
  const convertedValue = +value;
  if (removeDecimalZero && +(convertedValue % 1).toFixed(2) === 0) {
    return `${formatCommas(convertedValue.toFixed(0))}`;
  }
  return formatCommas((convertedValue || 0).toFixed(2));
};

const currencyList = [
  {
    name: 'USD',
    value: '$',
  },
  {
    name: 'VND',
    value: 'đ',
  },
];

export const currencySymbol = (name: string): string => {
  const syb = currencyList.filter((val) => {
    return val.name === name.toUpperCase();
  });

  if (syb) {
    return syb[0].value;
  }
  return '';
};

export const formatCurrencySymbol = (value: number | string, currency: string, removeDecimalZero = true): string => {
  const symbol = currencySymbol(currency);
  if (+value < 0) {
    return `-${formatCurrency(Math.abs(+value), removeDecimalZero)}${symbol}${formatCurrency(
      Math.abs(+value),
      removeDecimalZero,
    )}`;
  } else {
    return `${formatCurrency(+value, removeDecimalZero)}${symbol}`;
  }
};

export const formatCurrency1 = (number: number, currency = ''): string => {
  return number.toLocaleString('it-IT', {
    style: 'currency',
    currency: currency,
  });
};
