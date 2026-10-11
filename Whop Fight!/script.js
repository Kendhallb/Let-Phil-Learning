const startBtn = document.querySelector("button");
const fightText = document.querySelector(".fight");
const healthBars = document.querySelectorAll(".health");

const countdownSound = new Audio("freesound_community-three-two-one-fight-deep-voice-38382.mp3");

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;

    // Bar reset
    healthBars.forEach(bar => {
        bar.style.width = "100%";
        bar.classList.remove("low");
    });

    // Start the clip from the beginning
    countdownSound.currentTime = 0;
    countdownSound.play();

    // Show each word when the voice says it
    setTimeout(() => { fightText.textContent = "3"; }, 100);
    setTimeout(() => { fightText.textContent = "2"; }, 1200);
    setTimeout(() => { fightText.textContent = "1"; }, 2050);

    setTimeout(() => {
        fightText.textContent = "Fight!";

        healthBars.forEach(bar => {
            bar.style.width = "25%";
            bar.classList.add("low");
        });
    }, 2900);

    // Let the button be used again once the clip is done
    setTimeout(() => { startBtn.disabled = false; }, 4000);
});