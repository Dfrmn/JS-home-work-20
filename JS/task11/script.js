// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3 , 0 , 'a', 'b', 'c');
console.log(arr1);