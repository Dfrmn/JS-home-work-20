// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 0, 'a', 'b');
arr1.splice(6, 0, 'c');
arr1.push('e');
console.log(arr1);