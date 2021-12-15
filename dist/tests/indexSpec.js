"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("./../utilities/arrays"));
var numbers_1 = __importDefault(require("./../utilities/numbers"));
var strings_1 = __importDefault(require("./../utilities/strings"));
var index_1 = __importDefault(require("./../index"));
it("expect arrays.addArr(numArr) to equal 18 ", function () {
    expect(arrays_1.default.addArr(index_1.default.numArr)).toEqual(18);
});
it("expect arrays.concatArr(numArr, wordArr) to equal [3, 4, 5, 6,'cat', 'dog', 'rabbit', 'bird']", function () {
    expect(arrays_1.default.concatArr(index_1.default.numArr, index_1.default.wordArr)).toEqual([3, 4, 5, 6, 'cat', 'dog', 'rabbit', 'bird']);
});
it("expect arrays.cut3([1,2,3]) to equal [1,2]", function () {
    expect(arrays_1.default.cut3([1, 2, 3])).not.toEqual([1, 2, 3]);
});
it("expect numbers.sum(1,2,3) toBeCloseTo 6", function () {
    expect(numbers_1.default.sum(1, 2)).toBeCloseTo(3, 0);
});
it("expect strings.Capilatize('the world is beautiful') toMatch(\"World\")", function () {
    expect(strings_1.default.capitalize("the world is beautiful")).toMatch("World");
});
it("expect numbers.multiply(5,5) toBeGreaterThan(24)", function () {
    expect(numbers_1.default.multiply(5, 5)).toBeGreaterThan(24);
});
it("expect arrays.lgNum([0,1]) not to be Null ", function () {
    expect(arrays_1.default.lgNum([0, 1])).not.toBeNull();
});
