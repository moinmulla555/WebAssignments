function Max2(arr){

    var max1=0;
     var max2=0;

     for(let i=0;i<=arr.length;i++){

         if(i==0){
           
            max1=arr[i];
            max2=arr[i];
            continue;
           }
         
         if(arr[i]>max1) {

            max1=arr[i];
         }
       }

       for(let i=0;i<arr.length;i++){

        if(arr[i]>max2 && arr[i]!=max1){
            
            max2=arr[i];
        }
       }

       return [max1,max2];

}


const Num=[12,58,65,85,35,75,6,24];

var result=Max2(Num);

console.log(result);


