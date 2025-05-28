// //* Week 1

// let x = 25;
// let y = 10;

// console.log('Product:',x*y);
// console.log('Sum:',x+y);
// console.log('Difference:',x-y);
// //*-----------------------------------------------
        
//* Week 2
// var year = 2080;
// if(year==2082){
//     console.log('Tapai 2082 ma hunuhunchha');
// }
// else if (year>2082){
//     console.log('Yo aauney year ma ke cha tapai ko plan?');
// }
// else if(year<2082){
//   console.log(`${year} Yo bitisake ko samay ho`);
// } 
// // if(x>y){
// //     console.log(x +' is greater than '+ y);
// // }else if(x<y){
// //     console.log(x + ' is less than ' + y); }
// num = prompt("Kun number ko table chahinchha?");
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " * " + i + " = " + num * i);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(num + " * " + i + " = " + num * i);
//   i++;
// }

// for(let i = 1; i <= 20; i++){
//   if(i%2==0)
//   {
//     continue;
//   }
//   console.log(i + " is a odd number. ");
// }
//* ------------------------------------------------
// //* Week 3
// function product(a,b)
// {
//   return a*b;
// }

// // product(5,4);
// console.log(`the product is ${product(5,4)}`);  

// function table(num)
// {
//   for(let i = 1; i<=10; ++i)
//   {
//     console.log(num + "*" + i + "=" + num*i)
//   }
// }

// console.log(table(25));

// const table = (a) => {
//   for(let i = 1; i<=10; ++i)
//   {
//     console.log(a + "*" + i + "=" + a*i)
//   }
// } 
//* ------------------------------------------------
// //* Week 4
let arr =['sanni','sita','ram','hari'];

console.table(arr);

arr.push('hehehe');
console.table(arr);
arr.pop();
arr.pop();

arr.shift();
arr.unshift('meow');
console.table(arr);