//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr1 = [1, 2, [3, 4], 5, [6, 7]];
let arr2 = arr1.filter(function(item){
    return Array.isArray(item)
 });

console.log(arr2);