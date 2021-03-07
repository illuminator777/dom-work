const toggleBtn = document.getElementById('show-modal');
const BtnClose = document.querySelector('.close');

let isVisible = false;

function toggleVis() {
    toggleBtn.previousElementSibling.style.visibility = isVisible ? 'visible' : 'hidden';
    isVisible = !isVisible;
}

toggleBtn.onclick = toggleVis;