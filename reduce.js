const mynums = [3, 4, 5, 6];
// const mytotal=mynums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval is ${curval}`);
//     return acc+curval
// },0)

//Now try this is arrow function
const mytotal = mynums.reduce((acc, curval) => {
  return acc + curval;
}, 0);

// console.log(mytotal);

//------Lets do another exmaple
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 30000,
  },
  {
    itemName: "Laravel course",
    price: 35000,
  },
];

const total=shoppingCart.reduce((acc,item)=>{
    return acc+item.price;
},0);
console.log(total);