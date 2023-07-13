import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should return the correct initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should return the same initialCount as passes", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 69 },
    });
    expect(result.current.count).toBe(69);
  });

  test("should increment the count to 1", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count to -1", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
