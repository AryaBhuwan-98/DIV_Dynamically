function showAdditionalInputs() {
  const numDivs = parseInt(document.getElementById('numDivs').value);

  if (numDivs > 0) {
      document.getElementById('additionalInputs').style.display = 'block';
  }
}

function createDivs() {
  const numDivs = parseInt(document.getElementById('numDivs').value);
  const height = parseInt(document.getElementById('height').value);
  const width = parseInt(document.getElementById('width').value);
  const paddingTop = parseInt(document.getElementById('paddingTop').value);
  const paddingLeft = parseInt(document.getElementById('paddingLeft').value);

  const divContainer = document.getElementById('divContainer');
  const loading = document.getElementById('loading');

  divContainer.innerHTML = '';
  loading.style.display = 'block';

  setTimeout(() => {
      loading.style.display = 'none';
      for (let i = 0; i < numDivs; i++) {
          const newDiv = document.createElement('div');
          newDiv.style.height = height + 'px';
          newDiv.style.width = width + 'px';
          newDiv.style.paddingTop = paddingTop + 'px';
          newDiv.style.paddingLeft = paddingLeft + 'px';
          newDiv.className = 'box';
          newDiv.textContent = `Div ${i + 1}`;

          divContainer.appendChild(newDiv);
      }
  }, 2000); // 2 seconds delay
}