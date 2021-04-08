import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay?: number | null) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;
