import { useEffect, useState } from 'react';

const useMinimumLoading = (minDelay = 1000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  const startLoading = () => {
    setIsLoading(true);
    setShowContent(false);
    setFetchCount((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, minDelay);

    return () => clearTimeout(timer);
  }, [minDelay, fetchCount]);

  return {
    isLoading: isLoading || !showContent,
    startLoading,
    completeLoading: () => setIsLoading(false),
  };
};

export default useMinimumLoading;
