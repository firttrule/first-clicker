// Создаем переменные для хранения счета и уровня
let score = 0;
let level = 1;

// Функция для обработки клика
function clickHandler() {
  score += level; // Увеличиваем счёт на значение уровня
  document.querySelector("#score").innerHTML = score + "$"; // Обновляем отображение счёта
  changeSkin(score); // Обновляем скин в зависимости от счёта
}

// function up1() {
//   score -= 100;
//   document.querySelector("#score").innerHTML = score + "$";
//   level++;
//   document.querySelector("#level").innerHTML = "Ваш уровень:" + " " + level;
// }

// function up2() {
//   score -= 400;
//   document.querySelector("#score").innerHTML = score + "$";
//   level += 2;
//   document.querySelector("#level").innerHTML = "Ваш уровень:" + " " + level;
// }

// function up3() {
//   score -= 900;
//   document.querySelector("#score").innerHTML = score + "$";
//   level += 3;
//   document.querySelector("#level").innerHTML = "Ваш уровень:" + " " + level;
// }

// function up4() {
//   score -= 2500;
//   document.querySelector("#score").innerHTML = score + "$";
//   level += 5;
//   document.querySelector("#level").innerHTML = "Ваш уровень:" + " " + level;
// }

// function up5() {
//   score -= 10000;
//   document.querySelector("#score").innerHTML = score + "$";
//   level += 10;
//   document.querySelector("#level").innerHTML = "Ваш уровень:" + " " + level;
// }

// Функция для сброса счёта и уровня
function reset() {
  score = 0; // Сбрасываем счёт и обновляем отображение
  document.querySelector("#score").innerHTML = score + "$";
  level = 1; // Сбрасываем уровень и обновляем отображение
  document.querySelector("#level").innerHTML = `Ваш уровень: ${level}`;
  skin = "skin1"; // Возвращаем начальный скин
}

// теперь обьявим новые переменные, чтобы не таскать везде длинные строки кода
let userScore = document.querySelector("#score");
let userLevel = document.querySelector("#level");

// заменили их в коде

// сделаем функцию повышения уровня универсальнее
function up(num) {
  score -= 100 * num ** 2;
  userScore.innerHTML = score + "$";
  level += num;
  userLevel.innerHTML = `Ваш уровень: ${level}`;
}

// добавим переменную для скина напишем функцию для смены скина капибары и вставим ее в функцию clickHandler()
let capybara = document.querySelector("#capybara"); // Находим элемент для отображения скина
let skin = "skin1";

// Функция для изменения скина
function changeSkin(s) {
  // Проверяем значение счёта и устанавливаем соответствующий скин
  if (s > 100 && s <= 500) {
    skin = "skin2";
    capybara.setAttribute("src", `../assets/images/${skin}.png`);
  } else if (s > 500 && s <= 1000) {
    skin = "skin3";
    capybara.setAttribute("src", `../assets/images/${skin}.png`);
  } else if (s > 1000 && s <= 5000) {
    skin = "skin4";
    capybara.setAttribute("src", `../assets/images/${skin}.png`);
  } else if (s > 5000 && s <= 10000) {
    skin = "skin5";
    capybara.setAttribute("src", `../assets/images/${skin}.png`);
  }
}

// объявим еще новых переменных и поменяем их, чтобы сделать код удобнее
function updateScore() {
  userScore.innerHTML = `${score}$`;
}

function updateUserLevel() {
  userLevel.innerHTML = `Ваш уровень: ${level}`;
}
// добавим автокликер
