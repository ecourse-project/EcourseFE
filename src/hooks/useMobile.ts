/* eslint-disable react-hooks/rules-of-hooks */
import useSize from '@umijs/hooks/lib/useSize';

const useCheckMobileDevice = (params = 425): boolean => {
	if (typeof document !== 'undefined') {
		const [state] = useSize(document.querySelector('body'));
		if (!state.width) return false;
		if (state.width < params) {
			return true;
		}
	}

	return false;
};

export default useCheckMobileDevice;
