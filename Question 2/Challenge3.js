/*Challenge 3:
Write a solution that reverses a string and replaces any spaces with hyphens (-)
For example: 
     Input: "reverse order"
     Output: "redro-esrever"
*/

const reverseString = str => {
    let reverseString = [];
    for(let i=str.length-1; i>-1; i--){
        if(str[i]===' '){
            reverseString.push('-');
        }
        else{
            reverseString.push(str[i]);
        }
    }
    return reverseString.join("");
}

console.log(reverseString("reverse order"));