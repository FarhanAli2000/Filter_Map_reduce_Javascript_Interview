const mynumber = [1, 2, 3, 4, 5, 6, 7];
// const data=mynumber.map((item)=>{
// return item+2
// })
// console.log(data);

let numbers = mynumber
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 2;
  })
  .filter((num) => {
    return num > 50;
  });

console.log(numbers);
