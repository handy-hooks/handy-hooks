import { useEffect, useRef, useCallback } from "react";

// returns a function that when called will
// return `true` if the component is mounted
export const useIsMounted = () => {
  // the ref to keep track of mounted state across renders
  const mountedRef = useRef(false);

  // helper function that will return the mounted state.
  // using `useCallback` because the function will likely
  // be used in the deps array of a `useEffect` call
  const isMounted = useCallback(() => mountedRef.current, []);

  // effect sets mounted ref to `true` when run
  // and the sets to `false` during effect cleanup (i.e. unmount)
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};
