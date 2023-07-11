let playButton = document.getElementById("play-Button");
let center = document.getElementById("center");
let oneButton = document.getElementById("one-Button");
let twoButton = document.getElementById("two-Button");
let threeButton = document.getElementById("three-Button");
let figurejumping = document.getElementById("figure-jumping");
let keyboard = document.getElementById("keyboard");
let choose = document.getElementById("choose");
let countdown = document.getElementById("count-down");
let next = document.getElementById("next");
let startCount = document.getElementById("start-count");
let game = document.getElementById("game")
let highScore = document.getElementById("high-score")
let infoText = document.getElementById("info-text")
let input = document.getElementById("input")
let scoreEl = document.getElementById("score")
let timeEl = document.getElementById("time")
let gameOver = document.getElementById("game-over")
let menu = document.getElementById("menu")
let finalscore = document.getElementById("final-score")
let oneTime = document.getElementById("one-time")
let finish = document.getElementById("finish")
let menu2 = document.getElementById("menu2")

playButton.addEventListener("click", startGame);
oneButton.addEventListener("click", keyboardPart);
twoButton.addEventListener("click", gamePart);
threeButton.addEventListener("click", informationPart);
menu.addEventListener("click", restart)
menu2.addEventListener("click", restart2)

console.log(highScore)
function startGame() {
  center.style.display = "none";
  choose.style.display = "block";
}

function keyboardPart() {
  let falsEl;
  choose.style.display = "none";
  figurejumping.style.display = "none";
  keyboard.style.display = "block";
  console.log(letter);

  let oneLetter = randomLetter()
  let letterEl = document.getElementById(oneLetter)
  letterEl.classList.add("selected")

  document.addEventListener("keyup", function (e) {
    if(falsEl){
      setTimeout(()=> falsEl.classList.remove("hit"), 50)
    }
    if (e.code == oneLetter) {
      letterEl.classList.remove("selected")
      oneLetter = randomLetter()
      letterEl = document.getElementById(oneLetter)
      letterEl.classList.add("selected")

    } else {
      falsEl = document.getElementById(e.code)
      falsEl.classList.add("hit")
      
    }



  })




  function randomLetter() {
    let index = Math.floor(Math.random() * letter.length)
    return letter[index]
  }


}

function gamePart() {
  choose.style.display = "none";
  figurejumping.style.display = "none";
  countdown.style.display = "block";

  let id = setInterval(function time() {
    if (startCount.innerHTML == 0) {
      clearInterval(id);

      countdown.style.display = "none";
      next.style.display = "block";
      generalGame()
    } else {
      startCount.innerHTML = startCount.innerHTML - 1;
    }
  }, 1000);

}
function generalGame() {
  let time = 5;
  let oneWord;
  let score = 0;
  let hScore;
  if (localStorage.length == 0) {
    localStorage.score = 0;
  }
  scoreEl.innerHTML = score

  let number = setInterval(function () {
    if (time > 0) {

      time--;
      timeEl.innerHTML = time
    } else {
      clearInterval(number)
      gameover()
    }
  }, 1000)
  hScore = highScore.innerHTML
  oneWord = randomWord()
  infoText.innerHTML = oneWord
  highScore.innerHTML = localStorage.score
  input.onchange = function () {
    if (input.value == oneWord) {
      score++;
      time += 4
      timeEl.innerHTML = time
      console.log()
      if (score >= hScore) {
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore
      }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
    } else {
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
      time -= 2
      timeEl.innerHTML = time
    }
  }
}
function randomWord() {
  let i = Math.floor(Math.random() * words.length)
  return words[i]
}

function gameover() {
  gameOver.style.display = "block";
  menu.style.display = "block";
  next.style.display = "none"
  console.log()
  finalscore.innerHTML = scoreEl.innerHTML
  
}
function finishing() {
  console.log("rtyuki");
  oneTime.style.display = "flex";
  menu2.style.display = "block";
  next.style.display = "none"
  console.log()
  finish.innerHTML = scoreEl.innerHTML
}

function restart() {
  center.style.display = "block";
  playButton.style.display = "block";
  figurejumping.style.display = "block";
  menu.style.display = "none";
  gameOver.style.display = "none";
}
function restart2() {
  center.style.display = "block";
  playButton.style.display = "block";
  figurejumping.style.display = "block";
  menu.style.display = "none";
  oneTime.style.display = "none";
 
}

function informationPart() {
  choose.style.display = "none";
  figurejumping.style.display = "none";
  next.style.display = "block";

  let time = 60;
  let oneWord;
  let score = 0;
  let hScore;
  if (localStorage.length == 0) {
    localStorage.score = 0;
  }
  scoreEl.innerHTML = score

  let number = setInterval(function () {
    if (time > 0) {

      time--;
      timeEl.innerHTML = time
    } else {
      clearInterval(number)
      finishing()
    }
  }, 1000)
  hScore = highScore.innerHTML
  oneWord = randomWord()
  infoText.innerHTML = oneWord
  highScore.innerHTML = localStorage.score
  input.onchange = function () {
    if (input.value == oneWord) {
      score++;
      // time += 4
      timeEl.innerHTML = time
      console.log()
      if (score >= hScore) {
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore
      }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
    } else {
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
      // time -= 2
      timeEl.innerHTML = time
    }
  }
}
