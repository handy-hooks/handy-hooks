import React from "react";
// refs exist across component re-renders so we can use it to store  a value for the subsequent renders.
// we're tracking if its the first render, which is initially true.
export const useInitialMount = () => {
  const isFirstRender = React.useRef<boolean>();

  // in the very first render the ref  is true, but we immediately change it to false.
  // so the every render after will be false.
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }
  return false;
};
