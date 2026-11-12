
// ======================================
// SHINCHAN: BEYOND THE MASK
// ASSESSMENT SCENARIO DATABASE
// ======================================

const scenarios = [

    {
        title: "THE GROUP PROJECT DISASTER",
        image: "assets/images/scenarios/scenario-01.png",
        description: "Your team has submitted its project. You suddenly notice a major mistake in your contribution. Nobody else has noticed it yet.",
        question: "WHAT DO YOU DO?",
        options: [
            {
                text: "Tell the team immediately, even if it causes trouble.",
                traits: { accountability: 3, humility: 1 }
            },
            {
                text: "Investigate how serious the mistake is before deciding.",
                traits: { composure: 2, adaptability: 1 }
            },
            {
                text: "Wait and see whether anyone notices.",
                traits: { accountability: -1, composure: 1 }
            },
            {
                text: "Try to fix it yourself before telling anyone.",
                traits: { accountability: 2, adaptability: 2 }
            }
        ]
    },

    {
        title: "THE CREDIT THIEF",
        image: "assets/images/scenarios/scenario-02.png",
        description: "A friend takes credit for an idea you worked hard on. Everyone congratulates them. They haven't acknowledged your contribution.",
        question: "WHAT IS YOUR MOVE?",
        options: [
            {
                text: "Speak to them privately after the event.",
                traits: { maturity: 3, composure: 2 }
            },
            {
                text: "Correct the story in front of everyone.",
                traits: { accountability: 1, composure: -1 }
            },
            {
                text: "Let it go this time, but remember it.",
                traits: { composure: 1, maturity: 1 }
            },
            {
                text: "Ask the group about the work without directly accusing anyone.",
                traits: { empathy: 2, humility: 1 }
            }
        ]
    },

    {
        title: "THE PUBLIC EMBARRASSMENT",
        image: "assets/images/scenarios/scenario-03.png",
        description: "Someone makes an embarrassing joke about you in front of a group. Everyone laughs. You weren't expecting it.",
        question: "HOW DO YOU RESPOND?",
        options: [
            {
                text: "Laugh along if it genuinely doesn't bother you.",
                traits: { composure: 2, adaptability: 1 }
            },
            {
                text: "Tell them clearly that the joke crossed a line.",
                traits: { maturity: 3, accountability: 1 }
            },
            {
                text: "Stay quiet and think about it later.",
                traits: { composure: 1 }
            },
            {
                text: "Make a joke back to change the atmosphere.",
                traits: { adaptability: 2, composure: 1 }
            }
        ]
    },

    {
        title: "THE UNFAIR BLAME",
        image: "assets/images/scenarios/scenario-04.png",
        description: "Your team blames you for a failed task. You know the responsibility was shared, but you also made a mistake.",
        question: "WHAT DO YOU DO?",
        options: [
            {
                text: "Accept your part and explain what went wrong collectively.",
                traits: { accountability: 3, humility: 2 }
            },
            {
                text: "Explain exactly what everyone else contributed to the failure.",
                traits: { accountability: 1, composure: 1 }
            },
            {
                text: "Ask everyone to review the timeline before assigning blame.",
                traits: { composure: 2, accountability: 2 }
            },
            {
                text: "Apologise for everything just to end the argument.",
                traits: { empathy: 1, accountability: 0 }
            }
        ]
    },

    {
        title: "LAST-MINUTE CHAOS",
        image: "assets/images/scenarios/scenario-05.png",
        description: "Your entire plan falls apart one hour before an important deadline. Two teammates are unavailable and a key resource is missing.",
        question: "WHAT IS YOUR FIRST INSTINCT?",
        options: [
            {
                text: "Reorganise the tasks around whatever is still available.",
                traits: { adaptability: 3, composure: 2 }
            },
            {
                text: "Try to contact everyone and recover the original plan.",
                traits: { accountability: 2, adaptability: 1 }
            },
            {
                text: "Focus on the most important part and accept that some things may be incomplete.",
                traits: { composure: 3, adaptability: 2 }
            },
            {
                text: "Pause briefly and figure out what actually went wrong.",
                traits: { composure: 2, adaptability: 1 }
            }
        ]
    },

    {
        title: "THE TEMPTING SHORTCUT",
        image: "assets/images/scenarios/scenario-06.png",
        description: "You discover a shortcut that could improve your result. However, using it would quietly shift extra work onto someone who is already struggling.",
        question: "WHAT DO YOU CHOOSE?",
        options: [
            {
                text: "Avoid the shortcut because the cost to the other person isn't fair.",
                traits: { empathy: 3, humility: 1 }
            },
            {
                text: "Discuss the shortcut and its consequences with the person first.",
                traits: { empathy: 3, accountability: 2 }
            },
            {
                text: "Use it only if you can take responsibility for the extra work.",
                traits: { accountability: 3, adaptability: 1 }
            },
            {
                text: "Compare the benefits and consequences before deciding.",
                traits: { composure: 2, adaptability: 2 }
            }
        ]
    },

    {
        title: "THE FRIEND WHO NEEDS HELP",
        image: "assets/images/scenarios/scenario-07.png",
        description: "A friend asks for your help during a busy week. You have your own important work and helping them could disrupt your schedule.",
        question: "WHAT DO YOU DO?",
        options: [
            {
                text: "Make time to help, even if you need to rearrange your schedule.",
                traits: { empathy: 3, adaptability: 1 }
            },
            {
                text: "Explain your situation and offer a realistic time to help.",
                traits: { empathy: 2, accountability: 2 }
            },
            {
                text: "Help them find another person who is available.",
                traits: { empathy: 2, adaptability: 2 }
            },
            {
                text: "Focus on your own deadline and explain why you cannot help.",
                traits: { accountability: 2, maturity: 1 }
            }
        ]
    },

    {
        title: "THE UNEXPECTED FAILURE",
        image: "assets/images/scenarios/scenario-08.png",
        description: "You prepare carefully for something important, but the result is much worse than expected. People around you seem disappointed.",
        question: "WHAT HAPPENS NEXT?",
        options: [
            {
                text: "Review what went wrong and change your approach.",
                traits: { adaptability: 3, accountability: 2 }
            },
            {
                text: "Take a break before deciding what to do next.",
                traits: { composure: 3, maturity: 1 }
            },
            {
                text: "Ask someone you trust for an outside perspective.",
                traits: { humility: 2, adaptability: 1 }
            },
            {
                text: "Focus on the parts that went well and build from there.",
                traits: { composure: 2, adaptability: 2 }
            }
        ]
    },

    {
        title: "THE IMPOSSIBLE DEADLINE",
        image: "assets/images/scenarios/scenario-09.png",
        description: "You are responsible for a task that is taking longer than expected. A deadline is approaching and your team is counting on you.",
        question: "WHAT IS YOUR NEXT MOVE?",
        options: [
            {
                text: "Communicate the delay and negotiate a realistic plan.",
                traits: { accountability: 3, maturity: 2 }
            },
            {
                text: "Ask someone to collaborate so the work can be completed.",
                traits: { humility: 2, adaptability: 2 }
            },
            {
                text: "Prioritise the essential parts and deliver those first.",
                traits: { composure: 2, adaptability: 3 }
            },
            {
                text: "Continue working independently and reassess near the deadline.",
                traits: { accountability: 1, composure: 1 }
            }
        ]
    },

    {
        title: "THE FINAL PLOT TWIST",
        image: "assets/images/scenarios/scenario-10.png",
        description: "You finally solve a difficult problem. Just before celebrating, you discover that your solution creates an unexpected problem for another person.",
        question: "WHAT MATTERS MOST NOW?",
        options: [
            {
                text: "Fix the new problem, even if it means revisiting your solution.",
                traits: { empathy: 3, accountability: 2 }
            },
            {
                text: "Ask the affected person what outcome would help them most.",
                traits: { empathy: 3, humility: 2 }
            },
            {
                text: "Evaluate the alternatives before changing anything.",
                traits: { composure: 2, adaptability: 2 }
            },
            {
                text: "Explain why your original decision made sense with the information available.",
                traits: { accountability: 1, composure: 1 }
            }
        ]
    }

];

