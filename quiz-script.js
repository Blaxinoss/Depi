// @ts-nocheck

const openQuizBtn = document.getElementById('openQuizBtn');
const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const submitQuizBtn = document.getElementById('submitQuizBtn');
const resultSection = document.getElementById('resultSection');

// Car data
const carData = [
    { model: "Cn7 f420", year: 2021, seats: 5, luggageSpace: "Medium", price: 1800, image: "car1.jpg" },
    { model: "Kia cop", year: 2010, seats: 4, luggageSpace: "Small", price: 1000, image: "car2.jpg" },
    { model: "Honda civic", year: 2009, seats: 5, luggageSpace: "Medium", price: 1000, image: "car3.jpg" },
    { model: "Elantra md", year: 2014, seats: 5, luggageSpace: "Medium", price: 1200, image: "car4.jpg" },
    { model: "Grand cerato", year: 2019, seats: 5, luggageSpace: "Large", price: 1400, image: "car5.jpg" },
    { model: "Elantra AD white", year: 2019, seats: 5, luggageSpace: "Medium", price: 1600, image: "car6.jpg" },
    { model: "Elantra Cn7 f3", year: 2021, seats: 5, luggageSpace: "Medium", price: 1800, image: "car7.jpg" },
    { model: "Tousan nx4", year: 2021, seats: 5, luggageSpace: "Large", price: 2000, image: "car8.jpg" },
    { model: "Tousan 2019 zahry", year: 2019, seats: 5, luggageSpace: "Large", price: 2000, image: "car9.jpg" },
    { model: "Elantra Cn7 pepsi", year: 2021, seats: 5, luggageSpace: "Medium", price: 1800, image: "car10.jpg" },
    { model: "Kia cerato k3", year: 2014, seats: 5, luggageSpace: "Medium", price: 1200, image: "car11.jpg" },
    { model: "Elantra AD", year: 2017, seats: 5, luggageSpace: "Medium", price: 1500, image: "car12.jpg" },
    { model: "Cerato", year: 2018, seats: 5, luggageSpace: "Medium", price: 1200, image: "car13.jpg" },
    { model: "Lancer shark", year: 2015, seats: 5, luggageSpace: "Small", price: 1200, image: "car14.jpg" },
    { model: "new cerato", year: 2018, seats: 5, luggageSpace: "Medium", price: 1200, image: "car15.jpg" },
    { model: "Elantra 2020 frany", year: 2020, seats: 5, luggageSpace: "Medium", price: 1600, image: "car16.jpg" },
    { model: "Kia Sportage", year: 2020, seats: 5, luggageSpace: "Large", price: 2000, image: "car17.jpg" },
    { model: "Toyota", year: 2020, seats: 5, luggageSpace: "Medium", price: 1800, image: "car18.jpg" },
    { model: "Shark", year: 2017, seats: 5, luggageSpace: "Small", price: 1200, image: "car19.jpg" },
    { model: "BMW", year: 2016, seats: 5, luggageSpace: "Medium/Large", price: 3500, image: "car20.jpg" },
    { model: "Cerato 2018 black", year: 2018, seats: 5, luggageSpace: "Medium", price: 1200, image: "car21.jpg" },
    { model: "Tousan 2019 gray", year: 2019, seats: 5, luggageSpace: "Large", price: 2000, image: "car22.jpg" },
    { model: "Toyota", year: 2021, seats: 5, luggageSpace: "Medium", price: 1800, image: "car23.jpg" }
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
    const carImage = resultSection.querySelector('img');
    const carDetailsList = resultSection.querySelector('ul');

    carImage.src = nearestCar.image;
    carDetailsList.innerHTML = `
        <li><strong>Model:</strong> ${nearestCar.model}</li>
        <li><strong>Year:</strong> ${nearestCar.year}</li>
        <li><strong>Seats:</strong> ${nearestCar.seats}</li>
        <li><strong>Luggage Space:</strong> ${nearestCar.luggageSpace}</li>
        <li><strong>Price:</strong> $${nearestCar.price}</li>
    `;
}

// Event listeners
openQuizBtn .addEventListener('click', () => {
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
        alert(error.message);
    }
});