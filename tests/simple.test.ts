import sum from "./first";

describe("sum()", () => {
    test("simple test", () => {
        expect(() => sum(1, 2)).not.toThrow(Error);
    });
});