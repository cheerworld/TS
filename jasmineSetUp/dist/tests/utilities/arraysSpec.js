"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../../utilities/arrays"));
describe("Tests for array utilities", function () {
    var numArr = [3, 4, 5, 6];
    var wordArr = ["cat", "dog", "rabbit", "bird"];
    describe("addArr function adds numbers in array", function () {
        it("should add numbers in array and be truthy", function () {
            expect(arrays_1.default.addArr(numArr)).toBeTruthy();
        });
        it("should add numbers in array and be 19", function () {
            expect(arrays_1.default.addArr(numArr)).toBe(18);
        });
    });
    describe("concatArr function concatenate 2 arrays", function () {
        it("should concatenate 2 arrays to not equal just 1", function () {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it("should concatenate 2 arrays to not equal to the second", function () {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });
    describe("cut3 function removes the 3rd item in array", function () {
        it("should contain 3 items except rabbit", function () {
            expect(arrays_1.default.cut3(wordArr)).toEqual(["cat", "dog", "bird"]);
        });
        it("should not contain the third index", function () {
            expect(arrays_1.default.cut3(wordArr)).not.toContain("rabbit");
        });
    });
    describe("lgNum function gets the largest number in array", function () {
        it("should not have a large number and be falsy", function () {
            expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
        });
        it("should have 6 be largest number", function () {
            expect(arrays_1.default.lgNum(numArr)).toEqual(6);
        });
    });
});
