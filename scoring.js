
// ==========================================
// SHINCHAN: BEYOND THE MASK
// PERSONALITY SCORING ENGINE
// ==========================================

// The six behavioural dimensions we measure
const traitNames = [
    "humility",
    "maturity",
    "composure",
    "accountability",
    "empathy",
    "adaptability"
];

// Store the final scores here
let personalityScores = {};

// Calculate the average score for each trait

function calculateScores(responses) {

    const totals = {};
    const minimums = {};
    const maximums = {};

    traitNames.forEach(trait => {
        totals[trait] = 0;
        minimums[trait] = 0;
        maximums[trait] = 0;
    });

    responses.forEach(response => {

        // Timed-out scenarios do not affect personality scores
        if (response.timedOut || !response.traits) return;

        const scenario = scenarios.find(
            item => item.title === response.scenario
        );

        if (!scenario) return;

        traitNames.forEach(trait => {

            // Check whether this scenario measures the trait
            const values = scenario.options.map(option =>
                option.traits[trait] ?? 0
            );

            const isMeasured = scenario.options.some(option =>
                Object.hasOwn(option.traits, trait)
            );

            if (!isMeasured) return;

            // Missing trait on the selected option counts as zero
            const selectedValue = response.traits[trait] ?? 0;

            totals[trait] += selectedValue;
            minimums[trait] += Math.min(...values);
            maximums[trait] += Math.max(...values);

        });
    });

    traitNames.forEach(trait => {

        const range = maximums[trait] - minimums[trait];

        personalityScores[trait] = range > 0
            ? Math.round(
                ((totals[trait] - minimums[trait]) / range) * 100
            )
            : 0;

    });

    return personalityScores;
}
