const inputtednumber=[12,56,755,27,16,2,1104,65,88];

for(let num in inputtednumber){

    switch (true) {
        case (inputtednumber[num]%3 ==0 && inputtednumber[num]%8 ==0):
        console.log( inputtednumber[num],"is divisible by 3 and 8");
        break;
      
    case (inputtednumber[num]%3 ==0):
        console.log( inputtednumber[num],"is divisible by 3");
        break;

    case (inputtednumber[num]%8 ==0):
        console.log( inputtednumber[num],"is divisible by 8");
        break;

    case (inputtednumber[num]%3 !=0 &&  inputtednumber[num]%8 !=0):
        console.log( inputtednumber[num],"is not divisible by 3 and 8");
        break;
        

    default:
        console.log("something went wrong");
        break;
    }
}