function addCommas(number) {
   let numberArray = Array.from(number.toString())
   let count = 0
   let test = numberArray.length
   let after = ''
   for(let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] !== '.' && numberArray.length === test){
            continue;
        }else {
            after += numberArray.splice(i,1)
            i--
        }
   }
   numberArray.reverse()
    for(let i = 0; i < numberArray.length; i++) {
             if(numberArray[0] == '-'){
                continue;
            }
            else if (count < 3){
                count++
            }else{
                numberArray.splice(i,0,',') 
                count = 0 
            }   
    }
    numberArray.reverse()
    let str = numberArray.toString()
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
        result += str[i];
        }
    }
    return after ? result+after : result
}

module.exports = addCommas;