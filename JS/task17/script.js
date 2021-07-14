// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
let arr1 = [1,-3, 5, 6,-7, 8, 9,-11];
let arr2 = arr1.filter(function(item){
    return item % 2 === 0; 
 });

console.log(arr2);