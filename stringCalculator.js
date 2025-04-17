function Add(numbers){
    if(numbers==="") return 0;

    if(numbers.startsWith("//")){
        //extract custom delimiter
        const delimiterLineEnd=numbers.indexOf("\n")
        const delimiter=numbers.slice(2,delimiterLineEnd)

        numbers=numbers.slice(delimiterLineEnd+1)
        //remove cutsom delimiter line

        
    const parts=numbers.split(delimiter).map(Number);
    return parts.reduce((sum,num)=>sum+num,0)
    }

    const parts=numbers.split(/,|\n/).map(Number);
    return parts.reduce((sum,num)=>sum+num,0)
}

module.exports={Add}