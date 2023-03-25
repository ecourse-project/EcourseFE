import Router, { useRouter } from 'next/router';
import RoutePaths from './routes';
export interface User {
  name: string;
  psw: string;
  id: string;
}
export const forceLogout = (redirectUrl?: string): void => {
  localStorage.clear();
  if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
    Router.push(`${RoutePaths.LOGIN}/?redirect_url=${window.location.pathname}${window.location.search}`);
  }
};

export const checkingProfileAvailable = (myProfile?: User): void => {
  if (!window) return;
  const pathName = window.location.pathname;
  if (typeof window !== 'undefined' && (pathName === '/' || pathName.includes('/login')) && myProfile?.id) {
    // router.push(RoutePaths.ON_BOARDING);
  }
};
