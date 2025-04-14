const text = "Seni seviyorum Azra";
let i = 0;
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("main-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;