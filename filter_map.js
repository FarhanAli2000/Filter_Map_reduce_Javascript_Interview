 const coding=['js','python','java','cpp' ]
//  let name=coding.forEach((item)=>{
// console.log(item);
// return item;
//  })
//  console.log(name);

//-----For Each never return a value so in this cse we use filter

const nums=[34,54,12,21,98]
// let newNumber=nums.filter((num)=>num>30)
// console.log(newNumber);

let myside=nums.filter((nums)=>{
return nums>30

})
console.log(myside);