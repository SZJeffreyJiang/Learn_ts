console.log('Hello TS1')
let sum1:number=3
let sum2:number=4
console.log(sum1===sum2)
//运算符
// 与
console.log(2>1 && 2>3)
console.log(true && true)

// 或：
console.log(true || false)
console.log(3>=1 || 4>=8)

//非

console.log(!true)
console.log(!false || false)

//语句
//条件语句

// let isVIP: boolean = false
// if (isVIP){
//     console.log('你可以看VIP电影')
// }else{
//     console.log('你只能试看5分钟！')
// }

let age:number=17
if (age>=18){
    console.log('可以玩游戏了')
}else{
    console.log('回家看奥特曼')
}