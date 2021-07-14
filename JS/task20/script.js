//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
let arr1 = [5,-3, 6,-5, 0,-7, 8, 9];
let arr2 = arr1.filter(function(item){
    return item < 0;
});

console.log(arr2.length);