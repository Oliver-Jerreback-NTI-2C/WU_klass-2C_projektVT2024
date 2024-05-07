//hamburgarmeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('link_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

//recension
const arrowLeft = document.getElementById('se18');
const arrowRight = document.getElementById('se20');

const starBilder = [
    "img/star_1.png", 
    "img/star_2.png",
    "img/star_3.png",
    "img/star_4.png"
];

const texter = [
    "Kanske inte den mest bekväma kostymen ganska dålig",
    "Rätt okej kosytm inte bekvämaste men den är ändå bra",
    "Jag är väldigt nöjd kanske lite väl ovattentät",
    "Denna kostymen är perfekt på alla sätt förutom färgen"
];

const datum = [
    "Publicerad: 2024-05-07",
    "Publicerad: 2021-10-04",
    "Publicerad: 2022-01-09",
    "Publicerad: 2023-05-17"
];

var bildspelImgSources = ["img/bildspel/bildspel_1.jpg", "img/bildspel/bildspel_2.jpg", "img/bildspel/bildspel_3.jpg", "img/bildspel/bildspel_4.jpg"];
var bildspelIndex = 0;

function newImageRight() {
    if (bildspelIndex === bildspelImgSources.length - 1) {
        bildspelIndex = 0;
    } else {
        bildspelIndex++;
    }
    document.getElementById("img_bildspel").src = bildspelImgSources[bildspelIndex]; 
    document.getElementById("text").textContent = texter[bildspelIndex]; 
    document.getElementById("stars").src = starBilder[bildspelIndex]; 
    document.getElementById("datum").textContent = datum[bildspelIndex]; 
}

function newImageLeft() {
    if (bildspelIndex === 0) {
        bildspelIndex = bildspelImgSources.length - 1;
    } else {
        bildspelIndex--;
    }
    document.getElementById("img_bildspel").src = bildspelImgSources[bildspelIndex]; 
    document.getElementById("text").textContent = texter[bildspelIndex]; 
    document.getElementById("stars").src = starBilder[bildspelIndex]; 
    document.getElementById("datum").textContent = datum[bildspelIndex]; 
}


arrowLeft.addEventListener('click', newImageLeft);
arrowRight.addEventListener('click', newImageRight);

