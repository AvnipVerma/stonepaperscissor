
const choices = ["rock", "paper", "scissor"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let rock = document.getElementById("fist");
let paper = document.getElementById("hand");
let scissor = document.getElementById("scissor");

let userScore = 0;
function changeUserScore(uscore) {
  document.getElementById("ys").innerHTML = uscore;
}
let pcs = 0;
function changePcs(pscore) {
  document.getElementById("cs").innerHTML = pscore;
}

let userrock = document.getElementById("fistwinuser");
let userpaper = document.getElementById("handwinuser");
let userscissor = document.getElementById("scissorwinuser");

let pcrock = document.getElementById("fistwinpc");
let pcpaper = document.getElementById("handwinpc");
let pcscissor = document.getElementById("scissorwinpc");

const footer = document.getElementById("foot");
const left = document.getElementById("leftd");
const right = document.getElementById("rightd");
const text3 = document.getElementById("result");

const nextbutton = document.getElementById("nextbutton");

const container1 = document.getElementById("container1");
const cont2 = document.getElementById("cont2");

let playbutton = document.getElementById("playbutton");

const toggleBtn = document.getElementById('btn');
const toggleDiv = document.getElementById('rule');
const x = document.getElementById('x');

toggleBtn.addEventListener('click', () => {
  console.log('clicked');
  toggleDiv.classList.remove('hidden');
  x.classList.remove('hidden');
});

x.addEventListener('click', () => {
  toggleDiv.classList.add('hidden');
  x.classList.add('hidden');
});

playbutton.addEventListener("click", function () {
  playbutton.classList.add("hidden");
  nextbutton.classList.add("hidden");
  text3.classList.add("hidden");
  footer.classList.remove("hidden");
  left.classList.add("hidden");
  right.classList.add("hidden");

  userrock.classList.add("hidden");
  userrock.classList.remove("rounded-gradient-borders");

  userpaper.classList.add("hidden");
  userpaper.classList.remove("rounded-gradient-borders");

  userscissor.classList.add("hidden");
  userscissor.classList.remove("rounded-gradient-borders");

  pcrock.classList.add("hidden");
  pcrock.classList.remove("rounded-gradient-borders");

  pcpaper.classList.add("hidden");
  pcpaper.classList.remove("rounded-gradient-borders");

  pcscissor.classList.add("hidden");
  pcscissor.classList.remove("rounded-gradient-borders");

});



function afterclick(){
  text3.classList.remove("hidden");
  playbutton.classList.remove("hidden");
  footer.classList.add("hidden");
  left.classList.remove("hidden");
  right.classList.remove("hidden");
}

function win () {
  document.getElementById("text1").innerHTML = "You WIN";
  playbutton.innerHTML = "Play Again";
  nextbutton.classList.remove("hidden");
}

function lose () {
  document.getElementById("text1").innerHTML = "You LOSE";
  playbutton.innerHTML = "Play Again";
}

function tie () {
  document.getElementById("text1").innerHTML = "Tie UP";
  playbutton.innerHTML = "Replay";
}

nextbutton.addEventListener("click", function () {
  nextbutton.classList.add("hidden");
  container1.classList.add("hidden");
  cont2.classList.remove("hidden");
});

rock.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userrock.classList.remove("hidden");
  if(pc === "rock"){
    pcrock.classList.remove("hidden");
    tie();
  }else if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    pcpaper.classList.add("rounded-gradient-borders");
    lose();
    pcs++;
    changePcs(pcs);
  }else{
    pcscissor.classList.remove("hidden");
    userrock.classList.add("rounded-gradient-borders");
    win();
    userScore++;
    changeUserScore(userScore);
  }
});

paper.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userpaper.classList.remove("hidden");
  if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    tie();
  }else if(pc === "scissor"){
    pcscissor.classList.remove("hidden");
    pcscissor.classList.add("rounded-gradient-borders");
    lose();
    pcs++;
    changePcs(pcs);
  }else{
    win();
    userpaper.classList.add("rounded-gradient-borders");
    pcrock.classList.remove("hidden");
    userScore++;
    changeUserScore(userScore);
  }
});

scissor.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userscissor.classList.remove("hidden");
  if(pc === "scissors"){
    pcscissor.classList.remove("hidden");
    tie();
  }else if(pc === "rock"){
    lose();
    pcs++;
    changePcs(pcs);
    pcrock.classList.remove("hidden");
    pcrock.classList.add("rounded-gradient-borders");
  }else{
    win();
    userScore++;
    changeUserScore(userScore);
    pcpaper.classList.remove("hidden");
    userscissor.classList.add("rounded-gradient-borders");
  }
});
