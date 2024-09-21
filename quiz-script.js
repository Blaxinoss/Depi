const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const carsData = [
    { model: 'Cn7 f4', year: 2021, seatingCapacity: 5, luggageSpace: 'Medium', price: 1800, image: 'Images/Elentra CN7 F4.png' },
    { model: 'Kia cop', year: 2010, seatingCapacity: 4, luggageSpace: 'Small', price: 1000, image: 'Images/kia copet 2010.png' },
    { model: 'Honda civic', year: 2009, seatingCapacity: 5, luggageSpace: 'Medium', price: 1000, image: 'Images/Honda civic.png' },
    { model: "Elantra md", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "Images/Elentra Md 2014 frany.png" },
    { model: "Grand cerato", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 1400, image: "Images/Kia Grand Cerato.png" },
    { model: "Elantra AD white", year: 2019, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, image: "Images/Elenetra white 2020.png" },
    { model: "Elantra Cn7 f3", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "Images/Elentra 2021 Grey F3.png" },
    { model: "Tousan nx4", year: 2021, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "Images/Tuscan Nx4 .png" },
    { model: "Tousan 2019 zahry", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "Images/tuscanpepsi.png" },
    { model: "Elantra Cn7 pepsi", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "Images/ELentra 2021 pepsi.png" },
    { model: "Kia cerato k3", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "Images/Kia k3 2015.png" },
    { model: "Elantra AD", year: 2017, seatingCapacity: 5, luggageSpace: "Medium", price: 1500, image: "Images/Elentra Ad 2017 champaigne .png" },
    { model: "Cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "Images/cerato2018black.png" },
    { model: "Lancer shark", year: 2015, seatingCapacity: 5, luggageSpace: "Small", price: 1200, image: "Images/Lancer Shark rose.png" },
    { model: "new cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "Images/Kia  Cerato 2018 K4.png" },
    { model: "Elantra 2020 frany", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, image: "Images/ad 2020 dark grey (frany).png" },
    { model: "Kia Sportage", year: 2020, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "Images/sportage2018.png" },
    { model: "Toyota", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "Images/Toyota 2020.png" },
    { model: "BMW", year: 2016, seatingCapacity: 5, luggageSpace: "Large", price: 3500, image: "Images/Bmw2016BLack.png" },
    { model: "Cerato 2018 black", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, image: "Images/Kia  Cerato 2018 K4.png" },
    { model: "Tousan 2019 gray", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, image: "Images/Tuscna 2019 grey 2.png" },
    { model: "Toyota", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, image: "Images/Toyota Corolla White 2021.png" }
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

    if (filteredCars.length === 0) {
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
            <img src="${nearestCar.image}" alt="${nearestCar.model}" width="200" height="300">
            <p>Model: ${nearestCar.model}</p>
            <p>Year: ${nearestCar.year}</p>
            <p>Seating Capacity: ${nearestCar.seatingCapacity}</p>
            <p>Luggage Space: ${nearestCar.luggageSpace}</p>
            <p>Price: ${nearestCar.price}</p>
            <button id="retake-btn">Retake Quiz</button>
        `;
    } else {
        resultDiv.innerHTML = `
            <h2>Recommended Car:</h2>
            <img src="${filteredCars[0].image}" alt="${filteredCars[0].model}" width="200" height="300">
            <p>Model: ${filteredCars[0].model}</p>
            <p>Year: ${filteredCars[0].year}</p>
            <p>Seating Capacity: ${filteredCars[0].seatingCapacity}</p>
            <p>Luggage Space: ${filteredCars[0].luggageSpace}</p>
            <p>Price: ${filteredCars[0].price}</p>
            <button id="retake-btn">Retake Quiz</button>
        `;
    }


    quizForm.style.display = 'none';
    heroh.style.display = 'none';
    resultDiv.style.display = 'block';


    document.getElementById('retake-btn').addEventListener('click', () => {
      
        quizForm.style.display = 'block';
        resultDiv.style.display = 'none';
        quizForm.reset();
    });
});
