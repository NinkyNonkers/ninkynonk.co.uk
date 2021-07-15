const pageWrapper = document.getElementById("pageWrapper");
const defaultColour = "#BDB2FF";
const jQueryPageWrapper = $("#pageWrapper");

const colourStatus = {
  TOGGLED: 0,
  ON: 1,
  OFF: 2
}

let colourStatuses = {
  "#FFC6FF": colourStatus.OFF,
  "#B3FBDF": colourStatus.OFF,
  "#FDFFB6": colourStatus.OFF,
  "#9BF6FF": colourStatus.OFF
};

function mouseOver(bgColor) {
  colourStatuses[bgColor] = colourStatus.ON;
  changeBgColor(jQueryPageWrapper, bgColor)
}

function mouseClick(bgColour, associatedDivider = null) {
  if (colourStatuses[bgColour] === colourStatus.TOGGLED) {
    changeBgColor(jQueryPageWrapper, defaultColour);
    if (associatedDivider != null) {
      document.getElementById(associatedDivider).style.visibility = "hidden";
    }
    colourStatuses[bgColour] = colourStatus.OFF;
    return;
  }
  colourStatuses[bgColour] = colourStatus.ON;
  changeBgColor(jQueryPageWrapper, bgColour);
  if (associatedDivider != null) {
    document.getElementById(associatedDivider).style.visibility = "inherit";
  }
}


function mouseLeave(bgColor) {
  if (colourStatus[bgColor] === colourStatus.TOGGLED)
    return;
  colourStatus[bgColor] = colourStatus.OFF;
  setTimeout(() => {
    if (Object.values(colourStatuses).includes(colourStatus.ON))
      return;
    changeBgColor(jQueryPageWrapper, "#BDB2FF");
  }, 200);
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  hex = hex.replace("#", "");
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function changeBgColor($, color) {
  //$.animate({backgroundColor: color});
  animateColourChange(pageWrapper, pageWrapper.style.color, color);
}

let id = null;

function animateColourChange(element, start, end) {
  clearInterval(id);
  const startRgb = hexToRgb(start);
  const endRgb = hexToRgb(end);
  let rPos = startRgb.r;
  let gPos = startRgb.g;
  let bPos = startRgb.b;
  id = setInterval(frame, 5);
  function frame() {
    let newRgb = "";
    if (rPos === endRgb.r && gPos === endRgb.g && bPos === endRgb.b) {
      clearInterval(id);
    } else {
      if (rPos !== endRgb.r)
        rPos++;
      if (gPos !== endRgb.g)
        gPos++;
      if (bPos !== endRgb.b)
        bPos++;
      newRgb = rPos + ", " + gPos + ", " + bPos;
      element.style.color = "rgb(" + newRgb + ")"
    }
  }
}
