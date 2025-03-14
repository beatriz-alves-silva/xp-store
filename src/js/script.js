"use strict";
let currentBanner = 0; // Índice do banner atual
const banners = document.querySelectorAll('.banner li');
const totalBanners = banners.length;

// Função para mostrar o banner atual
function showBanner(index) {
    // Remover a classe 'active' de todos os banners
    banners.forEach(banner => banner.classList.remove('active'));

    // Adicionar a classe 'active' ao banner atual
    banners[index].classList.add('active');
}

// Função para ir para o próximo banner
function nextBanner() {
    currentBanner = (currentBanner + 1) % totalBanners; // Ciclo de banners
    showBanner(currentBanner);
}

// Função para ir para o banner anterior
function prevBanner() {
    currentBanner = (currentBanner - 1 + totalBanners) % totalBanners; // Ciclo de banners
    showBanner(currentBanner);
}

// Iniciar o slide automático a cada 10 segundos
setInterval(nextBanner, 10000);

// Configurar os botões de navegação manual
document.querySelector('.next').addEventListener('click', nextBanner);
document.querySelector('.prev').addEventListener('click', prevBanner);

// Mostrar o primeiro banner
showBanner(currentBanner);

    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

