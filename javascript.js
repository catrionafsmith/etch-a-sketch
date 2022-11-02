const container = document.querySelector(".container");
for (let i= 0; i<256; i++) {
    let box = document.createElement('div');
    box.className = "box";
    box.addEventListener('mouseout', () => {
        box.className = "hov_col";
        console.log("clicked");
        
    })
    container.appendChild(box)
} 

// const boxes = document.querySelectorAll('.box');
// boxes.forEach((box) => {
//     box.addEventListener('click', () => {
//         console.log("clicked");
//         box.className = "hov_col";
//     })
// })