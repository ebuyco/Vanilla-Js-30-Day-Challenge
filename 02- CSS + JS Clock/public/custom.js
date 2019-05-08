'use strict';

var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = 'rotate('.concat(secondDegrees, 'deg)');
    var mins = now.getMinutes();
    var minsDegrees = mins / 60 * 360 + 90;
    minsHand.style.transform = 'rotate('.concat(minsDegrees, 'deg)');
    var hour = now.getMinutes();
    var hourDegrees = mins / 12 * 360 + 90;
    hourHand.style.transform = 'rotate('.concat(hourDegrees, 'deg)');
}

setInterval(setDate, 1000);
