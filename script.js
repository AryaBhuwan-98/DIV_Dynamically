function createDivs() {
  const numDivs = document.getElementById("numDivs").value;
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  const positionLeft = document.getElementById("positionL").value;
  const positionTop = document.getElementById("positionT").value;
  const divContainer = document.getElementById("divContainer");

  divContainer.innerHTML = "";

  for (let i = 0; i < numDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.style.height = `${height}px`;
    newDiv.style.width = `${width}px`;
    newDiv.style.position = "relative";
    newDiv.style.left = `${positionLeft}px`;
    newDiv.style.top = `${positionTop}px`;
    divContainer.appendChild(newDiv);
  }
}