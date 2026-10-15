
const secretPassword = "meghamit@1727";

function unlockWebsite() {
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === secretPassword) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");
        updateCountdown();
    } else {
        document.getElementById("error").textContent =
            "Wrong password, Baby! Try again ❤️";
    }
}

// Countdown to November 2, 2026
function updateCountdown() {
    const anniversary = new Date(2026, 10, 2, 0, 0, 0).getTime();
    const now = new Date().getTime();
    const difference = anniversary - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "♥";
        document.getElementById("hours").textContent = "♥";
        document.getElementById("minutes").textContent = "♥";
        document.getElementById("seconds").textContent = "♥";
        document.getElementById("countdownMessage").textContent =
            "Happy first anniversary, Baby! ❤️";
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((difference / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
        Math.floor((difference / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
        Math.floor((difference / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Romantic music
const song = document.getElementById("loveSong");

function toggleMusic() {
    const button = document.getElementById("musicButton");

    if (song.paused) {
        song.play().then(() => {
            button.textContent = "♫ Pause Our Song";
        }).catch(() => {
            alert("Add your MP3 song to the music folder as our-song.mp3");
        });
    } else {
        song.pause();
        button.textContent = "♫ Play Our Song";
    }
}


function showSurprise() {
    const content = document.getElementById("surpriseContent");
    const button = document.getElementById("surpriseBtn");
    const video = document.getElementById("surpriseVideo");

    content.classList.remove("hidden");
    button.textContent = "Your Surprise Is Opened ❤️";
    button.disabled = true;

    video.play().catch(() => {
        // If autoplay is blocked, press Play on the video.
    });

    content.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
