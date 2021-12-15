"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays_js_1.default.addArr(numArr);
var mixArr = arrays_js_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
var five = parseInt('5');
exports.default = {
    numArr: numArr,
    wordArr: wordArr,
    arrSum: arrSum,
    myNum: myNum,
    mixArr: mixArr,
    five: five
};
