class Calculator{
     add_method_counter=0

     getAddMethodCounterValue(){
        return this.add_method_counter;
    }

     Add(numbers) {
        this.add_method_counter++;
        if (numbers === "") return 0;
    
        let delimiter = /,|\n/;
    
        if (numbers.startsWith("//")) {
    
            const delimiterLineEnd = numbers.indexOf("\n");
            const delimiterPart = numbers.slice(2, delimiterLineEnd);
    
            if (delimiterPart.startsWith("[") && delimiterPart.includes("]")) {
                const delimiters = delimiterPart.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
                delimiter = new RegExp(delimiters.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));
            } else {
                delimiter = delimiterPart;
            }
    
            numbers = numbers.slice(delimiterLineEnd + 1);
    
        }
    
        const parts = numbers.split(delimiter).map(Number);
    
    
        const negatives = parts.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error("negative numbers are not allowed: " + negatives.join(", "));
        }
    
        return parts.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
}


module.exports = { Calculator };
