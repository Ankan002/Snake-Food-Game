import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, Score} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currenTime){
    if(gameOver){
        let score= Score()
        if (confirm(`Your Score is ${score}. Press Ok to restart`)){
            window.location.reload(true)
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    
    
    console.log('Render')
    lastRenderTime = currenTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



