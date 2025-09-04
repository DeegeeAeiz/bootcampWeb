var colortoggle = 0;
var bordertoggle = 0;

function toggleColors() {
  console.log("called");
  if (colortoggle == 0) {
    $(".box").css("background", "rgb(255, 184, 231)");
    colortoggle = 1;
  } else {
    $(".box").css("background", "rgb(184, 255, 184)");
    colortoggle = 0;
  }
}

function toggleBorders() {
  console.log("called 2");
  if (bordertoggle == 0) {
    $(".box").css("border-radius", "0px");
    bordertoggle = 1;
  } else {
    $(".box").css("border-radius", "10px");
    bordertoggle = 0;
  }
}

function addBox() {
  $("#box-container").append($("<div class='box'></div>)"));

  if (colortoggle == 1) $(".box").css("background", "rgb(255, 184, 231)");
  if (bordertoggle == 1) $(".box").css("border-radius", "0px");
}
