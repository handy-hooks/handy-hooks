import { renderHook, act } from "@testing-library/react-hooks";
import { useInitialMount } from "../package/useInitialMount";

describe("test useInitialMount", () => {
  test("should return true in the very first render and false in the next renders", () => {
    const { result, rerender } = renderHook(() => useInitialMount());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(false);
  });
});
