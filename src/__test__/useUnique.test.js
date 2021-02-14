import { renderHook, act } from "@testing-library/react-hooks";
import { useUniqueId } from "../useUniqueID";

describe("test useUniqueId", () => {
  test("should returns `id1` a unique id that remains constant across component renrender", () => {
    const { result, rerender } = renderHook(() => useUniqueId());
    expect(result.current).toBe("id1");
    rerender();
    expect(result.current).toBe("id1");
  });
  test("should returns `id2` that remains constant across component renrender", () => {
    const { result, rerender } = renderHook(() => useUniqueId());
    expect(result.current).toBe("id2");
    rerender();
    expect(result.current).toBe("id2");
  });
});
