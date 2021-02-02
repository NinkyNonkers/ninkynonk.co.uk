let colourStatus = {
  "#FFC6FF": false,
  "#B3FBDF": false,
  "#FDFFB6": false,
  "#9BF6FF": false,
};

function mouseOver(bgColor) {
  colourStatus[bgColor] = true;
  changeBgColor($("#pageWrapper"), bgColor)
}

function mouseLeave(bgColor) {
  colourStatus[bgColor] = false;
  setTimeout(() => {
    if (Object.values(colourStatus).includes(true))
      return;
    changeBgColor($("#pageWrapper"), "#BDB2FF");
  }, 200);
}

function changeBgColor($, color) {
  $.animate({backgroundColor: color});
}
