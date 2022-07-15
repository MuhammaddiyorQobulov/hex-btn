function toggleZone(hideZone, showZone, display = "block") {
  hideZone.style.display = "none";
  if (showZone) {
    showZone.style.display = `${display}`;
  }
}

function randomColor() {
  let res = "#";

  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 9);
  }

  return res;
}

function renderBtns(value, appendZone, text) {
  for (let i = 0; i < value; i++) {
    let btn = document.createElement("button");
    let color = randomColor();
    btn.style.background = color;
    btn.style.width = "250px";
    btn.style.height = "150px";
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    btn.style.fontSize = "24px";
    btn.innerHTML = color;
    btn.classList = "btn";

    appendZone.appendChild(btn);

    btn.addEventListener("click", () => {
      text.innerHTML = color;
      const body = document.querySelector("body");
      body.style.background = color;
    });
  }
}

module.exports = { toggleZone, renderBtns, randomColor };
