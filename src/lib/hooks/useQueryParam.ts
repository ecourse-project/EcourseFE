/* eslint-disable @typescript-eslint/no-explicit-any */
import querystring from 'query-string';

export function useQueryParam<T>(): T {
  if (typeof window === 'undefined') return {} as T;
  return querystring.parse(window.location.search) as any;
}
