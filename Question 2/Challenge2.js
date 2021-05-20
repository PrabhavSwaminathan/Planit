/*Write a solution to find the character that has the highest number of occurrences within a 
certain string, ignoring case. If there is more than one character with equal highest occurrences, 
return the character that appeared first within the string.
For example:
     Input: "Character"
     Output: c
*/


let str= "reverse";
let alphabetPosition = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetFrequency =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(let i=0;i<str.length; i++){
    index = alphabetPosition.indexOf(str[i]);
    alphabetFrequency[index]+=1;
}

max=alphabetFrequency[0];
for(let i=1;i<alphabetFrequency.length;i++){
    if (max<alphabetFrequency[i]){
        max = alphabetFrequency[i];
    }
}

let indexList = [];
for (let i=0;i<alphabetFrequency.length;i++){
   if (alphabetFrequency[i]==max){
       indexList.push(i);
   }
}
console.log("Index list: ",indexList);
characterList = [];
for (let i=0;i<indexList.length;i++){
    characterList.push(alphabetPosition[indexList[i]])
}
console.log("Character list: ",characterList);
//select the maximum occuring character appearing at the start of the string.
min = alphabetPosition.indexOf(characterList[0]);
//
/*for (let i=0;i<characterList.length;i++){
    if (min>alphabetPosition.indexOf(characterList[i])){
        min = alphabetPosition.indexOf(characterList[i]);
    }
}
*/
//console.log("highest occurring character "+alphabetPosition[min]);
//console.log(highestOccurence('Character'));
min = str.indexOf(characterList[0])
console.log("Min "+min)
for (let i=1;i<characterList.length;i++){
    if (min>str.indexOf(characterList[i])){
        min = str.indexOf(characterList[i]);
        console.log("Index of min "+min)
    }
}
console.log("highest occurring character "+str[min]);
