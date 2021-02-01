let colourStatus = new Object();


function mouseOver(bgColor) {
  colourStatus[bgColor] = true;
  changeBgColor($("#pageWrapper"), bgColor)
}

function mouseLeave(bgColor) {
  colourStatus[bgColor] = false;
  for (const color in colourStatus) {
    if (colourStatus[color] === true)
      return;
  }
  setTimeout(() => {
    for (const color in colourStatus) {
      if (colourStatus[color] === true)
        return;
    }
    changeBgColor($("#pageWrapper"), "#BDB2FF");
  }, 200);
}

function changeBgColor($, color) {
  $.animate({backgroundColor: color});
}
