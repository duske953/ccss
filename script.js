(function () {
  const text = document.querySelector(".pad");
  text.textContent = `${text.textContent[0]}${text.textContent[1].padEnd(
    3,
    "*"
  )}${text.textContent.slice(-4)}`;
})();
const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const plac = document.querySelector(".ge-p");

let timer,
  timeoutval = 1000;
letter.forEach(function (let) {
  letter.push(let.toUpperCase());
});
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = [
  "@",
  "!",
  "#",
  "%",
  "&",
  "+",
  "-",
  "_",
  ")",
  "(",
  "*",
  ">",
  "?",
  "~",
];

const letterVal = document.querySelector(".letters");
const numberVal = document.querySelector(".numbers");
const symbolVal = document.querySelector(".symbols");
let password = [];

let ppword = [];

function Letter(letters) {
  const answer = Number(letterVal.value);
  for (let i = 1; i <= answer; i++) {
    const y = Math.floor(Math.random() * letters.length);
    password.push(letters[y]);
  }
  return password;
}

function numbber(number) {
  const answer = Number(numberVal.value);
  for (let i = 1; i <= answer; i++) {
    const y = Math.floor(Math.random() * number.length);
    password.push(number[y]);
  }
  return password;
}

function Symbol(symbol) {
  const answer = Number(symbolVal.value);
  for (let i = 1; i <= answer; i++) {
    const y = Math.floor(Math.random() * symbol.length);
    password.push(symbol[y]);
  }
  return password;
}

function Arr(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const newp = ([arr[i], arr[j]] = [arr[j], arr[i]]);
    newP.push(newp[0]);
  }
  return newP;
}
var timeout = setTimeout(function () {}, 0);

let ti = 1000,
  interva;

function WaitTim() {
  ti += 1000;
  if (ti <= 3000) {
    plac.placeholder = "Waiting for input...";
  } else {
    plac.placeholder = "...";
    ti = 1000;
  }
}

interva = setInterval(WaitTim, 1000);
WaitTim();

function press() {
  document.querySelectorAll(".p").forEach(function (ele) {
    WaitTim();
    ele.addEventListener("keyup", (e) => {
      const le = Number(letterVal.value);
      const nu = Number(numberVal.value);
      const sy = Number(symbolVal.value);
      document.querySelector(".ge-p").value = "";
      if (Number.isFinite(le) && Number.isFinite(nu) && Number.isFinite(sy)) {
        if (
          numberVal.value.trimStart().length === 0 &&
          letterVal.value.trimStart().length === 0 &&
          symbolVal.value.trimStart().length === 0
        ) {
        }
        if (
          letterVal.value.trimStart().length !== 0 ||
          numberVal.value.trimStart().length !== 0 ||
          symbolVal.value.trimStart().length !== 0
        ) {
          plac.placeholder = "generating password...";
          clearInterval(interva);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          WaitTim();
          interva = setInterval(WaitTim, 1500);
          // plac.placeholder = "Waiting...";
        }, 3000);
      } else {
        plac.placeholder = `The values given are not valid`;
        clearTimeout(timeout);
        clearInterval(interva);
      }
    });
  });
}

press();
t = 3000;
let newP = [];
let np = [];
let n;
document.querySelector(".btn-submit").addEventListener("click", () => {
  if (
    Number.isFinite(+letterVal.value) &&
    Number.isFinite(+numberVal.value) &&
    Number.isFinite(+symbolVal.value) &&
    (+letterVal.value || +numberVal.value || symbolVal.value)
  ) {
    Letter(letter);
    numbber(numbers);
    Symbol(symbols);
    np.push(password);
    n = [...np.splice(-1)];
    document.querySelector(".ge-p").value = `${Arr(n.flat()).join("")}`;
    clearInterval(interva);
    plac.placeholder = " ";
    password = [];
    Detect();
    newP = [];
  }
});
const btnCopy = document.querySelector(".sm");
const gep = document.querySelector(".ge-p");
var time = setTimeout(function () {}, 0);

function Detect() {
  if (gep.value.length !== 0) {
    gep.addEventListener("mouseover", function () {
      gep.select();
      gep.setSelectionRange(0, 99999);
      document.execCommand("copy");
    });
  }
}

document.querySelector(".btn-shuffle").addEventListener("click", () => {
  Detect();
  clearInterval(interva);
  if (n != undefined) {
    const nen = n.flat();
    document.querySelector(".ge-p").value = `${Arr(nen).join("")}`;
  }
  newP = [];
});
