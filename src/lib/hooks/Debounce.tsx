import React, { useEffect, useRef, useState } from 'react';

function useDebounce(value: string, delayInMilisecond: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const handler = useRef(0);
  useEffect(() => {
    handler.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMilisecond);

    return () => {
      clearTimeout(handler.current);
    };
  }, [value, delayInMilisecond]);
  return debouncedValue;
}

export default useDebounce;
