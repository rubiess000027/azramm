const text = "Seni seviyorum Mavissimmmm";
let i = 0;
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("main-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Yazı tamamlandıktan sonra kalbi göster
        showHeart();
    }
}

function showHeart() {
    const heart = document.getElementById("heart");
    heart.classList.add("show-heart");
}

window.onload = typeWriter;