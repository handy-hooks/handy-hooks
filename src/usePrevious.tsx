import React from "react";
import { useInitialMount } from "./useInitialMount";

/**
 * @description returns the previous value of a prop or state
 * @param value
 */
export const usePrevious = <T,>(value: T): T | undefined => {
  // use ref to keep the track of both prev and cur value

  const prevRef = React.useRef<T>();
  const curRef = React.useRef(value);
  const isInitialMount = useInitialMount();

  if (!isInitialMount && curRef.current !== value) {
    prevRef.current = curRef.current;
    curRef.current = value;
  }
  return prevRef.current;
};
