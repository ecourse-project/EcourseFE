export const formatCommas = (number: number | string): number | string => {
	if (number === undefined || number === null) return '--';
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const unformatCommas = (value: string): number | string => {
	return value.replaceAll(',', '');
};
