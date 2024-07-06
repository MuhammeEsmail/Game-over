// API
let mmorpgRow = document.querySelector('#mmorpg')
let shooterRow = document.querySelector('#shooter')
let sailingRow = document.querySelector('#sailing')
let permadeathRow = document.querySelector('#permadeath')
let superheroRow = document.querySelector('#superhero')
let pixelRow = document.querySelector('#pixel')
let mmorpg = [];
let shooter = [];
let sailing = [];
let permadeath = [];
let superhero = [];
let pixel = [];
let categoryName;
let gameImage = document.querySelector('.gameImage')
let gameTitle = document.querySelector('.gameTitle')
let gameCategory = document.querySelector('.gameCategory')
let gameStatus = document.querySelector('.gameStatus')
let gamePlatform = document.querySelector('.gamePlatform')
let gameDescreption = document.querySelector('.gameDescription')
let gameUrl = document.querySelector('#gameUrl')
let allGames = document.querySelector('#allGames')
let oneGame = document.querySelector('#oneGame')
let closGame = document.querySelector('#closeGame')

// get mmorpg api
async function mmorpgGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg`,
    options
  );
  mmorpg = await data.json();
  console.log(mmorpg);
  mmorpgDisplay()
}

// get shooter api
async function shooterGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`,
    options
  );
  shooter = await data.json();
  shooterDisplay()
}

// get sailing api
async function sailingGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing`,
    options
  );
  sailing = await data.json();
  sailingDisplay()
}

// get permadeath api
async function permadeathGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath`,
    options
  );
  permadeath = await data.json();
  permadeathDisplay()
}

// get superhero api
async function superheroGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero`,
    options
  );
  superhero = await data.json();
  console.log(superhero);
  superheroDisplay()
}

// get pixel api
async function pixelGames() {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel`,
    options
  );
  pixel = await data.json();
  pixelDisplay()
}

// display mmorpg api
function mmorpgDisplay() {
  let box = "";
  for (let i = 0; i < mmorpg.length; i++) {
    box += `<div class="col-md-3">
                                <div class="card border-2" onclick="myGame(${mmorpg[i].id})">
                                    <div class="card-body text-white">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${mmorpg[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${mmorpg[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${mmorpg[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${mmorpg[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${mmorpg[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    mmorpgRow.innerHTML=box;
  }
}

// display shooter api
function shooterDisplay() {
  let box = "";
  for (let i = 0; i < shooter.length; i++) {
    box += `<div class="col-md-3">
                                <div class="card border-2" onclick="myGame(${shooter[i].id})">
                                    <div class="card-body text-white">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${shooter[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${shooter[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${shooter[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${shooter[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${shooter[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    shooterRow.innerHTML=box;
  }
}

// display sailing api
function sailingDisplay() {
  let box = "";
  for (let i = 0; i < sailing.length; i++) {
    box += `<div class="col-md-3">
                                <div class="card border-2" onclick="myGame(${sailing[i].id})">
                                    <div class="card-body text-white">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${sailing[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${sailing[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${sailing[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${sailing[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${sailing[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    sailingRow.innerHTML=box;
  }
}

// display permadeath api
function permadeathDisplay() {
  let box = "";
  for (let i = 0; i < permadeath.length; i++) {
    box += `<div class="col-md-3">
                                <div class="card border-2">
                                    <div class="card-body text-white" onclick="myGame(${permadeath[i].id})">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${permadeath[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${permadeath[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${permadeath[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${permadeath[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${permadeath[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    permadeathRow.innerHTML=box;
  }
}

// display superhero api
function superheroDisplay() {
  let box = "";
  for (let i = 0; i < superhero.length; i++) {
    box += `<div class="col-md-3">
                                <div class="card border-2" onclick="myGame(${superhero[i].id})">
                                    <div class="card-body text-white">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${superhero[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${superhero[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${superhero[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${superhero[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${superhero[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    superheroRow.innerHTML=box;
  }
}

// display pixel api
function pixelDisplay() {
  let box = "";
  for (let i = 0; i < pixel.length; i++) {
    box += `<div class="col-md-3" onclick="myGame(${pixel[i].id})">
                                <div class="card border-2">
                                    <div class="card-body text-white">
                                      <div class="card-image rounded-2 overflow-hidden position-relative">
                                        <div class="overlay position-absolute w-100 bg-light"></div>
                                       <img class="w-100" src="${pixel[i].thumbnail}" alt="game image">
                                      </div>
                                      <div class="game-name mt-3 d-flex justify-content-between align-items-center">
                                        <h6>${pixel[i].title}</h6>
                                        <div class="game-status bg-secondary px-3 py-2 rounded-3">Free</div>
                                      </div>
                                      <div class="game-description text-secondary text-center mt-2 py-2">
                                        ${pixel[i].short_description}
                                      </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between align-items-center">
                                        <p class="bg-secondary px-2 py-1 rounded-3">${pixel[i].genre}</p>
                                        <p class="bg-secondary px-2 py-1 rounded-3">${pixel[i].platform}</p>
                                    </div>
                                </div>
                            </div>`;

    pixelRow.innerHTML=box;
  }
}

// get game data
async function myGame(id) {
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  let mydata = await data.json();
  gameImage.setAttribute("src",mydata.thumbnail);
  gameTitle.innerHTML = mydata.title;
  gameCategory.innerHTML = mydata.genre;
  gamePlatform.innerHTML = mydata.platform;
  gameDescreption.innerHTML = mydata.description;
  gameUrl.setAttribute("href",mydata.game_url);
  allGames.classList.add('d-none');
  navbar.classList.add('d-none');
  oneGame.classList.remove('d-none');
}


// close the game
closGame.addEventListener('click',function () {
  allGames.classList.remove('d-none')
  navbar.classList.remove('d-none')
  oneGame.classList.add('d-none')
})

// get data of all games
function getGames() {
  mmorpgGames()
  shooterGames()
  sailingGames()
  permadeathGames()
  superheroGames()
  pixelGames()
}

// scroll
$(window).on('scroll',function(){
  if($(window).scrollTop() > 100){
    $('nav').addClass('fixed-top')
    $('nav').removeClass('my-5')
    $('nav').addClass('w-75')
  }
  else{
    $('nav').removeClass('fixed-top')
    $('nav').addClass('my-5')
  }
})

// lodaing screen
$(document).ready(function(){
  $('.loader').fadeOut(500,function(){
    $('#loading').slideUp(500,function(){
      $('body').css('overflow','scroll')
    })
  })
})

// calling
getGames()


