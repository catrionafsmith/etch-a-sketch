
let n = 10;
let colour_list = ["#d9d2e9", "#ccbaf5", "#cfe2f3", "#e5cdd8", "#e5adad"];
// import random

function promptMe(){
    n = Number(prompt("Type a number to set the number of squares in each side of the Etch-a Sketch (up to 100)"));
    let cont_width = (480/n).toString();

    const container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${n}, ${cont_width}px`;


    for (let i= 0; i<(n*n); i++) {
        let box = document.createElement('div');
        box.className = "box";
        
        box.addEventListener('mouseout', () => {
            // box.className = "hov_col";
            // let hov_box = document.querySelector(".hov_col");
            box.style.backgroundColor = getColor()
            // [Math.floor(Math.random*5)]
            
        })
        container.appendChild(box)
    } 

}

function getColor() {
   return  colour_list[Math.floor(Math.random()*5)]
}

// CODE FOR MULTICOLOURED OVERLAY
// let n = 10;
// let colour_list = ["#d9d2e9", "#ccbaf5", "#cfe2f3", "#e5cdd8", "#e5adad"];

// function promptMe(){
//     n = Number(prompt("Type a number to set the number of squares in each side of the Etch-a Sketch (up to 100)"));
//     let cont_width = (480/n).toString();

//     const container = document.querySelector(".container");

//     container.style.gridTemplateColumns = `repeat(${n}, ${cont_width}px`;


//     for (let i= 0; i<(n*n); i++) {
//         let box = document.createElement('div');
//         box.className = "box";
        
//         box.addEventListener('mouseout', () => {
//             box.style.backgroundColor = getColor()
            
            
//         })
//         container.appendChild(box)
//     } 

// }

// function getColor() {
//    return  colour_list[Math.floor(Math.random()*5)]
// }