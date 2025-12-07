
    document.querySelectorAll(".card-image").forEach(img => {
    img.addEventListener("click", () => {
        const infoBox = img.nextElementSibling;
        infoBox.classList.toggle("open");
    });
});
    // Opleidingen openklappen
    document.querySelectorAll(".opleidingen-card").forEach(card => {
        card.addEventListener("click", () => {
            const info = card.querySelector(".opleidingen-info");
            info.classList.toggle("open");
        });
    });
