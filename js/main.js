// ! Часть 5.1. Пишем на JavaScript
// document.write("Hello"); // Hello
// document.write(25 < 15); // false
// document.write('cat' == 'cat'); // true
// document.write("cat" == "table"); // false
// todo Практика 1:
/*
Выведите на экран любимую фразу из песни. Выведите на экран число 4. Выведите на экран сравнения: Строки "окно" == "окно"; 23 > 6; 14 < 4; 
Строки "курица" == "компьютер"

document.write("Не отрекаются любя"); //Не отрекаются любя
document.write(4 == 4); // true
document.write("окно" == "окно"); // true
document.write(23 > 6); //true
document.write(14 < 4); // false
document.write("курица" == "компьютер"); // false
*/

// ! == Часть 5.2. Переменные в JavaScript -->
/*let age = 5;
document.write(age, ' ');
let catName = "Behemoth";
document.write(catName);
let weightInKg = 12;
let ageInYears = 7;
let heightInSm = 12;
let widthInSm = 20;
document.write(weightInKg, ageInYears, heightInSm, widthInSm); // 12 7 12 20
*/
// todo Практика 2:
/*
Создайте 4 переменных:
Ваше имя
Ваш возраст
Ваш вес
Ваш рост 
Выведите эти данные на экран.
*/
// let myName = 'Гульнара';
// let ageInYears = 59;
// let weightInKg = 66;
// let heightInSm = 1.75;
// document.write(myName, ageInYears, weightInKg, heightInSm); // Гульнара59661.75

// ! == Часть 6. 1. Условный оператор if
// let num =5;
// if (num > 0) {
//     document.write('число положительное'); // true
// }
// let number = -2;
// if (number > 0) {
//   document.write("число положительное"); // false, поэтому код не выполняется в if{}
// }
// todo Практика 3:
/*
Создайте переменную, которая будет хранить баллы за экзамен. Запишите в переменную любое число. Если это число больше 50, то на экране появиться сообщение "Вы набрали достаточно баллов и сдали экзамен!"
let points = 66;
if (points > 50) {
  document.write("Вы набрали достаточно баллов и сдали экзамен!"); // true
} */
//! ==  Часть 6.2. Условный оператор if-else
// let num = 6;
// if (num > 0) {
//     document.write('число положительное'); // true
// } else {
//     document.write('число не положительное'); // false
// }

// let number = -5;
// if (number > 0) {
//     document.write("число положительное");
// } else {
//   document.write("число отрицательное"); // true число отрицательное
// }

// let weather = "San";
// if (weather == "San") {
//   document.write("Пойду гулять"); // true Пойду гулять
// } else {
//     document.write("Останусь дома"); // false
// }

// let weather1 = "Rain";
// if (weather1 == "San") {
//   document.write("Пойду гулять"); // false
// } else {
//   document.write("Останусь дома"); // true Останусь дома
// }

// todo Практика 4:
/* 
Создавайте переменную, которая будет хранить в себе цвет светофора. Сделайте условие: если цвет светофора зеленый, то на экране будет сообщение "Можно переходить дорогу". Иначе (при другом цвете) сообщение будет Нельзя переходить дорогу".
let color = "green"
if (color == "green") {
  document.write("Можно переходить дорогу"); // true Можно переходить дорогу
} else {
  document.write("Нельзя переходить дорогу"); // false Нельзя переходить дорогу
}*/
// ! == Часть 7. 1. Управляем версткой через JS. Часть 7. 2. Меняем Солнце на Луну
let btn = document.querySelector(".button");
let sun = document.querySelector(".sun");
let sky = document.querySelector(".sky");

btn.addEventListener("click", function () {
  if (btn.innerHTML == "включить луну") {
    sky.style.backgroundImage =
      "url(https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_noch_zvezdy_125858_2560x1440.jpg)";

    sky.style.backgroundRepeat = "no-repeat";
    sky.style.backgroundSize = "cover";

    sun.style.backgroundColor = "#c5c28d";
    btn.innerHTML = "включить солнце";
  } else {
    sky.style.backgroundImage = "linear-gradient(to bottom, #65a9f0, #ebb2b1)";
    btn.innerHTML = "включить луну";
    sun.style.backgroundColor = "#f5e555";
  }
});


