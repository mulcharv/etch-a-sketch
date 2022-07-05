container = document.getElementById("container");
let range = document.getElementById("range");
let value = document.getElementById("value");
let chooseColor = document.getElementById("chooseColor");
let color = chooseColor.value;
console.log(color);
let gridNumber;
let randomColor = document.getElementById("randomColor");
let eraser = document.getElementById("eraser");


if (range.value = 16) {
    makeBoxes(16,256);
} 

function makeBoxes (gridNumber, numberBoxes) {

    clearGrid();
    for (i=0; i < numberBoxes; i++) {
        cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    }
    
    let x = document.getElementsByClassName('cell');
    let dimension = 575/gridNumber
    
    for (var i=0; i< x.length; i++) {
        x[i].style.width = dimension + 'px';
        x[i].style.height = dimension + 'px';
        x[i].style.border = 'thin solid lightgrey';
    }
    
}

range.addEventListener('mouseup', (e) => {
    let gridNumber = e.target.value
    console.log(gridNumber)
    let numberBoxes = gridNumber ** 2;  
    makeBoxes(gridNumber, numberBoxes);
    value.textContent = `${gridNumber}` + "x" + `${gridNumber}`
    return;
})


function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

let isMouseDown = false;

function makeChosenColor (chosenColor) {
    let boxes = document.getElementsByClassName('cell');
    for (var i=0; i< boxes.length; i++) {
        boxes[i].addEventListener('mousedown', function(e) {
            isMouseDown = true;
        })
        boxes[i].addEventListener('mouseup', function(e) {
            isMouseDown = false;
        })
        boxes[i].addEventListener('mousemove', function(e) {
            if (isMouseDown) {
                e.target.style.backgroundColor = `${chosenColor}`;
            }
            else {
                return;
            }
    })
}}


function makeRandomColor () {
    let boxes = document.getElementsByClassName('cell');
    for (var i=0; i< boxes.length; i++) {
        boxes[i].addEventListener('mousedown', function(e) {
            isMouseDown = true;
        })
        boxes[i].addEventListener('mouseup', function(e) {
            isMouseDown = false;
        })
        boxes[i].addEventListener('mousemove', function(e) {
            if (isMouseDown) {
            let hex = '#' + Math.floor(Math.random()*16777215).toString(16)
            e.target.style.backgroundColor = hex
            }
        })
    }
}

function eraseBoxes () {
    let boxes = document.getElementsByClassName('cell');
    for (var i=0; i< boxes.length; i++) {
        boxes[i].addEventListener('mousedown', function(e) {
            isMouseDown = true;
        })
        boxes[i].addEventListener('mouseup', function(e) {
            isMouseDown = false;
        })
        boxes[i].addEventListener('mousemove', function(e) {
            if (isMouseDown) {
            e.target.style.backgroundColor = 'white'
            }
        })
    }
}

function clearBoxes () {
    let boxes = document.getElementsByClassName('cell');
    for (var i=0; i< boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white'
    }
}

