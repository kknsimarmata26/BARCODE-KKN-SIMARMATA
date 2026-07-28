// ======================================
// WEBSITE DESA SIMARMATA
// script.js
// ======================================

// ======================================
// 1. LOADING SCREEN
// ======================================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// ======================================
// 2. NAVBAR SHADOW SAAT SCROLL
// ======================================
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// ======================================
// 3. ANIMASI CARD
// ======================================
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
// 4. BACK TO TOP
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
tombol.style.boxShadow = "0 4px 15px rgba(0,0,0,.3)";
tombol.style.transition = ".3s";

tombol.addEventListener("mouseenter", function() {
    tombol.style.transform = "scale(1.1)";
    tombol.style.background = "#5b0909";
});

tombol.addEventListener("mouseleave", function() {
    tombol.style.transform = "scale(1)";
    tombol.style.background = "#7c0e0e";
});

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
// 5. COUNTER STATISTIK
// ======================================
const counters = document.querySelectorAll(".statistik h2, .statistik h1, .counter");

counters.forEach(counter => {
    let target = parseInt(counter.innerText.replace(/[^0-9]/g, ''));
    
    if (!isNaN(target) && target > 0 && target < 10000) {
        let angka = 0;
        let duration = 2000;
        let step = Math.ceil(target / (duration / 20));
        
        let interval = setInterval(() => {
            angka += step;
            if (angka >= target) {
                counter.innerText = target;
                clearInterval(interval);
            } else {
                counter.innerText = angka;
            }
        }, 20);
    }
});

// ======================================
// 6. DARK MODE
// ======================================
let darkButton = document.createElement("button");
darkButton.innerHTML = "🌙";
darkButton.id = "darkModeBtn";
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
darkButton.style.boxShadow = "0 4px 15px rgba(0,0,0,.3)";
darkButton.style.transition = ".3s";

darkButton.addEventListener("mouseenter", function() {
    darkButton.style.transform = "scale(1.1)";
});

darkButton.addEventListener("mouseleave", function() {
    darkButton.style.transform = "scale(1)";
});

document.body.appendChild(darkButton);

let isDarkMode = false;

darkButton.onclick = function () {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.background = "#1a1a2e";
        document.body.style.color = "#eee";
        darkButton.innerHTML = "☀️";
        darkButton.style.background = "#f5c842";
        darkButton.style.color = "#222";
        
        // Ubah warna card
        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#2d2d44";
            card.style.color = "#eee";
        });
        
        // Ubah warna bg-light
        document.querySelectorAll(".bg-light").forEach(el => {
            el.style.background = "#252540 !important";
        });
        
    } else {
        document.body.style.background = "#f8f9fa";
        document.body.style.color = "#333";
        darkButton.innerHTML = "🌙";
        darkButton.style.background = "#222";
        darkButton.style.color = "white";
        
        // Kembalikan warna card
        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#fff";
            card.style.color = "#333";
        });
        
        // Kembalikan warna bg-light
        document.querySelectorAll(".bg-light").forEach(el => {
            el.style.background = "#f8f9fa";
        });
    }
};

// ======================================
// 7. EFEK HOVER GAMBAR
// ======================================
let gambar = document.querySelectorAll("img:not(.navbar-brand img):not(.card-img-top)");

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
// 8. NOTIFIKASI SELAMAT DATANG
// ======================================
setTimeout(function() {
    console.log("✅ Selamat Datang di Website Desa Simarmata");
    console.log("🏝️ Desa Wisata • Desa Budaya • Desa Digital");
}, 1000);

// ======================================
// 9. SMOOTH SCROLL UNTUK TOMBOL NAV
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        let href = this.getAttribute('href');
        if (href !== "#" && href !== "") {
            let target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ======================================
// 10. TOOLTIP KONTAK
// ======================================
document.querySelectorAll('.btn-success, .btn-primary, .btn-outline-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let text = this.innerText.trim();
        if (text.includes('Booking') || text.includes('Pesan') || text.includes('Selengkapnya')) {
            console.log(`🔗 Tombol "${text}" diklik`);
        }
    });
});

// ======================================
// 11. RESPONSIF NAVBAR AUTO CLOSE
// ======================================
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        let navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});

// ======================================
// 12. TAHUN OTOMATIS DI FOOTER
// ======================================
let tahun = document.querySelectorAll('footer .text-center small, footer .text-center p');
tahun.forEach(el => {
    let text = el.innerHTML;
    if (text.includes('2026')) {
        el.innerHTML = text.replace('2026', new Date().getFullYear());
    }
});

console.log("✅ Script.js berjalan dengan baik!");
console.log("📅 " + new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
