// document.addEventListener("DOMContentLoaded", function() {
//         const gridContainer = document.querySelector(".container");
//         for (let i = 0; i < 16; i++) {
//             const row = document.createElement("div");
//             row.classList.add("row");
//             for (let j = 0; j < 16; j++) {
//                 const cell = document.createElement("div");
//                 cell.classList.add("cell");
                
//                 cell.addEventListener("mouseenter", function() {
//                     cell.style.backgroundColor = "blue";
//                 });
//                 cell.addEventListener("mouseleave", function() {
//                     cell.style.backgroundColor = "white";
//                 });

//                 row.appendChild(cell);
//             }
//             gridContainer.appendChild(row);
//         }
//     });


function createNewGrid() {
    const size = prompt("Enter the number of squares per side for the new grid (Max 100):");
    if (size !== null && !isNaN(size) && size > 0) {
        const gridContainer = document.querySelector(".grid");
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        document.documentElement.style.setProperty('--size', size);

        for (let i = 0; i < size; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < size; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                cell.addEventListener("mouseenter", function() {

                    cell.style.backgroundColor = rgbColor();
                });

                row.appendChild(cell);
            }
            gridContainer.appendChild(row);
        }
    } else {
        alert("Enter a valid number of squares per side (Max 100)");
    }
}


function rgbColor(){
    const colors = ["red", "blue", "green","yellow", "orange", "purple", "pink"];
    let n = Math.floor(Math.random() * 7); 
    return colors[n];
}