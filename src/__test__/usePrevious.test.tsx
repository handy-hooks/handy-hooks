import { renderHook } from "@testing-library/react-hooks";
import { usePrevious } from "../package/usePrevious";
describe("use Previous", () => {
  test("should return previous value number", () => {
    const { result, rerender } = renderHook((value) => usePrevious(value), {
      initialProps: 1,
    });
    rerender(2);
    expect(result.current).toBe(1);
    rerender(3);
    expect(result.current).toBe(2);
  });
  test("should return previous object value ", () => {
    const { result, rerender } = renderHook((value) => usePrevious(value), {
      initialProps: {},
    });
    rerender({ a: 1 });
    expect(result.current).toStrictEqual({});
    rerender({ a: 2 });
    expect(result.current).toStrictEqual({ a: 1 });
    rerender({ a: 3 });
    expect(result.current).toStrictEqual({ a: 2 });
  });
});
