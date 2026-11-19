document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const STEP_MS = 60;
    const DURATION = 800;

    document.querySelectorAll(".scramble").forEach(el => scrambleText(el, DURATION));

    function scrambleText(element, duration) {
        const nodes = getTextNodes(element);
        const originals = nodes.map(n => n.textContent);
        const steps = duration / STEP_MS;
        let iteration = 0;

        function update() {
            nodes.forEach((node, idx) => {
                const original = originals[idx];
                node.textContent = [...original].map((char, i) => {
                    if (/\s/.test(char)) return char; // keep spaces, tabs and newlines
                    if (iteration >= (steps / original.length) * i) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("");
            });

            iteration++;
            if (iteration < steps) {
                setTimeout(update, STEP_MS);
            } else {
                nodes.forEach((node, idx) => (node.textContent = originals[idx]));
            }
        }

        update();
    }

    // Only real text nodes, so icons and links are never touched
    function getTextNodes(element) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) {
            if (walker.currentNode.textContent.trim() !== "") nodes.push(walker.currentNode);
        }
        return nodes;
    }
});