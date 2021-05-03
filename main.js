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
