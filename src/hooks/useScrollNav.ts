import { useLocation } from '@reach/router';
import { useEffect, useState } from 'react';

export const useScrollNav = () => {
  const location = useLocation();
  const [hashUrl, setHashUrl] = useState<null | string>(null);
  useEffect(() => {
    if (!document.getElementById('id-active')) return;
    document.getElementById('id-active')?.scrollIntoView({ behavior: 'auto', block: 'end', inline: 'center' });
  }, [hashUrl]);

  useEffect(() => {
    if (!location?.pathname) return;

    setHashUrl(location.pathname);
  }, [location.pathname]);

  const getIdActive = (path) => {
    let pathName = hashUrl;
    if (!pathName) return;
    if (pathName && pathName?.length > 1 && pathName.endsWith('/')) {
      pathName = pathName.slice(0, -1);
    }
    if (!pathName) return '';
    return pathName === path ? 'id-active' : '';
  };

  return {
    getIdActive,
  };
};
