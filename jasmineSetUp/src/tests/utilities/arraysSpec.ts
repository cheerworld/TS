import arrays from "../../utilities/arrays";

describe("Tests for array utilities", () => {
  const numArr = [3, 4, 5, 6];
  const wordArr = ["cat", "dog", "rabbit", "bird"];

  describe("addArr function adds numbers in array", () => {
    it("should add numbers in array and be truthy", () => {
      expect(arrays.addArr(numArr)).toBeTruthy();
    });

    it("should add numbers in array and be 18", () => {
      expect(arrays.addArr(numArr)).toBe(18);
    });
  });

  describe("concatArr function concatenate 2 arrays", () => {
    it("should concatenate 2 arrays to not equal just the first", () => {
      expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });

    it("should concatenate 2 arrays to not equal to the second", () => {
      expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
    });
  });

  describe("cut3 function removes the 3rd item in array", () => {
    it("should contain 3 items except rabbit", () => {
      expect(arrays.cut3(wordArr)).toEqual(["cat", "dog", "bird"]);
    });

    it("should not contain the third index", () => {
      expect(arrays.cut3(wordArr)).not.toContain("rabbit");
    });
  });

  describe("lgNum function gets the largest number in array", () => {
    it("should not have a large number and be falsy", () => {
      expect(arrays.lgNum(wordArr)).toBeFalsy();
    });

    it("should have 6 be largest number", () => {
      expect(arrays.lgNum(numArr)).toEqual(6);
    });
  });
});
