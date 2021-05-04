const buttonPopulair = document.getElementById('buttonPopulair');
const buttonKleineHap = document.getElementById('buttonKleineHap');
const buttonGroteHap = document.getElementById('buttonGroteHap');
const buttonSnack = document.getElementById('buttonSnack');
const buttonVegetarisch = document.getElementById('buttonVegetarisch');

const datasetPopulair = document.querySelectorAll("[data-popularity='populair']");
const datasetKleineHap = document.querySelectorAll("[data-soort='kleine hap']");
const datasetGroteHap = document.querySelectorAll("[data-soort='grote hap']");
const datasetSnack = document.querySelectorAll("[data-soort='snack']");
const datasetVegan = document.querySelectorAll("[data-vegan='false']");
const datasetFavoriet = document.querySelectorAll("[data-favoriet='false']");

buttonPopulair.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetPopulair.length; i++){
      datasetPopulair[i].style.display = "";
    }
  } else {
    for(i = 0; i < datasetPopulair.length; i++){
      datasetPopulair[i].style.display = "none";
    }
  }
});

buttonKleineHap.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetKleineHap.length; i++){
      datasetKleineHap[i].style.display = "";
    }
  } else {
    for(i = 0; i < datasetKleineHap.length; i++){
      datasetKleineHap[i].style.display = "none";
    }
  }
});

buttonGroteHap.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetGroteHap.length; i++){
      datasetGroteHap[i].style.display = "";
    }
  } else {
    for(i = 0; i < datasetGroteHap.length; i++){
      datasetGroteHap[i].style.display = "none";
    }
  }
});

buttonSnack.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetSnack.length; i++){
      datasetSnack[i].style.display = "";
    }
  } else {
    for(i = 0; i < datasetSnack.length; i++){
      datasetSnack[i].style.display = "none";
    }
  }
});

buttonVegetarisch.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetVegan.length; i++){
      datasetVegan[i].style.display = "none";
    }
  } else {
    for(i = 0; i < datasetVegan.length; i++){
      datasetVegan[i].style.display = "";
    }
  }
});

//Favoriet filter
buttonFavoriet.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    for(i = 0; i < datasetFavoriet.length; i++){
      if(datasetFavoriet[i].getAttribute("data-favoriet") === "false")
      datasetFavoriet[i].style.display = "none";
    }
  } else {
    for (i = 0; i < datasetFavoriet.length; i++) {
      datasetFavoriet[i].style.display = "";
    }
  }
});

function addToFavorite(nummer) {
  if(datasetFavoriet[nummer].getAttribute("data-favoriet") === "false"){
      datasetFavoriet[nummer].setAttribute("data-favoriet", "true");
      console.log(datasetFavoriet[nummer].getAttribute("data-favoriet"));
  } else {
    datasetFavoriet[nummer].setAttribute("data-favoriet", "false");
  }
};

function randomSlogan() {
  var slogans = [
    'De lekkerste kebab, door de kleinste mensen!',
    'Onze winkel is te vinden in het sprookjesbos!',
    'Wij serveren ook hongerige smurfen!',
    'Huh!? Broodje paddestoel is het huis van mijn buurvrouw!'
  ];

  var randomSlogan = Math.floor(Math.random() * slogans.length);
  document.getElementById('sloganRandom').innerHTML = slogans[randomSlogan];
};

randomSlogan();
