import arrays from "./../utilities/arrays";
import numbers from "./../utilities/numbers";
import strings from "./../utilities/strings";
import index from "./../index";

it("expect arrays.addArr(numArr) to equal 18 ",()=>{
    expect(arrays.addArr(index.numArr)).toEqual(18);
})


it("expect arrays.concatArr(numArr, wordArr) to equal [3, 4, 5, 6,'cat', 'dog', 'rabbit', 'bird']",()=>{
    expect(arrays.concatArr(index.numArr, index.wordArr)).toEqual([3, 4, 5, 6,'cat', 'dog', 'rabbit', 'bird'])
})

it("expect arrays.cut3([1,2,3]) to equal [1,2]",()=>{
    expect(arrays.cut3([1,2,3])).not.toEqual([1,2,3])
})


it("expect numbers.sum(1,2,3) toBeCloseTo 6",()=>{
    expect(numbers.sum(1,2)).toBeCloseTo(3,0);
})


it("expect strings.Capilatize('the world is beautiful') toMatch(\"World\")",()=>{
    expect(strings.capitalize("the world is beautiful")).toMatch("World");
})


it("expect numbers.multiply(5,5) toBeGreaterThan(24)",()=>{
    expect(numbers.multiply(5,5)).toBeGreaterThan(24);
})

it("expect arrays.lgNum([0,1]) not to be Null ",()=>{
    expect(arrays.lgNum([0,1])).not.toBeNull()
})