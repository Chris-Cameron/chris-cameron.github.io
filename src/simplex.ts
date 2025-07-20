import { createNoise2D } from 'simplex-noise';


function addRow(): void{
    let table = document.getElementById("octaveTable") as HTMLTableElement;
    let newRow = table.insertRow();
    
    let rowNum = newRow.insertCell() as HTMLTableCellElement;
    rowNum.contentEditable = "true";
    rowNum.textContent = (table.rows.length-1).toString();

    let intensity = newRow.insertCell();
    intensity.contentEditable = "true";
    intensity.textContent = "100";

    let scale = newRow.insertCell();
    scale.contentEditable = "true";
    scale.textContent = "100";

    let exponent = newRow.insertCell();
    exponent.contentEditable = "true";
    exponent.textContent = "1";
}

let rowButton = document.getElementById("addRowButton") as HTMLButtonElement;
rowButton.addEventListener("click", addRow);


function drawNoise(): void{
    let table = document.getElementById("octaveTable") as HTMLTableElement;
    let noise2D = createNoise2D();
    let canvas = document.getElementById("resultWindow") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

   for(let x = 0; x < canvas.clientWidth; x++){
        for(let y = 0; y < canvas.clientHeight; y++){
            let brightness = 0;
            for(let i = 1; i < table.rows.length; i++){
                let row = table.rows[i];
                let intensity = Number(row.cells[1].textContent);
                let scale = Number(row.cells[2].textContent);
                let exponent = Number(row.cells[3].textContent);
                brightness += Math.pow((noise2D(x/scale,y/scale)+1)/2, exponent)*intensity*2.55;
            } 
            ctx.fillStyle = `rgb(${brightness},${brightness},${brightness} )`
            ctx.fillRect(x, y, 1, 1)
        }
   }
}

let drawButton = document.getElementById("drawNoiseButton") as HTMLButtonElement;
drawButton.addEventListener("click", drawNoise);