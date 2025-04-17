const {Calculator}=require('./stringCalculator');

const calculator=new Calculator();



test('returns 0 for an empty string ',()=>{
    expect(calculator.Add("")).toBe(0)
});

test("returns number itself when one number is passed",()=>{
    expect(calculator.Add('5')).toBe(5)
    expect(calculator.Add("9")).toBe(9)
})
test("returns sum of two numbers separated by comma",()=>{
    expect(calculator.Add('1,2')).toBe(3)
})

test("returns sum of multiple comma separted numbers",()=>{
    expect(calculator.Add("2,3,5")).toBe(10)
    expect(calculator.Add("1,2,3,4,5")).toBe(15)
})


test("supports new lines as delimiters along with commas",()=>{
    expect(calculator.Add("1\n2,3")).toBe(6)
})

test("supports custom delimiters defined with //delimiter",()=>{
    expect(calculator.Add("//;\n1;2")).toBe(3)
})

test("throws an exception when negative numbers are included",()=>{
    expect(()=>calculator.Add("1,-2,3,4,-5")).toThrow("negative numbers are not allowed")
})

test("ignores number greater than 1000",()=>{
    expect(calculator.Add("2,1003")).toBe(2)
    expect(calculator.Add("1000,2")).toBe(1002)
})


test("supports delimiters of any length using //[***]\\n syntax",()=>{
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6)
})


test("supports multiple delimiters using //[delim1][delim2]\\n syntax", () => {
         expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
     });

  test("counts how many time Add method was called",()=>{
    const newCalc=new Calculator();
    newCalc.Add("1,2")
    newCalc.Add("3,4")
    newCalc.Add("8,9")
    expect(newCalc.getAddMethodCounterValue()).toBe(3)
  })   
    
   