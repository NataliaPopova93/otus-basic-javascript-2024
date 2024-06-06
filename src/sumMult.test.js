import { sumMult } from "./sumMult";

describe ("sum and mult", () => {
    it("return sum and mult", () => {
        expect(sumMult(3, 5)).toEqual(23);
    });
});