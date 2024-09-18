// script.js
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const carsData = [
    { model: 'Cn7 f420', year: 2021, seatingCapacity: 5, luggageSpace: 'Medium', price: 1800, image: 'cn7-f420.jpg' },
    { model: 'Kia cop', year: 2010, seatingCapacity: 4, luggageSpace: 'Small', price: 1000, image: 'kia-cop.jpg' },
    { model: 'Honda civic', year: 2009, seatingCapacity: 5, luggageSpace: 'Medium', price: 1000, image: 'honda-civic.jpg' },
    {model: "Elantra md", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "car4.jpg" } ,
    { model: "Grand cerato", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 1400, image: "car5.jpg" },
    { model: "Elantra AD white", year: 2019, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, image: "car6.jpg" },
    { model: "Elantra Cn7 f3", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "car7.jpg" },
    { model: "Tousan nx4", year: 2021, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "car8.jpg" },
    { model: "Tousan 2019 zahry", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "car9.jpg" },
    { model: "Elantra Cn7 pepsi", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "car10.jpg" },
    { model: "Kia cerato k3", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "car11.jpg" },
    { model: "Elantra AD", year: 2017, seatingCapacity: 5, luggageSpace: "Medium", price: 1500, image: "car12.jpg" },
    { model: "Cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "car13.jpg" },
    { model: "Lancer shark", year: 2015, seatingCapacity: 5, luggageSpace: "Small", price: 1200, image: "car14.jpg" },
    { model: "new cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "car15.jpg" },
    { model: "Elantra 2020 frany", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, image: "car16.jpg" },
    { model: "Kia Sportage", year: 2020, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "car17.jpg" },
    { model: "Toyota", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "car18.jpg" },
    { model: "Shark", year: 2017, seatingCapacity: 5, luggageSpace: "Small", price: 1200, image: "car19.jpg" },
    { model: "BMW", year: 2016, seatingCapacity: 5, luggageSpace: "Medium/Large", price: 3500, image: "car20.jpg" },
    { model: "Cerato 2018 black", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "car21.jpg" },
    { model: "Tousan 2019 gray", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "car22.jpg" },
    { model: "Toyota", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "car23.jpg" }
];

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const seatingCapacity = parseInt(document.getElementById('seating-capacity').value);
    const luggageSpace = document.getElementById('luggage-space').value;
    const budget = parseInt(document.getElementById('budget').value);

    const filteredCars = carsData.filter((car) => {
        return car.seatingCapacity === seatingCapacity &&
               car.luggageSpace === luggageSpace &&
               car.price <= budget;
    });

    if (filteredCars.length ===  0) {
        // If no exact match, find the nearest car
        let nearestCar = null;
        let minDiff = Infinity;

        carsData.forEach((car) => {
            const diff = Math.abs(car.price - budget);
            if (diff < minDiff) {
                minDiff = diff;
                nearestCar = car;
            }
        });

        resultDiv.innerHTML = `
            <h2>Recommended Car:</h2>
            <img src="${nearestCar.image}" alt="${nearestCar.model}" width="300" height="200">
            <p>Model: ${nearestCar.model}</p>
            <p>Year: ${nearestCar.year}</p>
            <p>Seating Capacity: ${nearestCar.seatingCapacity}</p>
            <p>Luggage Space: ${nearestCar.luggageSpace}</p>
            <p>Price: ${nearestCar.price}</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <h2>Recommended Car:</h2>
            <img src="${filteredCars[0].image}" alt="${filteredCars[0].model}" width="300" height="200">
            <p>Model: ${filteredCars[0].model}</p>
            <p>Year: ${filteredCars[0].year}</p>
            <p>Seating Capacity: ${filteredCars[0].seatingCapacity}</p>
            <p>Luggage Space: ${filteredCars[0].luggageSpace}</p>
            <p>Price: ${filteredCars[0].price}</p>
        `;
    }
});