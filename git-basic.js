'use strict'

var newBallWidth = 150
var newBallallheight = 150
function onBallClick() {
    const elBall = document.querySelector(".ball")

    if (newBallWidth < 400) {
        elBall.style.width = newBallWidth + 'px'
        elBall.style.height = newBallallheight + 'px'
        newBallWidth += 50
        newBallallheight += 50

    }
    else {

        newBallallheight = 150
        newBallWidth = 150
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }


}