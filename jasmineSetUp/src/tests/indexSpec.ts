import myFunc from "../index";
import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import strings from "../utilities/strings";

it("expect myFunc(5) to equal 25", () => {
  expect(myFunc(5)).toEqual(25);
});

it("expect addArr([1,2,3,4]) to be 10", () => {
  expect(arrays.addArr([1, 2, 3, 4])).toBe(10);
});

it("expect concatArr([3, 4, 5, 6], ['cat', 'dog', 'rabbit', 'bird']) to have size 8", () => {
  expect(
    arrays.concatArr([3, 4, 5, 6], ["cat", "dog", "rabbit", "bird"])
  ).toHaveSize(8);
});

it("expect cut3([1,2,3,4]).length to be less than or equal 3", () => {
  expect(arrays.cut3([1, 2, 3, 4]).length).toBeLessThanOrEqual(3);
});

it("expect sum(1.1,1) to be close to 2", () => {
  expect(numbers.sum(1.1, 1)).toBeCloseTo(2, 0);
});

it("expect capitalize('the quick brown fox') to be 'The Quick Brown Fox'", () => {
  expect(strings.capitalize("the quick brown fox")).toBe("The Quick Brown Fox");
});

it("exepct multiple(4,0) to equal 0", () => {
  expect(numbers.multiply(4, 0)).toEqual(0);
});

it("expect lgNum([3, 4, 5, 6, 'cat', 'dog', 'rabbit', 'bird']) to be greater than or equal 6", () => {
  expect(
    arrays.lgNum([3, 4, 5, 6, "cat", "dog", "rabbit", "bird"])
  ).toBeGreaterThanOrEqual(6);
});
