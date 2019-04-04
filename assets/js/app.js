var letterGuess,
  film = [
    "Spirited Away",
    "My Neighbor Totoro",
    "Kikis Delivery Service",
    "Porco Rosso",
    "The Cat Returns",
    "Howls Moving Castle",
    "Arrietty",
    "Ponyo",
    "Grave of the Fireflies",
    "Castle in the Sky",
    "From Up on Poppy Hill",
    "The Wind Rises",
    "Whisper of the Heart",
    "Princess Mononoke"
  ],
  randomFilm = Math.floor(Math.random() * film.length),
  filmName = film[randomFilm].split(""),
  correctGuesses = getGuessStack(filmName.length, filmName),
  incorrectGuesses = new Array(),
  guess;
console.log(correctGuesses);

function getGuessStack(nameLength, filmName) {
  return new Array(nameLength)
    .fill("_")
    .map((placeHolder, idx) => (filmName[idx] !== " " ? "_" : "&#160;"));
}

setTimeout(
  () =>
    (document.getElementById("correctLetters").innerHTML = correctGuesses.join(
      " "
    )),
  0
);

function checkGuess(userGuess) {
  return filmName.some(element => element === userGuess);
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function addCorrectInput(userGuess) {
  const indexes = getAllIndexes(filmName, userGuess);
  indexes.map(index => {
    correctGuesses.splice(index, 1, userGuess);
  });
  document.getElementById("correctLetters").innerHTML = correctGuesses.join(
    " "
  );
  console.log("correct guesses: ", correctGuesses);
}

function addIncorrectInput(userGuess) {
  if (
    checkGuess(userGuess) === false &&
    !incorrectGuesses.includes(userGuess)
  ) {
    incorrectGuesses.push(userGuess);
  }
  document.getElementById("incorrectLetters").innerHTML = incorrectGuesses.join(
    " "
  );
  console.log("incorrect guesses: ", incorrectGuesses);
}

function checkInputAndGuess(letterGuess) {
  if (/[A-Za-z]/i.test(letterGuess) && letterGuess.length <= 1) {
    if (checkGuess(letterGuess)) {
      addCorrectInput(letterGuess);
    } else {
      addIncorrectInput(letterGuess);
    }
  }
}

document.onkeyup = function(event) {
  letterGuess = event.key;
  checkInputAndGuess(letterGuess);
};
