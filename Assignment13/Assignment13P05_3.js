const inputtednumber=[12,56,755,27,16,2,1104,65,88];

for(let num of inputtednumber){

    switch (true) {
        case (num%3 ==0 && num%8 ==0):
        console.log( num,"is divisible by 3 and 8");
        break;
      
    case (num%3 ==0):
        console.log( num,"is divisible by 3");
        break;

    case (num%8 ==0):
        console.log( num,"is divisible by 8");
        break;

    case (num%3 !=0 &&  num%8 !=0):
        console.log( num,"is not divisible by 3 and 8");
        break;
        

    default:
        console.log("something went wrong");
        break;
    }
}