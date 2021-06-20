"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
it("expect myFunc(5) to equal 25", function () {
    expect(index_1.default(5)).toEqual(25);
});
it("expect addArr([1,2,3,4]) to be 10", function () {
    expect(arrays_1.default.addArr([1, 2, 3, 4])).toBe(10);
});
it("expect concatArr([3, 4, 5, 6], ['cat', 'dog', 'rabbit', 'bird']) to have size 8", function () {
    expect(arrays_1.default.concatArr([3, 4, 5, 6], ['cat', 'dog', 'rabbit', 'bird'])).toHaveSize(8);
});
it("expect cut3([1,2,3,4]).length to be less than or equal 3", function () {
    expect(arrays_1.default.cut3([1, 2, 3, 4]).length).toBeLessThanOrEqual(3);
});
it("expect sum(1.1,1) to be close to 2", function () {
    expect(numbers_1.default.sum(1.1, 1)).toBeCloseTo(2, 0);
});
it("expect capitalize('the quick brown fox') to be 'The Quick Brown Fox'", function () {
    expect(strings_1.default.capitalize('the quick brown fox')).toBe('The Quick Brown Fox');
});
it("exepct multiple(4,0) to equal 0", function () {
    expect(numbers_1.default.multiply(4, 0)).toEqual(0);
});
/*
const lgNum = (arr: (string | number)[]): number => {
    let largest = 0 as number;
    arr.forEach((x) => {
      if (x > largest) {
        largest = x as number;
      }
    });
    return largest;
  };
*/
it("expect lgNum([3, 4, 5, 6, 'cat', 'dog', 'rabbit', 'bird']) to be greater than or equal 6", function () {
    expect(arrays_1.default.lgNum([3, 4, 5, 6, 'cat', 'dog', 'rabbit', 'bird'])).toBeGreaterThanOrEqual(6);
});
