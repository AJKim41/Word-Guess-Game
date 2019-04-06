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
  wins = 0,
  losses = 0,
  numberOfAttempts = 7,
  guess,
  body = document.querySelector("body"),
  gradient = "linear-gradient( rgba(0, 0, 0, .6), transparent)",
  audio = document.querySelector("iframe");
//console.log(correctGuesses);

function updateBackground(film, randomFilm) {
  switch (film[randomFilm]) {
    case film[0]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://yesofcorsa.com/wp-content/uploads/2017/08/Spirited-Away-Desktop-Wallpaper-For-PC.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/ptwcZ574blo?autoplay=1"
      );
      break;
    case film[1]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://wallpapermemory.com/uploads/517/my-neighbor-totoro-background-hd-1080p-259336.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/yyDWbUofrpc?autoplay=1"
      );
      break;
    case film[2]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://cdn-images-1.medium.com/max/2600/1*wwp_cOVi7HBUsbWCItHjMg.jpeg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/vD1yAEWpzeQ?autoplay=1"
      );
      break;
    case film[3]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(http://studioghiblimovies.com/wp-content/uploads/2018/05/36.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/y1hzHolsgCM?autoplay=1"
      );
      break;
    case film[4]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://www.gamersdecide.com/sites/default/files/authors/u148044/cat_07s16c52_t2.0246.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/NwoDrRCibhA?autoplay=1"
      );
      break;
    case film[5]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://allhdwallpapers.com/wp-content/uploads/2015/04/howl-moving-castle-4.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/UwxatzcYf9Q?autoplay=1"
      );
      break;
    case film[6]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(http://studioghiblimovies.com/wp-content/uploads/2018/04/the_secret_world_of_arrietty-16.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/cQMn1zaYDCM?autoplay=1"
      );
      break;
    case film[7]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://stmed.net/sites/default/files/styles/1440x900/public/ponyo-wallpapers-29809-6176326.jpg?itok=oAYz6oJ3);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/pRSz9xy_wV8?autoplay=1"
      );
      break;
    case film[8]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://stmed.net/sites/default/files/grave-of-the-fireflies-wallpapers-29588-5165925.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/0QF_OEeUIOE?autoplay=1"
      );
      break;
    case film[9]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://static.zerochan.net/Tenkuu.no.Shiro.Laputa.full.333296.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/nrTu7BAjjCA?autoplay=1"
      );
      break;
    case film[10]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://images7.alphacoders.com/520/520183.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/ZpENe4GOMAw?autoplay=1"
      );
      break;
    case film[11]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://stmed.net/sites/default/files/the-wind-rises-wallpapers-26150-8210657.png);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/qYNvTX_ioYo?autoplay=1"
      );
      break;
    case film[12]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(https://mithibookblog.files.wordpress.com/2012/10/singing-at-the-workshop.png);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/TOc_hk0OMQU?autoplay=1"
      );
      break;
    case film[13]:
      body.setAttribute(
        "style",
        "background:" +
          gradient +
          ", url(http://www.biocenit.cat/mypics/89/893195/mononoke-wallpaper.jpg);"
      );
      audio.setAttribute(
        "src",
        "https://www.youtube.com/embed/nBADF1LdP3g?autoplay=1"
      );
      break;
  }
}

updateBackground(film, randomFilm);
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
  return filmName.some(
    element => element.toLowerCase() === userGuess.toLowerCase()
  );
}

function getAllMatchingIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++)
    if (arr[i].toLowerCase() === val.toLowerCase()) indexes.push(i);
  return indexes;
}

function addCorrectInput(userGuess) {
  const indexes = getAllMatchingIndexes(filmName, userGuess);
  indexes.map(index => {
    correctGuesses.splice(index, 1, userGuess);
  });
  document.getElementById("correctLetters").innerHTML = correctGuesses.join(
    " "
  );
  setTimeout(() => gameWin(), 0);

  //console.log("correct guesses: ", correctGuesses);
}

function addIncorrectInput(userGuess) {
  if (
    checkGuess(userGuess) === false &&
    !incorrectGuesses.includes(userGuess)
  ) {
    incorrectGuesses.push(userGuess);
    --numberOfAttempts;
  }
  document.getElementById("incorrectLetters").innerHTML = incorrectGuesses.join(
    " "
  );
  document.getElementById("attempts").innerHTML = numberOfAttempts;
  setTimeout(() => gameLoss(numberOfAttempts), 0);
  //console.log("incorrect guesses: ", incorrectGuesses);
}

function gameLoss(numberOfAttempts) {
  if (numberOfAttempts === 0) {
    ++losses;
    document.getElementById("losses").innerHTML = losses;
    setTimeout(() => {
      if (confirm("Game Over! Play new game?")) {
        return resetGame();
      }
    }, 100);
  }
}

function gameWin() {
  if (
    correctGuesses
      .map(letter => (letter === "&#160;" ? " " : letter))
      .toString()
      .toLowerCase() === filmName.toString().toLowerCase()
  ) {
    ++wins;
    document.getElementById("wins").innerHTML = wins;
    setTimeout(() => {
      if (confirm("You Win! Play new game?")) {
        return resetGame();
      }
    }, 100);
  }
}

function resetGame() {
  newRandomFilm = Math.floor(Math.random() * film.length);
  filmName = film[newRandomFilm].split("");
  numberOfAttempts = 7;
  //console.log(film);
  //console.log(filmName[newRandomFilm]);
  correctGuesses = getGuessStack(filmName.length, filmName);
  incorrectGuesses = [];
  document.getElementById("correctLetters").innerHTML = correctGuesses.join(
    " "
  );
  document.getElementById("incorrectLetters").innerHTML = "";
  document.getElementById("attempts").innerHTML = numberOfAttempts;
  updateBackground(film, newRandomFilm);
}

function checkInputAndGuess(letterGuess) {
  if (
    /[A-Za-z]/i.test(letterGuess) &&
    letterGuess.length <= 1 &&
    numberOfAttempts > 0
  ) {
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
