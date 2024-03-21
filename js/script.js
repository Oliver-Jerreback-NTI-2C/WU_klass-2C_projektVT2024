const arrowLeft = document.getElementById('se18');
const arrowRight = document.getElementById('se20');

var bildspelImgSources = ["img/bildspel/bildspel_1.jpg", "img/bildspel/bildspel_2.jpg", "img/bildspel/bildspel_3.jpg", "img/bildspel/bildspel_4.jpg"];
var textImgSources = ["img/bildspel_text/text_1.jpg", "img/bildspel_text/text_2.jpg", "img/bildspel_text/text_3.jpg", "img/bildspel_text/text_4.jpg"];
var bildspelIndex = 0;

function newImageRight() {
    if (bildspelIndex == bildspelImgSources.length - 1) {
        bildspelIndex = 0;
    } else {
        bildspelIndex++;
    }
    document.getElementById('img_bildspel').src = bildspelImgSources[bildspelIndex];
    document.getElementById('img_text').src = textImgSources[bildspelIndex];
}

function newImageLeft() {
    if (bildspelIndex == 0) {
        bildspelIndex = bildspelImgSources.length - 1;
    } else {
        bildspelIndex--;
    }
    document.getElementById('img_bildspel').src = bildspelImgSources[bildspelIndex];
    document.getElementById('img_text').src = textImgSources[bildspelIndex];
}

arrowLeft.addEventListener('click', newImageLeft);
arrowRight.addEventListener('click', newImageRight);

