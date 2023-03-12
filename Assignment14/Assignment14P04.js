const vagetable=["cocumber","pumpkin","tomato"];


vagetable.push("corn","greenpeas","string beans");

vagetable.unshift("potato","onion","peppers");

console.log(vagetable);

console.log("\n");

//task for slice
console.log("Task for slice");

//Task(1) for slice
const slice=vagetable.slice(3,6);
console.log(slice);



//Task(2) for slice
const slicetwo=vagetable.slice(7,9);
console.log(slicetwo);

//Takk(3)for slice
const slicethree=vagetable.slice(3,5);
slicethree.push("string beans");
console.log(slicethree);

console.log("\n");

//task for splice
console.log("Task for splice");

//task(1) for splice
vagetable.splice(1,0,"bringal");
 console.log(vagetable);

//task(2) for splice
 vagetable.splice(4,1,"carrot");
 console.log(vagetable);



