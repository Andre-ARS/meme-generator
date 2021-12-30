const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const file = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container')
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth')
let img = document.getElementById('meme-image');

// Requisito 1
function textPrint() {
    text.innerText = input.value;
}

input.addEventListener('keyup', textPrint)

// Requisito 2
// função feita com base nesse post https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html/45931408#45931408
function imageUpload () {
    if (this.files[0]) {
        img.onload = () => {
            URL.revokeObjectURL(img.src); 
        }

        img.src = URL.createObjectURL(this.files[0]); 
    }
}    
file.addEventListener('change', imageUpload);

// Requisito 6 
function buttonIdentifier(event) {
   if (event.target.tagName === 'BUTTON') {
       if (event.target.innerText === 'Fire') {
           borderChange('fire');
       } else if (event.target.innerText === 'Water') {
           borderChange('water');
       } else{
           borderChange('earth');
       }       
   }
}

function borderChange(classe) {
    if (container.className !== classe) {
        container.className = classe;
    } else {
        container.className = 'default';
    }
}

document.getElementById('buttons').addEventListener('click', buttonIdentifier);

// Requisito 7
function imageAttacher(event) {
    if (event.target.tagName === 'IMG') {
        img.src = event.target.src
    }
}

document.getElementById('memes-prontos').addEventListener('click', imageAttacher)
