//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arr1 = [1,-3, 5, 6,-7, 8, 9,-11];
arr2 = arr1.filter(function (item){
    return item < 0; 
})
console.log(arr2);