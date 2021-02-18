import React from "react";
import { useInitialMount } from "./useInitialMount";
export const usePrevious = <T,>(value: T): T | undefined => {
  const prevRef = React.useRef<T>();
  const curRef = React.useRef(value);
  const isInitialMount = useInitialMount();

  if (!isInitialMount && curRef.current !== value) {
    prevRef.current = curRef.current;
    curRef.current = value;
  }
  return prevRef.current;
};
