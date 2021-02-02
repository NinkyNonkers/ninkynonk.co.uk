const videos = ["media.mp4"];


function setVideo(){
  let videoWrapper = document.getElementById("video");
  videoWrapper.setAttribute("src", "video/" + videos[Math.floor(Math.random() * videos.length)])
}

function displayVideos() {
  const videosElement = document.getElementById(".videoGrid");
  for (const video in videos) {
    const vidElement = videosElement.createElement("div", {class: ""})
  }
}

