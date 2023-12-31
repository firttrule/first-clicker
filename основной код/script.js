let userScore = document.querySelector("#score");
let userLevel = document.querySelector("#level");
let userAutoScore = document.querySelector("#autoScore");
let capybara = document.querySelector("#capybara");
let score = 0;
let level = 1;
let autoScore = 0;
let skin = "skin1";

if (localStorage.getItem("score")) {
  score = JSON.parse(localStorage.getItem("score"));
  userScore.innerHTML = score + "$";
}

if (localStorage.getItem("level")) {
  level = JSON.parse(localStorage.getItem("level"));
  userLevel.innerHTML = "Ваш уровень: " + level;
}

if (localStorage.getItem("skin")) {
  skin = localStorage.getItem("skin");
  capybara.setAttribute("src", "../assets/images/" + skin + ".png");
}

function clickHandler() {
  score += level;
  updateUserScore();
  changeSkin(score);
  localStorage.setItem("score", score);
}

function up(num) {
  if (score < 100 * num ** 2) {
    alert("Вам не хватает монет для улучшения, кликайте больше");
  } else {
    score -= 100 * num ** 2;
    userScore.innerHTML = score + "$";
    level += num;
    updateUserLevel();
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
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

  capybara.setAttribute("src", `../assets/images/${skin}.png`);
  localStorage.setItem("skin", skin);
}

function reset() {
  score = 0;
  updateUserScore();
  level = 1;
  updateUserLevel();
  skin = "skin1";
  changeSkin(score);
  autoScore = 0;

  localStorage.removeItem("score");
  localStorage.removeItem("level");
  localStorage.removeItem("skin");
  localStorage.removeItem("autoScore");
}

function updateUserScore() {
  userScore.innerHTML = `${score}$`;
}

function updateUserLevel() {
  userLevel.innerHTML = `Ваш уровень: ${level}`;
}

function updateUserAutoScore() {
  userAutoScore.innerHTML = `Автоклик: ${autoScore}$`;
}

// автоклик
function autoClick() {
  setTimeout(() => {
    score += autoScore;
    updateUserScore();
    changeSkin(score);
    localStorage.setItem("score", score);
    autoClick();
  }, 1000);
}

function buyAutoClick(num) {
  if (score < 1000 * num) {
    alert("Вам не хватает монет для улучшения, кликайте больше");
  } else {
    score -= 1000 * num;
    updateUserScore();
    autoScore += num;
    updateUserAutoScore();
    localStorage.setItem("score", score);
    localStorage.setItem("autoScore", autoScore);
    autoClick();
  }
}
