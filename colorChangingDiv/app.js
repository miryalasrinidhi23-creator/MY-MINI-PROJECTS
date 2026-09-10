let box = document.querySelector("div");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");
button.addEventListener("click",()=> {
    let red = Math.ceil(Math.random()*255);
    let green = Math.ceil(Math.random()*255);
    let blue = Math.ceil(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    
    h2.innerText=color;
    box.style.backgroundColor=color;
})