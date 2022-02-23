

let fotos = ['img_2/2.jpg', 'img_2/3.jpg', 'img_2/4.jpg', 'img_2/5.jpg', 'img_2/6.jpg', 'img_2/7.jpg', 'img_2/8.jpg', 'img_2/10.jpg', 'img_2/11.jpg', 'img_2/12.jpg', 'img_2/13.jpg', 'img_2/14.jpg', 'img_2/15.jpg'];

let currentId;
// LOAD FOTOS FUNCTION BEGIN
function loadFotos() {
    for (let i = 0; i < fotos.length; i++) {
        if (i == 5 || i == 6 || i == 7) {
            // LOADING IMAGES IN THE MIDDEL CONTAINER
            document.getElementById('three-img-container').innerHTML += `
            <div  class="img-container">
            <img onclick="showImg(${i})" src="${fotos[i]}" alt="">
            </div>
            `;

        } else if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4) {
            // LOADING IMAGES IN THE UPPER CONTAINER
            document.getElementById('five-img-container').innerHTML += `
            <div class="img-container">
            <img onclick="showImg(${i})" src="${fotos[i]}" alt="">
            </div>
            `;
        } else {
            // LOADING IMAGES IN THE LOWER CONTAINER
            document.getElementById('five_2-img-container').innerHTML += `
            <div class="img-container">
            <img onclick="showImg(${i})" src="${fotos[i]}" alt="">
            </div>
            `;
        }
    }
}
// LOAD FOTOS FUNCTION END

// SHOW IMG ONCLICK BEGINN

function showImg(imgId) {

    currentId = imgId;

    document.getElementById('dialog').classList.remove('d-none');
    document.getElementById('dialog').innerHTML = `
    <div class="dialog">

    <div onclick = "leftArrow()" class="left-arrow"><i class="fa-solid fa-circle-arrow-left fa-3x"></i></div>

    <div class="dialog-img-container">
        <img src="${fotos[imgId]}">
    </div>

    <div onclick = "rightArrow()" class="right-arrow"><i class="fa-solid fa-circle-arrow-right fa-3x"></i></div>

</div>
<div onclick="closeImg()" class="xmark">
            <i class="fa-solid fa-circle-xmark fa-2x"></i>
        </div>
    `;

}

// SHOW IMG ONCLICK END

// CLOSE IMG ONCLICK BEGINN

function closeImg() {
    document.getElementById('dialog').classList.add('d-none');
}

// CLOSE IMG ONCLICK END

// LEFT AROOW FUNCTION BEGINN
function leftArrow() {
    if (currentId > 0 && currentId <= 13) {
        currentId--;
        showImg(currentId);
    }
}
// LEFT AROOW FUNCTION END


// RIGHT ARROW FUNCTION BEGINN
function rightArrow() {
    if (currentId >= 0 && currentId <= 11) {
        currentId++;
        showImg(currentId);
    }
}
// RIGHT ARROW FUNCTION END