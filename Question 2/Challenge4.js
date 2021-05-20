/*Challenge 4:
Build a program that can convert temperatures from and to Celsius/Fahrenheit/Kelvin. No need to create a UI,
 a main function that receives parameters is enough.
For example: 
     Input: 32, “C”, “K”
     Output: “305.15 K”
*/

const tempConverter = (tempVal, inputTempScale, outputTempScale) => {
    let outputTempVal = 0;
    if(inputTempScale === "C" && outputTempScale === "K"){
        outputTempVal = tempVal + 273.15;
    }
    else if(inputTempScale === "C" && outputTempScale === "F"){
        outputTempVal = (tempVal * 9/5) + 32;
    }
    else if(inputTempScale === "K" && outputTempScale === "C"){
        outputTempVal = tempVal - 273.15;
    }
    else if(inputTempScale === "K" && outputTempScale === "F"){
        outputTempVal = (tempVal-273.15) * 9/5 + 32;
    }
    else if(inputTempScale === "F" && outputTempScale === "C"){
        outputTempVal = (tempVal - 32) * 5/9 ;
    }
    else if(inputTempScale === "F" && outputTempScale === "K"){
        outputTempVal = (tempVal - 32) * 5/9 + 273.15;
    }
    return outputTempVal;
}

console.log(tempConverter(32,"C","F"));