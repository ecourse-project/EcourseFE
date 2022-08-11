import { formatCommas } from './formatNumber';

export const formatCurrency = (
	value: number | string,
	removeDecimalZero = false
): number | string => {
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

export const formatCurrencySymbol = (
	value: number | string,
	currency: string,
	removeDecimalZero = false
): string => {
	const symbol = currencySymbol(currency);
	if (+value < 0) {
		return `-${symbol}${formatCurrency(Math.abs(+value), removeDecimalZero)}`;
	} else {
		return `${symbol}${formatCurrency(+value, removeDecimalZero)}`;
	}
};
