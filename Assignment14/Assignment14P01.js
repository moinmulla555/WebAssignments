function palidrome (string){


    var rev="";
    var org_string=string;

    for(let i=string.length-1; i>=0;i--){

        rev+=string[i];
    }

     if(rev==org_string){

        console.log("given String is palidrome");
     }
     else{

        console.log("given String is not palidrome");
     }
}

const strFirst="NITIN";
palidrome(strFirst);

const strSecond="123454321";
palidrome(strSecond);

const strThird="madam";
palidrome(strThird);

const strfourth="Hello";
palidrome(strfourth);