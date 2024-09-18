// @ts-nocheck

const openQuizBtn = document.getElementById('openQuizBtn');
const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const submitQuizBtn = document.getElementById('submitQuizBtn');
const resultSection = document.getElementById('resultSection');

// Car data
const carData = [
    { model: "Elantra Cn7 f4", year: 2021, seats: 5, luggageSpace: "Medium", price: 1800 },
    { model: "Kia cop", year: 2010, seats: 4, luggageSpace: "Small", price: 1000 },
    { model: "Honda civic", year: 2009, seats: 5, luggageSpace: "Medium", price: 1000 },
    // Add more car objects
];

// Function to map budget categories to price ranges
function mapBudgetToPrice(budget) {
    switch (budget) {
        case "Economy":
            return 1200;  // Max price for Economy
        case "Mid-range":
            return 1600;  // Max price for Mid-range
        case "Luxury":
            return 3500;  // Max price for Luxury
        default:
            return Infinity;  // No limit
    }
}

// Function to find the nearest car based on user inputs
function findNearestCar(userCarSize, userBudget, userLuggageSpace) {
    let nearestCar = null;
    let maxScore = 0;
    const maxBudget = mapBudgetToPrice(userBudget);

    for (const car of carData) {
        let score = 0;

        // Scoring logic
        if (car.luggageSpace.toLowerCase() === userLuggageSpace.toLowerCase()) {
            score += 3;
        }
        if (car.price <= maxBudget) {
            score += 2;
        }
        if ((userCarSize === "Small" && car.seats <= 4) || (userCarSize === "Large" && car.seats > 5) || (userCarSize === "Medium" && car.seats === 5)) {
            score += 1;
        }

        if (score > maxScore) {
            nearestCar = car;
            maxScore = score;
        }
    }

    if (!nearestCar) {
        throw new Error("No suitable car found. Please refine your search criteria.");
    }

    return nearestCar;
}

// Function to display the nearest car details
function displayNearestCar(nearestCar) {
    const carDetailsList = document.getElementById('carDetailsList');
    carDetailsList.innerHTML = `
        <li><strong>Model:</strong> ${nearestCar.model}</li>
        <li><strong>Year:</strong> ${nearestCar.year}</li>
        <li><strong>Seats:</strong> ${nearestCar.seats}</li>
        <li><strong>Luggage Space:</strong> ${nearestCar.luggageSpace}</li>
        <li><strong>Price:</strong> $${nearestCar.price}</li>
    `;
}

// Event listeners
openQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'block';
});

closeQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === quizModal) {
        quizModal.style.display = 'none';
    }
});

submitQuizBtn.addEventListener('click', () => {
    try {
        const userCarSize = document.getElementById('carSize').value;
        const userBudget = document.getElementById('budget').value;
        const userLuggageSpace = document.getElementById('luggageSpace').value;

        const nearestCar = findNearestCar(userCarSize, userBudget, userLuggageSpace);

        resultSection.classList.remove('hidden');
        displayNearestCar(nearestCar);
    } catch (error) {
        alert("No suitable car found. Please refine your search criteria.");
    }
});