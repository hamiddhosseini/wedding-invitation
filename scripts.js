// Wedding date (set yours here)
const weddingDate = new Date("September 8, 2025 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happily Married!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Language toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
    const html = document.documentElement;
    const isLTR = html.dir === "ltr";

    html.dir = isLTR ? "rtl" : "ltr";
    document.getElementById("lang-toggle").textContent = isLTR ? "English" : "فارسی";

    // Toggle all text elements
    document.querySelectorAll("[id$='-en']").forEach(el => el.classList.toggle("hidden"));
    document.querySelectorAll("[id$='-fa']").forEach(el => el.classList.toggle("hidden"));
});
