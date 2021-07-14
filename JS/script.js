//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
alert(arr1.concat(arr2));

// //2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr1 = [1, 2, 3];
let arr2 = arr1.reverse();
console.log(arr2);

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr1 = [1, 2, 3];
let arr2 = arr1.push(4, 5, 6);
console.log(arr2);  

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr1 = [1, 2, 3];
let arr2 = arr1.unshift(4, 5, 6);
console.log(arr1); 

//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr1 = ['js', 'css', 'jq'];
let arr2 = arr1.shift();
console.log(arr2);

//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr1 = ['js', 'css', 'jq'];
let arr2 = arr1.pop();
console.log(arr2);

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.splice(0, 3);
console.log(arr2);

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 2);
console.log(arr1);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
console.log(arr1);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.splice(1, 3);
console.log(arr2);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c');
console.log(arr1);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 0, 'a', 'b');
arr1.splice(6, 0, 'c');
arr1.push('e');
console.log(arr1);

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr1 = [3, 4, 1, 2, 7];
arr1.sort();
console.log(arr1);

//14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(function(item){
    sum += item;
});

console.log(sum);


//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr1 = [5, 6, 7, 8, 9];
let arr2 = arr1.map(function(item){
    return Math.pow(item, 2); 
 });

console.log(arr2);


//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arr1 = [1,-3, 5, 6,-7, 8, 9,-11];
let arr2 = arr1.filter(function(item){
    return item < 0; 
 });

console.log(arr2);


// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
let arr1 = [1,-3, 5, 6,-7, 8, 9,-11];
let arr2 = arr1.filter(function(item){
    return item % 2 === 0; 
 });

console.log(arr2);


//18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr1 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let arr2 = arr1.filter(function(item){
    return item.length > 5; 
 });

console.log(arr2);


//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr1 = [1, 2, [3, 4], 5, [6, 7]];
let arr2 = arr1.filter(function(item){
    return Array.isArray(item)
 });

console.log(arr2);


//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
let arr1 = [5,-3, 6,-5, 0,-7, 8, 9];
let arr2 = arr1.filter(function(item){
    return item < 0;
});

console.log(arr2.length);