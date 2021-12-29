const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');

// Requisito 1
function textPrint() {
    text.innerText = input.value;
}

input.addEventListener('change', textPrint)
