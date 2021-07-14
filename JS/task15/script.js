//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr1 = [5, 6, 7, 8, 9];
let pow = arr1.map(function (item){
    return Math.pow(item , 2);
})
console.log(pow);