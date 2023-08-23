let userScore = document.querySelector("#score");
let userLevel = document.querySelector("#level");
let capybara = document.querySelector("#capybara");
let score = 0;
let level = 1;
let skin = "skin1";

function clickHandler() {
  score += level;
  updateScore();
  changeSkin(score);
}

function up(num) {
  if (score < 100 * num ** 2) {
    alert("Вам не хватает монет для улучшения, кликайте больше");
  } else {
    score -= 100 * num ** 2;
    userScore.innerHTML = score + "$";
    level += num;
    updateUserLevel();
  }
}

function changeSkin(s) {
  if (s > 100 && s <= 500) {
    skin = "skin2";
  } else if (s > 500 && s <= 1000) {
    skin = "skin3";
  } else if (s > 1000 && s <= 5000) {
    skin = "skin4";
  } else if (s > 5000 && s <= 10000) {
    skin = "skin5";
  }
  capybara.setAttribute("src", `assets/images/${skin}.png`);
}

function reset() {
  score = 0;
  updateScore();
  level = 1;
  updateUserLevel();
  skin = "skin1";
}

function updateScore() {
  userScore.innerHTML = `${score}$`;
}

function updateUserLevel() {
  userLevel.innerHTML = `Ваш уровень: ${level}`;
}
