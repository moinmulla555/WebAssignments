const inputtednumber=[12,56,755,27,16,2,1104,65,88];

let i=0;
while(i<inputtednumber.length){
switch (true) {
    case (inputtednumber[i]%3 ==0 && inputtednumber[i]%8 ==0):
        console.log( inputtednumber[i],"is divisible by 3 and 8");
        break;
      
    case (inputtednumber[i]%3 ==0):
        console.log( inputtednumber[i],"is divisible by 3");
        break;

    case (inputtednumber[i]%8 ==0):
        console.log( inputtednumber[i],"is divisible by 8");
        break;

    case (inputtednumber[i]%3 !=0 &&  inputtednumber[i]%8 !=0):
        console.log( inputtednumber[i],"is not divisible by 3 and 8");
        break;
        

    default:
        console.log("something went wrong");
        break;
}
i++;
}