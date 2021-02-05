const videos = ["media.mp4"];


function setVideo(){
  let videoWrapper = document.getElementById("video");
  videoWrapper.setAttribute("src", "video/" + videos[Math.floor(Math.random() * videos.length)])
}

function displayVideos() {
  const videosElement = document.getElementById("videoGrid");
  for (i=0; i < videos.length / 3 ; i+=1) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;

    for (k = 0; k < 3; k += 1) {
      const box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }
    videosElement.appendChild(row);
  }
}

