//selectors & variable
var gameTurn = 1;
const noughtsWin = document.getElementById("noughtsWin");
const crossesWin = document.getElementById("crossesWin");
const gameGrid = document.getElementById("game-grid");

//blocks
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");


//event listeners
//


//enact function when mouse clicks on square
b1.addEventListener("click", changeIcon);
b2.addEventListener("click", changeIcon);
b3.addEventListener("click", changeIcon);
b4.addEventListener("click", changeIcon);
b5.addEventListener("click", changeIcon);
b6.addEventListener("click", changeIcon);
b7.addEventListener("click", changeIcon);
b8.addEventListener("click", changeIcon);
b9.addEventListener("click", changeIcon);


//functions
//add nought or cross
function changeIcon(e){
    if (gameTurn % 2 == 0){
        const circleSquare = e.target;
        circleSquare.classList.remove("empty-square");
        circleSquare.classList.add("circle-square"); 
        circleSquare.disabled = true;
        gameTurn ++;
        console.log (gameTurn);
        checkCircleWin();
    }  
    else {
        const crossSquare = e.target;
        crossSquare.classList.remove("empty-square");
        crossSquare.classList.add("cross-square");
        crossSquare.disabled = true;
        gameTurn ++;
        console.log (gameTurn);
        checkCrossWin();
    }
}

function checkCircleWin(){
    if (
        (b1.classList.contains('circle-square')&&b2.classList.contains('circle-square')&&b3.classList.contains('circle-square'))
        ||(b4.classList.contains('circle-square')&&b5.classList.contains('circle-square')&&b6.classList.contains('circle-square'))
        ||(b7.classList.contains('circle-square')&&b8.classList.contains('circle-square')&&b9.classList.contains('circle-square'))
        ||(b1.classList.contains('circle-square')&&b4.classList.contains('circle-square')&&b7.classList.contains('circle-square'))
        ||(b2.classList.contains('circle-square')&&b5.classList.contains('circle-square')&&b8.classList.contains('circle-square'))
        ||(b3.classList.contains('circle-square')&&b6.classList.contains('circle-square')&&b9.classList.contains('circle-square'))
        ||(b1.classList.contains('circle-square')&&b5.classList.contains('circle-square')&&b9.classList.contains('circle-square'))
        ||(b3.classList.contains('circle-square')&&b5.classList.contains('circle-square')&&b7.classList.contains('circle-square'))
        )
    {   
        noughtsWin.style.display = "block";
        console.log("Noughts winner");
        disableEmpties();
        }
    }
function checkCrossWin(){
    if (
          (b1.classList.contains('cross-square')&&b2.classList.contains('cross-square')&&b3.classList.contains('cross-square'))
        ||(b4.classList.contains('cross-square')&&b5.classList.contains('cross-square')&&b6.classList.contains('cross-square'))
        ||(b7.classList.contains('cross-square')&&b8.classList.contains('cross-square')&&b9.classList.contains('cross-square'))
        ||(b1.classList.contains('cross-square')&&b4.classList.contains('cross-square')&&b7.classList.contains('cross-square'))
        ||(b2.classList.contains('cross-square')&&b5.classList.contains('cross-square')&&b8.classList.contains('cross-square'))
        ||(b3.classList.contains('cross-square')&&b6.classList.contains('cross-square')&&b9.classList.contains('cross-square'))
        ||(b1.classList.contains('cross-square')&&b5.classList.contains('cross-square')&&b9.classList.contains('cross-square'))
        ||(b3.classList.contains('cross-square')&&b5.classList.contains('cross-square')&&b7.classList.contains('cross-square'))
        )
    {   
        crossesWin.style.display = "block";
        console.log("Crosses Winner");
        disableEmpties();
        }
    }

function disableEmpties(){
    var emptySquares = document.getElementsByClassName("empty-square");
        for (var i = 0; i < emptySquares.length; i++){
            emptySquares[i].disabled = true;
}}