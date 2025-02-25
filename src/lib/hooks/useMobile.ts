/* eslint-disable react-hooks/rules-of-hooks */

const useCheckMobileDevice = (params = 425): boolean => {
  if (typeof document !== 'undefined') {
    return true;
  }

  return false;
};

export default useCheckMobileDevice;
