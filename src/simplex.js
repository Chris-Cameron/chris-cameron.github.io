import { createNoise2D } from 'simplex-noise';
function addRow() {
    let table = document.getElementById("octaveTable");
    let newRow = table.insertRow();
    let rowNum = newRow.insertCell();
    rowNum.contentEditable = "true";
    rowNum.textContent = (table.rows.length - 1).toString();
    let intensity = newRow.insertCell();
    intensity.contentEditable = "true";
    let scale = newRow.insertCell();
    scale.contentEditable = "true";
    let exponent = newRow.insertCell();
    exponent.contentEditable = "true";
}
let rowButton = document.getElementById("addRowButton");
rowButton.addEventListener("click", addRow);
function drawNoise() {
    let noise2D = createNoise2D();
    let canvas = document.getElementById("resultWindow");
    let ctx = canvas.getContext("2d");
    let scale = .01;
    for (let y = 0; y < canvas.clientHeight; y++) {
        for (let x = 0; x < canvas.clientWidth; x++) {
            let brightness = (noise2D(scale * x, scale * y) + 1) * 127.5;
            ctx.fillStyle = `rgb(${brightness},${brightness},${brightness} )`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}
let drawButton = document.getElementById("drawNoiseButton");
drawButton.addEventListener("click", drawNoise);
