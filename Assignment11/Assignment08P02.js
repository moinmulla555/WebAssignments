var num=7;
var temp=0;

for(let i=2;i<num;i++){

    if(num%i==0){
        temp=temp+1;
    }
}

if(temp>0) {

    console.log("Given number is not prime number");
}

else{
    console.log("Given number is prime number");
}