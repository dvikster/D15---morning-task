// выведите массив на страницу так, как показано ниже:
// 0 - 2
// 1 - 3
// выводите только те элементы, что больше 5-ти

var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
var task1 = '';

for (var i = 0; i < mas.length; i++) {
    // arr1[i] = 8;
    if (mas[i]>5){
    task1 += i +' - '+ mas[i] + '<br>';
    }
}
document.getElementById('task1').innerHTML = task1;


// Дан массив. Выведите его на страницу в формате:
// k1 *** 17w4

var arr = {
    "k1" : "17w4",
    "k2" : "1sfsg7",
    "k3" : "17nd",
    "k16" : "1237",
    "k14" : "1w37",
    "3k1" : "1wrw7"
}
task2 = '';
for(key in arr) {
    task2+=[key]+' : '+ arr[key] +'<br>';
}
document.getElementById('task2').innerHTML = task2;


// Дан массив. Выведите его в консоль
// Преобразуйте его в строку и сохраните в LocalStorage под именем 'mass'
// Считайте его из localStorage в переменнуд primer
// Преобразуйте primer из строки в массив
// Выведите в консоль

var arr2 = {
    "k1" : "17w4",
    "k2" : "1sfsg7",
    "k3" : "17nd",
    "k16" : "1237",
    "k14" : "1w37",
    "3k1" : "1wrw7"
}
console.log(arr2);
for(key in arr2) {
    console.log ([key]+' : '+ arr[key] +';')
}

localStorage.setItem('mass', JSON.stringify(arr2));
var primer = localStorage.getItem('mass');
console.log(primer);

var arr2Restore = JSON.parse(primer);
console.log(arr2Restore);


