
// =================================
// SHINCHAN: BEYOND THE MASK
// MAIN INTERACTIONS
// =================================

const startButton = document.getElementById("startButton");
const introScreen = document.getElementById("introScreen");
const beginButton = document.getElementById("beginButton");

// Open the assessment introduction
startButton.addEventListener("click", function () {

    introScreen.classList.add("active");

    introScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

// Briefing completion feedback
beginButton.addEventListener("click", function () {

    startAssessment();

});
