const {Add}=require('./stringCalculator');
test('returns 0 for an empty string ',()=>{
    expect(Add("")).toBe(0)
});

test("returns number itself when one number is passed",()=>{
    expect(Add('5')).toBe(5)
    expect(Add("9")).toBe(9)
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

test("supports custom delimiters defined with //delimiter",()=>{
    expect(Add("//;\n1;2")).toBe(3)
    // expect(Add("//[\n1\n2")).toBe(3)
})

test("throws an exception when negative numbers are included",()=>{
    expect(()=>Add("1,-2,3,4,-5")).toThrow("negative numbers are not allowed")
})

test("ignores number greater than 1000",()=>{
    expect(Add("2,1003")).toBe(2)
    expect(Add("1000,2")).toBe(1002)
})


test("supports delimiters of any length using //[***]\\n syntax",()=>{
    expect(Add("//[***]\n1***2***3")).toBe(6)
})


test("supports multiple delimiters using //[delim1][delim2]\\n syntax", () => {
         expect(Add("//[*][%]\n1*2%3")).toBe(6);
     });
    