[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/H_jclKtX)
-----------------------------------------
"Dit is mijn eerste CV-opdracht, waarvoor ik HTML en CSS moet gebruiken. Er is ook een JavaScript-bestand dat ik heb gebruikt om de animatie voor de werkervaring-slide te laten werken.

JavaScript:
Hoe het werkt, is dat wanneer je de code leest:"

    document.querySelectorAll(".card-image").forEach(img => {
    img.addEventListener("click", () => {
        const infoBox = img.nextElementSibling;
        infoBox.classList.toggle("open");
    });
});

Je ziet dat de query van .card-image betekent dat ik deze class heb toegewezen aan een code. Deze (img) code is gekoppeld aan een event waar je op kunt klikken. Wanneer je erop klikt, verschijnt er een sliding box met informatie over mijn werkplek. 

De box opent en als je opnieuw klikt, sluit het weer. Bij de CSS heb ik een animatie gemaakt voor de JavaScript, waarmee het soepel (smooth) wordt weergegeven.