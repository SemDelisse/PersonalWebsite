document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (!lightbox || !lightboxImg) return;

    const closeBtn = lightbox.querySelector(".close");
    let lastFocused = null;

    function open(img) {
        lastFocused = document.activeElement;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove("hidden");
        closeBtn.focus();
    }

    function close() {
        lightbox.classList.add("hidden");
        if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", e => {
            e.stopPropagation();
            open(item);
        });
        item.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(item);
            }
        });
    });

    closeBtn.addEventListener("click", e => {
        e.stopPropagation();
        close();
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !lightbox.classList.contains("hidden")) close();
    });
});