'use strict'

var newBallWidth = 150
var newBallallheight = 150
var ballSize=100
function onBallClick() {
    const elBall = document.querySelector(".ball")
    var ballGrowth =getRandomInt(20,61)
    var newBallSize=ballSize+ballGrowth
    elBall.style.backgroundColor= getRandomColor()+''

    if (newBallSize < 400) {
        elBall.style.width = newBallSize + 'px'
        elBall.style.height = newBallSize + 'px'
        newBallWidth += 50
        newBallallheight += 50

    }
    else {

        newBallallheight = 150
        newBallWidth = 150
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        ballSize=100
        newBallSize=ballSize
    }

    ballSize=newBallSize
    console.log('size:',ballSize)
    console.log('new:',newBallSize)
    console.log('growth:',ballGrowth)


}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }