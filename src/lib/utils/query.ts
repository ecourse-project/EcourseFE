import querystring from 'query-string';

export function getQueryParam<T>(): T {
	if (typeof window === 'undefined') return {} as T;
	return querystring.parse(window.location.search) as any;
}

export function createUrl(urlData: any) {
	const keys = Object.keys(urlData);
	let search = '?';
	keys.forEach((key) => {
		if (urlData[key] !== null && urlData[key] !== '') {
			search += `${key}=${urlData[key]}&`;
		}
	});
	return search.substring(0, search.length - 1);
}
