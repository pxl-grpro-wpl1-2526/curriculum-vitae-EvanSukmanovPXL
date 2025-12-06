
    document.querySelectorAll(".card-image").forEach(img => {
    img.addEventListener("click", () => {
        const infoBox = img.nextElementSibling;
        infoBox.classList.toggle("open");
    });
});
