// Wedding date (set yours here)
const weddingDate = new Date("September 8, 2025 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const rightCol = document.querySelector(".right-column");
    const isPersian = rightCol.getAttribute("dir") === "rtl";

    const labels = isPersian
        ? { d: "روز", h: "ساعت", m: "دقیقه", s: "ثانیه" }
        : { d: "d", h: "h", m: "m", s: "s" };

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = isPersian
            ? "🎉 متأهل شدیم!"
            : "🎉 Happily Married!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let parts = [];
    if (days > 0) parts.push(`${days} ${labels.d}`);
    if (hours > 0) parts.push(`${hours} ${labels.h}`);
    if (minutes > 0) parts.push(`${minutes} ${labels.m}`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds} ${labels.s}`);

    document.getElementById("countdown").innerHTML = parts.join(" ");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Language toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
    const rightCol = document.querySelector(".right-column");
    const isLTR = rightCol.getAttribute("dir") !== "rtl";

    rightCol.setAttribute("dir", isLTR ? "rtl" : "ltr");
    document.getElementById("lang-toggle").textContent = isLTR ? "English" : "فارسی";

    // Toggle all text elements
    document.querySelectorAll("[id$='-en']").forEach(el => el.classList.toggle("hidden"));
    document.querySelectorAll("[id$='-fa']").forEach(el => el.classList.toggle("hidden"));
});

document.querySelectorAll("[id$='-en']").forEach(el => el.classList.add("hidden"));
document.querySelectorAll("[id$='-fa']").forEach(el => el.classList.remove("hidden"));
document.getElementById("lang-toggle").textContent = "English";
