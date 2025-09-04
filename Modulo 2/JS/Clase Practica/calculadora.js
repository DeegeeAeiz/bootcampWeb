const screen = document.getElementById("screen")

var addToScreen = function(button){
    screen.value += button;
}

var clearScreen = function(){
    screen.value = "";
}

var calculateScreen = function(){
    screen.value = eval(screen.value).toFixed(2)
}