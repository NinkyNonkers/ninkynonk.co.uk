const pageWrapper = document.getElementById("pageWrapper");


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

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
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
