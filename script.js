var circle = document.getElementById("circle");
var up = document.getElementById("c1");
var down = document.getElementById("c2");

var rotate = circle.style.transform;
var rotateSum;

up.onclick = function(){

    rotateSum = rotate + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotate = rotateSum;
}

down.onclick = function(){

    rotateSum = rotate + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotate = rotateSum;
}


