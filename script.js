let input = 0;
let container = document.getElementById("grid-container");
let inputBtn = document.getElementById("user-input");
let eraseBtn = document.getElementById("erase");

updateGrid(16);

eraseBtn.addEventListener("click", function(){
    eraseGrid();
});

inputBtn.addEventListener("click", function(){
    input = prompt("Enter a number of squares per side (Between 1 and 100):");
    input = parseInt(input);

    if(Number.isInteger(input) == true && input <= 100 && input > 0){
        updateGrid(input);
    }else{
        console.log("Invalid input!");
    }

    
});

function updateGrid(width){
    container.replaceChildren();
    let percent = 100 / width;
    percent = percent.toString();
    percent += "%";
    let column;
    let div;
    for(let i = 0; i < width; i++){
        column = document.createElement('div');
        column.classList.add("column");

        for(let j = 0; j < width; j++){
            div = document.createElement('div');
            div.classList.add("square");
            div.style.height = percent;
            column.appendChild(div);
        }
        container.appendChild(column);
    }

    addEventListeners();
}

function addEventListeners(){
    let squares = [];
    squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; i++) {
        let color1 = randomColor();
        let color2 = randomColor();
        let color3 = randomColor();
        let color = "rgb(";
        color += color1;
        color += ", ";
        color += color2;
        color += ", ";
        color += color3;
        color += ")";
        console.log(color);
        
        squares[i].addEventListener('mouseover', function(){
            squares[i].style.background = color;
        });
    }
}

function eraseGrid(){
    console.log("hi");
    let squares = [];
    squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = "white";
    }
}

function randomColor(){
    return Math.floor(Math.random() * 255);
}