
const characterProfiles = [

    {
        name: "Shinchan",
        traits: {
            accountability: 45,
            adaptability: 90,
            composure: 65,
            empathy: 65,
            humility: 55,
            maturity: 35
        },
        description: "Unpredictable, playful and surprisingly resourceful. You don't always follow the expected route, and your unconventional approach can turn chaos into opportunity."
    },

    {
        name: "Kazama",
        traits: {
            accountability: 80,
            adaptability: 55,
            composure: 75,
            empathy: 50,
            humility: 40,
            maturity: 80
        },
        description: "Organised, ambitious and responsible. You value doing things properly, although sometimes your expectations of yourself and others can be a little too high."
    },

    {
        name: "Nene",
        traits: {
            accountability: 65,
            adaptability: 60,
            composure: 35,
            empathy: 55,
            humility: 45,
            maturity: 55
        },
        description: "Expressive, determined and strong-willed. You aren't afraid to make your feelings known, and you bring plenty of energy into difficult situations."
    },

    {
        name: "Masao",
        traits: {
            accountability: 55,
            adaptability: 45,
            composure: 35,
            empathy: 85,
            humility: 80,
            maturity: 55
        },
        description: "Considerate, sensitive and cooperative. You care about the people around you and often try to maintain harmony, even when situations become uncomfortable."
    },

    {
        name: "Bo-chan",
        traits: {
            accountability: 60,
            adaptability: 65,
            composure: 95,
            empathy: 65,
            humility: 85,
            maturity: 85
        },
        description: "Quietly observant, thoughtful and composed. You prefer understanding a situation before reacting, and you rarely feel the need to prove yourself."
    },

    {
        name: "Ai-chan",
        traits: {
            accountability: 65,
            adaptability: 65,
            composure: 80,
            empathy: 40,
            humility: 30,
            maturity: 75
        },
        description: "Confident, strategic and self-assured. You know what you want and aren't easily intimidated, although you may sometimes prioritise your own perspective."
    },

    {
        name: "Hiroshi",
        traits: {
            accountability: 85,
            adaptability: 65,
            composure: 65,
            empathy: 75,
            humility: 70,
            maturity: 80
        },
        description: "Grounded, dependable and practical. You understand responsibility and try to balance your own needs with the people who count on you."
    },

    {
        name: "Misae",
        traits: {
            accountability: 85,
            adaptability: 80,
            composure: 45,
            empathy: 80,
            humility: 50,
            maturity: 70
        },
        description: "Protective, resourceful and determined. You take charge when things go wrong and care deeply about the people around you."
    }

];


function findCharacterMatch(scores) {

    const rankedCharacters = characterProfiles.map(character => {

        let distance = 0;

        Object.keys(character.traits).forEach(trait => {

            const difference =
                scores[trait] - character.traits[trait];

            distance += difference * difference;

        });

        return {
            ...character,
            distance: Math.sqrt(distance)
        };

    });

    // Closest personality profiles come first
    rankedCharacters.sort((a, b) =>
        a.distance - b.distance
    );

    // Keep the two closest matches
    const topTwo = rankedCharacters.slice(0, 2);

    // Convert their relative similarity into percentages
    const firstWeight = 1 / (topTwo[0].distance + 1);
    const secondWeight = 1 / (topTwo[1].distance + 1);

    const totalWeight = firstWeight + secondWeight;

    return topTwo.map((character, index) => ({
        ...character,
        matchPercentage: Math.round(
            (index === 0 ? firstWeight : secondWeight)
            / totalWeight * 100
        )
    }));

}

function displayResults(scores) {
    const matchedCharacters = findCharacterMatch(scores);
    const mainMatch = matchedCharacters[0];
    const secondMatch = matchedCharacters[1];

    const resultContainer = document.querySelector(
        ".assessment-container"
    );

    const traits = [
        {
            name: "Accountability",
            key: "accountability",
            description: "How readily you acknowledge your role in mistakes and take responsibility for your decisions."
        },
        {
            name: "Adaptability",
            key: "adaptability",
            description: "How comfortably you adjust when plans change or unexpected challenges appear."
        },
        {
            name: "Composure",
            key: "composure",
            description: "How you manage your reactions and think through situations under pressure."
        },
        {
            name: "Empathy",
            key: "empathy",
            description: "How much you consider other people's feelings, needs and perspectives."
        },
        {
            name: "Humility",
            key: "humility",
            description: "How open you are to feedback, admitting mistakes and recognising others' contributions."
        },
        {
            name: "Maturity",
            key: "maturity",
            description: "How thoughtfully you balance your immediate reactions with the consequences of your choices."
        }
    ];


    resultContainer.innerHTML = `
        <div class="scenario-card results-card">

            <h1>YOUR PERSONALITY FILE IS READY!</h1>

            <div class="results-lab-icon">🧪</div>

            <p class="results-intro">
                Ten decisions. Six behavioural dimensions.
                And a whole lot of chaos.
            </p>

            <div class="character-reveal">

                <p class="reveal-label">THE LAB HAS DECIDED...</p>

                <h1>YOUR SHINCHAN DNA!</h1>

                <div class="character-match main-match">

                    <p>YOUR MAIN CHARACTER</p>

                    <img
                        class="character-portrait main-portrait"
                        src="assets/images/characters/${mainMatch.name.toLowerCase().replace(/[^a-z]/g, '')}.png"
                        alt="${mainMatch.name}"
                    >

                    <h2 class="matched-character">
                        ${mainMatch.name.toUpperCase()}!
                    </h2>

                    <div class="match-percentage">
                        ${mainMatch.matchPercentage}% RELATIVE FIT
                    </div>

                    <p class="character-description">
                        ${mainMatch.description}
                    </p>

                </div>

                <div class="character-match secondary-match">

                    <p>YOUR SECONDARY CHARACTER</p>

                    <img
                        class="character-portrait secondary-portrait"
                        src="assets/images/characters/${secondMatch.name.toLowerCase().replace(/[^a-z]/g, '')}.png"
                        alt="${secondMatch.name}"
                    >

                    <h2>
                        ${secondMatch.name.toUpperCase()}!
                    </h2>

                    <div class="match-percentage">
                        ${secondMatch.matchPercentage}% RELATIVE FIT
                    </div>

                    <p class="character-description">
                        ${secondMatch.description}
                    </p>

                </div>

                <div class="reveal-stamp">CASE CLOSED!</div>

            </div>

            <h2>YOUR BEHAVIOURAL BREAKDOWN</h2>

            <div class="trait-results">

                ${traits.map(trait => `
                    <div class="trait-item">

                        <div class="trait-heading">
                            <span>${trait.name}</span>
                            <strong>${scores[trait.key]}/100</strong>
                        </div>

                        <p class="trait-description">
                            ${trait.description}
                        </p>


                        <div class="trait-bar">
                            <div
                                class="trait-fill"
                                style="width: ${scores[trait.key]}%"
                            ></div>
                        </div>

                    </div>
                `).join("")}

            </div>

            <p class="results-note">
                These scores represent behavioural patterns
                in your scenario responses, not fixed personality labels.
            </p>

            <button id="restartButton" class="restart-button">
                TAKE THE TEST AGAIN!
            </button>


        </div>
    `;
    document.getElementById("restartButton").addEventListener("click", function () {
        window.location.reload();
    });

}
