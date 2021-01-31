let color;
let colourStatus = new Object();


function mouseOver(bgColor) {
  colourStatus[bgColor] = true;
  color = bgColor;
  changeBgColor($("#pageWrapper"), bgColor)
}

function mouseLeave(bgColor) {
  colourStatus[bgColor] = false;
  color = "#BDB2FF";
  for (var color in colourStatus) {
    if (colourStatus[color] == true)
      return;
  }
  setTimeout(() => {
    for (var color in colourStatus) {
      if (colourStatus[color] == true)
        return;
    }
    changeBgColor($("#pageWrapper"), "#BDB2FF");
  }, 200);
}

function showComingSoonText(bgColor) {

}

function changeBgColor($, color) {
  $.animate({backgroundColor: color}, {progress: function(animation, progress, msRemaining){

    }});
}
