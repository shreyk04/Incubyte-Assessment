function Add(numbers){
    if(numbers==="") return 0;

    let delimiter=/,|\n/;

    if(numbers.startsWith("//")){
        //extract custom delimiter
        const delimiterLineEnd=numbers.indexOf("\n")
         const delimiterPart=numbers.slice(2,delimiterLineEnd)

         if(delimiterPart.startsWith("[")&& delimiterPart.includes("]")){
            const customDelimiter=delimiterPart.slice(1,-1);
            delimiter=new RegExp(customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&'))
         }else{
            delimiter=delimiterPart
         }

        numbers=numbers.slice(delimiterLineEnd+1)
        //remove cutsom delimiter line

        
    }
    const parts=numbers.split(delimiter).map(Number);

    //find all negative numbers
    const negatives=parts.filter(num=>num<0)
    if(negatives.length>0){
        throw new Error("negative numbers are not allowed")
    }
    return parts.filter((num)=>num<=1000).reduce((sum,num)=>sum+num,0)

   
}

module.exports={Add}