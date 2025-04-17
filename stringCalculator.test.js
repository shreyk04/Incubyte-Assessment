const {Add}=require('./stringCalculator');
test('returns 0 for an empty string ',()=>{
    expect(Add("")).toBe(0)
});

test("returns number itself when one number is passed",()=>{
    expect(Add('5')).toBe(5)
})
test("returns sum of two numbers separated by comma",()=>{
    expect(Add('1,2')).toBe(3)
})

test("returns sum of multiple comma separted numbers",()=>{
    expect(Add("2,3,5")).toBe(10)
    expect(Add("1,2,3,4,5")).toBe(15)
})


test("supports new lines as delimiters along with commas",()=>{
    expect(Add("1\n2,3")).toBe(6)
})