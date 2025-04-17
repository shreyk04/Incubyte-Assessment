const {Add}=require('./stringCalculator');
test('returns 0 for an empty string ',()=>{
    expect(Add("")).toBe(0)
});