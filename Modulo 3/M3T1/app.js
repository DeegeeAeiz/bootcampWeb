var colortoggle = 0;
var bordertoggle = 0;

function toggleColors() {
  const boxes = document.getElementsByClassName("box");
  if (colortoggle == 0) {
    for (i = 0; i < boxes.length; i++) {
      boxes[i].style["background"] = "rgb(255, 184, 231)";
    }
    colortoggle = 1;
  } else {
    for (i = 0; i < boxes.length; i++) {
      boxes[i].style["background"] = "rgb(184, 255, 184)";
    }
    colortoggle = 0;
  }
}

function toggleBorders() {
  const boxes = document.getElementsByClassName("box");
  if (bordertoggle == 0) {
    for (i = 0; i < boxes.length; i++) {
      boxes[i].style["border-radius"] = "0px";
    }
    bordertoggle = 1;
  } else {
    for (i = 0; i < boxes.length; i++) {
      boxes[i].style["border-radius"] = "10px";
    }
    bordertoggle = 0;
  }
}

function addBox() {
  const newBox = document.createElement("div");
  const container = document.getElementById("box-container");
  newBox.classList.add("box");

  container.appendChild(newBox);
  if (colortoggle == 1) newBox.style["background"] = "rgb(255, 184, 231)";
  if (bordertoggle == 1) newBox.style["border-radius"] = "0px";
}
