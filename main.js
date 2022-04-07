
/*----- constants -----*/

const X_CLASS = 'x-class'
const O_CLASS ='o-class'
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let oTurn

/*----- cached element references -----*/
const cellElements = document.querySelectorAll('.cell')
const winningMessage = document.getElementById('messageText')
const restartButton = document.getElementById('restartButton')


/*----- app's state (variables) -----*/
startGame()

/*----- event listeners -----*/


restartButton.addEventListener('click', startGame)


/*----- functions -----*/
    function startGame(){
        oTurn = false
        cellElements.forEach(function(cell){
            cell.classList.remove(X_CLASS)
            cell.classList.remove(O_CLASS)
            cell.removeEventListener('click', handleClick)
            cell.addEventListener('click', handleClick, {once: true})
        })

        
    }



    function handleClick(e){
    const cell = e.target
    const currentClass = oTurn ? O_CLASS :X_CLASS
    markBoard (cell, currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    } else {
        endGame(true)
    } 
    swapTurn()
    }



    function markBoard(cell, currentClass){
    cell.classList.add(currentClass)
    }

    function swapTurn(){
     oTurn = !oTurn
    }

    function checkWin(currentClass) {
       return winningCombos.some (function (combo){
           return combo.every(function(index){
                return cellElements[index].classList.contains(currentClass)
           })  
       }) 
    }

    function endGame(draw){
        if (draw){
            winningMessage.innerText = `its a draw!`
        } else {
            winningMessage.innerText = `${oTurn? "O's" : "X's"} WIN...!`
        }
    }





   









    