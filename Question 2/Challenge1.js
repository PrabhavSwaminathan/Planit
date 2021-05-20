/*Challenge 1:
Write a solution that prints the numbers from 1 to 100. But for multiples of three print 
"Planit" instead of the number and for the multiples of five print "Testing". 
For numbers which are multiples of both three and five print "PlanitTesting".

For example:
     Output: 1 2 Planit 4 Testing Planit 7 8 Planit Testing 11 Planit 13 14 PlanitTesting …etc.
*/

for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log('PlanitTesting');
    }
    else if(i%3===0){
        console.log('Planit');
    }
    else if(i%5===0){
        console.log('Testing');
    }
    else{
        console.log(i);
    }
}
