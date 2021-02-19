import { renderHook } from "@testing-library/react-hooks";
import { useIsMounted } from "../package/useIsMounted";

describe("useIsMounted", () => {
  test("should returns false if the component is unmounted", () => {
    const { result, rerender, unmount } = renderHook(() => useIsMounted());
    expect(result.current()).toBe(true);
    unmount();
    expect(result.current()).toBe(false);
  });
});