// ======================================
// ASSESSMENT ENGINE FUNCTIONALITY
// ======================================

let currentScenario = 0;
let countdown;
let scenarioStartTime;
let assessmentResponses = [];

const assessmentScreen = document.getElementById("assessmentScreen");

function startAssessment() {

    currentScenario = 0;
    assessmentResponses = [];

    assessmentScreen.classList.add("active");

    assessmentScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    renderScenario();
}

function renderScenario() {

    clearInterval(countdown);

    const scenario = scenarios[currentScenario];
    // Change illustration for every scenario

    const scenarioImage = document.querySelector(
         ".scenario-illustration img"
    );

    scenarioImage.src = scenario.image;

    scenarioImage.alt = scenario.title;

    if (!scenario) {
        finishAssessment();
        return;
    }

    document.getElementById("scenarioTitle").textContent =
        scenario.title;

    document.getElementById("scenarioDescription").textContent =
        scenario.description;

    document.getElementById("scenarioQuestion").textContent =
        scenario.question;

    document.getElementById("scenarioNumber").textContent =
        `SCENARIO ${String(currentScenario + 1).padStart(2, "0")} / ${scenarios.length}`;

    const percentage =
        ((currentScenario + 1) / scenarios.length) * 100;

    document.getElementById("progressPercent").textContent =
        `${Math.round(percentage)}% COMPLETE`;

    document.getElementById("progressFill").style.width =
        `${percentage}%`;

    const optionsContainer =
        document.getElementById("answerOptions");

    optionsContainer.innerHTML = "";

    scenario.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option.text}`;

        button.addEventListener("click", () => {
            submitAnswer(index, false);
        });

        optionsContainer.appendChild(button);

    });

    document.getElementById("assessmentHint").textContent =
        "CHOOSE WISELY. THE LAB IS WATCHING.";

    scenarioStartTime = Date.now();

    startTimer();
}

function startTimer() {

    let timeLeft = 25;

    document.getElementById("timer").textContent = timeLeft;

    countdown = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(countdown);

            submitAnswer(null, true);

        }

    }, 1000);
}

function submitAnswer(optionIndex, timedOut) {

    clearInterval(countdown);

    const responseTime = Date.now() - scenarioStartTime;

    const scenario = scenarios[currentScenario];

    const selectedOption =
        optionIndex === null
            ? null
            : scenario.options[optionIndex];

    assessmentResponses.push({

        scenario: scenario.title,

        selectedAnswer:
            selectedOption ? selectedOption.text : "TIME EXPIRED",

        traits:
            selectedOption ? selectedOption.traits : {},

        responseTime: responseTime,

        timedOut: timedOut

    });

    const buttons =
        document.querySelectorAll(".answer-option");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === optionIndex) {
            button.classList.add("selected");
        }

    });

    document.getElementById("assessmentHint").textContent =
        timedOut
            ? "TIME'S UP! THE LAB HAS RECORDED YOUR RESPONSE."
            : "DECISION LOCKED. MOVING TO THE NEXT DISASTER...";

    setTimeout(() => {

        currentScenario++;

        if (currentScenario < scenarios.length) {
            renderScenario();
        } else {
            finishAssessment();
        }

    }, 900);
}


function finishAssessment() {

    clearInterval(countdown);

    const scores = calculateScores(assessmentResponses);

    window.assessmentResponses = assessmentResponses;
    window.personalityScores = scores;

    displayResults(scores);

    console.log("Assessment completed:", assessmentResponses.length);
}
