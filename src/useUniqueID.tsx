import { useInitialMount } from "./useInitialMount";
import { useRef } from "react";

let globalId = 0;
/**
 * returns a unique id that remains constant across component renrender
 */
export const useUniqueId = () => {
  const idRef = useRef("");
  const isInitialMount = useInitialMount();

  if (isInitialMount) {
    globalId += 1;
    idRef.current = `id${globalId}`;
  }
  return idRef.current;
};
