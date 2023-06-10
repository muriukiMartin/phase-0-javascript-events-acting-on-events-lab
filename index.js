const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "blue"
function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);
    if (left > 0) {
        dodger.style.left = '0px';
    }
}

function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumber, 10);
    if (right < 360) {
        dodger.style.left = '360px';
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key == "ArrowRight") {
        moveDodgerRight();
    }

});