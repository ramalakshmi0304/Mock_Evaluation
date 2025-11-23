function sum(...num){
const sum= num.reduce((acc,num)=>((acc+num),0)
);

return sum;

}
 console.log(sum(1,2,3,4))

