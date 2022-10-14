/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const useDebouncedCallback = (
	callback: (...args) => any,
	delaySeconds = 800
): any => {
	const timeout = React.useRef<any>();

	return React.useCallback(
		(...args) => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}

			timeout.current = setTimeout(() => callback(...args), delaySeconds);
		},
		[callback]
	);
};

export default useDebouncedCallback;
