let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let body = document.querySelector("body");

let box = document.getElementById("box");
let x = "#fff";
let y = "#222";
let z = "#454545";


btn1.addEventListener("click", function() {
    let hexcolor1 = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + hexcolor1[Math.floor(Math.random() * 16)];
    }
    console.log(color);

    body.style.backgroundImage = `linear-gradient(90deg, ${color} 0%, #090979 35%, #00d4ff 100%)`;

    box.innerText = `  background-image: linear-gradient(90deg, ${color} 0%, #090979 35%, #00d4ff 100%);`
});



btn2.addEventListener("click", function() {
    let hexcolor2 = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + hexcolor2[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    body.style.backgroundImage = `linear-gradient(90deg, #020024 0%, ${color} 35%, #00d4ff 100%)`;

    box.innerText = `  background-image: linear-gradient(90deg, #020024 0%, ${color} 35%, #00d4ff 100%);`
});


btn3.addEventListener("click", function() {
    let hexcolor3 = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + hexcolor3[Math.floor(Math.random() * 16)];
    }
    console.log(color);


    body.style.backgroundImage = `linear-gradient(90deg, #020024 0%, #090979 35%, ${color} 100%)`

    box.innerText = `  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, ${color} 100%);`

})