function toggleZone(hideZone, showZone, display = "block") {
  hideZone.style.display = "none";
  if (showZone) {
    hideZone.style.display = `${display}`;
  }
}

function randomColor() {
  let res = "#";

  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 9);
  }

  return res;
}

function renderBtns(value, appendZone) {
  for (let i = 0; i < value; i++) {
    let btn = document.createElement("button");

    btn.style.background = randomColor();
    btn.style.width = "250px";
    btn.style.height = "150px";
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    btn.style.fontSize = "24px";
    
    appendZone.appendChild(btn);
  }
}
