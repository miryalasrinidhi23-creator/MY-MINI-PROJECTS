let textbox = document.querySelector('#textbox');
let display = document.querySelector('#display');
textbox.addEventListener('keypress',()=>{
    display.innerText = textbox.value
});