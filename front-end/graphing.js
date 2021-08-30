//reading in the data from the api
//display said data in bar graphs

const canvas = document.getElementById('qGraph');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const drawEmptyGraph = () => {
    ctx.strokeStyle = '#d1b3c4';

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350);
    ctx.lineTo(200, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(300, 350);
    ctx.lineTo(550, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(600, 50);
    ctx.lineTo(600, 350);
    ctx.lineTo(750, 350);
    ctx.stroke();
}

const drawQ1 = () => {

}

const drawQ2 = () => {

}

const drawQ3 = () => {

}

const loop = () => {
    ctx.clearReact(0, 0, 800, 400);
    drawEmptyGraph();

    //grab data

    //draw graph

    //yay
}