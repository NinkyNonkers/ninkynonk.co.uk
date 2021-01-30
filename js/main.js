let color;


function mouseOver(bgColor) {
  color = bgColor;
  changeBgColor($("#pageWrapper"), bgColor)
}

function mouseLeave() {
  color = "#BDB2FF";
  changeBgColor($("#pageWrapper"), "#BDB2FF");
}

function changeBgColor($, color) {
  $.animate({backgroundColor: color}, {progress: function(animation, progress, msRemaining){

    }});
}
