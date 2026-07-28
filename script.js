// ======================================
// WEBSITE DESA SIMARMATA
// script.js
// ======================================

// Loading Screen
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});

// Navbar Shadow Saat Scroll

window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

// Animasi Card

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// ======================================
// Back To Top
// ======================================

let tombol = document.createElement("button");

tombol.innerHTML = "⬆";

tombol.id = "topBtn";

document.body.appendChild(tombol);

tombol.style.position = "fixed";
tombol.style.right = "20px";
tombol.style.bottom = "20px";
tombol.style.width = "50px";
tombol.style.height = "50px";
tombol.style.borderRadius = "50%";
tombol.style.border = "none";
tombol.style.background = "#7c0e0e";
tombol.style.color = "white";
tombol.style.fontSize = "22px";
tombol.style.cursor = "pointer";
tombol.style.display = "none";
tombol.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 250) {

        tombol.style.display = "block";

    } else {

        tombol.style.display = "none";

    }

});

tombol.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ======================================
// Counter Statistik
// ======================================

const counters = document.querySelectorAll("h1");

counters.forEach(counter => {

    let target = parseInt(counter.innerText);

    if (!isNaN(target)) {

        let angka = 0;

        let interval = setInterval(() => {

            angka++;

            counter.innerText = angka;

            if (angka >= target) {

                clearInterval(interval);

            }

        }, 20);

    }

});

// ======================================
// Dark Mode
// ======================================

let darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";

darkButton.style.position = "fixed";
darkButton.style.left = "20px";
darkButton.style.bottom = "20px";
darkButton.style.width = "50px";
darkButton.style.height = "50px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "50%";
darkButton.style.background = "#222";
darkButton.style.color = "white";
darkButton.style.cursor = "pointer";
darkButton.style.zIndex = "999";

document.body.appendChild(darkButton);

darkButton.onclick = function () {

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

};

// ======================================
// Efek Hover Gambar
// ======================================

let gambar = document.querySelectorAll("img");

gambar.forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.05)";
        img.style.transition = ".4s";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});

// ======================================
// Notifikasi Selamat Datang
// ======================================

setTimeout(function(){

console.log("Selamat Datang di Website Desa Simarmata");

},1000);