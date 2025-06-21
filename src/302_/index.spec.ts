import { describe, expect, it } from "vitest";
import { add } from ".";

describe("302", () => {
  it("01", () => {
    expect(add(2)).toEqual(2);
  })
});