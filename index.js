let img = new Image();
img.src = 'assets/walk/walk-animation.png';
img.onload = function () {
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
const scale = 2;
const width = 32;
const height = 52;
const scaledWidth = width * scale;
const scaledHeight = height * scale;

function init() {
    window.requestAnimationFrame(step);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width,
        frameY * height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [0, 1, 2, 3, 4, 5, 6];
let currentLoopIndex = 0;
let frameCount = 0;
let steps = 0;

function step() {
    frameCount++;
    if (frameCount < 20) {
        window.requestAnimationFrame(step);
        return;
    }

    if (steps >= (canvas.width - 20)) {
        steps = 0;
    }

    frameCount = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, steps++, 0);

    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}
