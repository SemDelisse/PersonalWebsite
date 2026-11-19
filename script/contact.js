document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".copy-mail");
    if (!btn) return;

    const email = btn.dataset.email;
    const original = btn.dataset.tooltip;
    let timer;

    function fallbackCopy(text) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { }
        document.body.removeChild(ta);
    }

    btn.addEventListener("click", e => {
        e.preventDefault(); // copy instead of opening the mail app
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).catch(() => fallbackCopy(email));
        } else {
            fallbackCopy(email);
        }
        btn.dataset.tooltip = "Copied!";
        clearTimeout(timer);
        timer = setTimeout(() => { btn.dataset.tooltip = original; }, 1500);
    });
});