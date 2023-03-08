const inputtednumber=[12,56,755,27,16,2,1104,65,88];

for(let i=0;i<inputtednumber.length;i++) {

     if(inputtednumber[i]%3 ==0 && inputtednumber[i]%8 ==0 ){

        console.log(inputtednumber[i],"is divisible by 3 and 8");
    }


    else if(inputtednumber[i]%3==0 ){

        console.log(inputtednumber[i],"is divisible by 3");
    }

   else if(inputtednumber[i]%8==0 ){

        console.log(inputtednumber[i],"is divisible by 8");
    }

    else {
         console.log(inputtednumber[i],"is not divisible by 3 and 8");
    }

   }