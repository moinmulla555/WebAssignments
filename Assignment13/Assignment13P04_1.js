

function max_num(arr){

    var max=0;
   
    for(let i=0;i<arr.length-1;i++) {
           
        

        if(i==0 || max<arr[i]){
            max=arr[i];
        };
     }

     return max;
}



function min_num(minarr){

    var min=0;

    for(let j=0;j<minarr.length-1;j++){

        if(j==0 || min>minarr[j]){

            min=minarr[j];
        }
    }

    return min;
}



const num=[12,58,65,85,35,75,6,24];

let result_max=max_num(num);
let result_min=min_num(num);

console.log("Minimum Number:"+result_min);
console.log("Maximum Number:" +result_max);

