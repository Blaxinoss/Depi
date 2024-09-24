
// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Car data array
  const cars =[
    { make: 'Hyundai', model: 'Cn7 f4', year: 2021, seatingCapacity: 5, luggageSpace: 'Medium', price: 1800, img: 'Images/Elentra CN7 F4.png' },
    { make: 'Kia', model: 'Kia cop', year: 2010, seatingCapacity: 4, luggageSpace: 'Small', price: 1000, img: 'Images/kia copet 2010.png' },
    { make: 'Honda', model: 'Honda civic', year: 2009, seatingCapacity: 5, luggageSpace: 'Medium', price: 1000, img: 'Images/Honda civic.png' },
    { make: 'Hyundai', model: "Elantra md", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, img: "Images/Elentra Md 2014 frany.png" },
    { make: 'Kia', model: "Grand cerato", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 1400, img: "Images/Kia Grand Cerato.png" },
    { make: 'Hyundai', model: "Elantra AD white", year: 2019, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, img: "Images/Elenetra white 2020.png" },
    { make: 'Hyundai', model: "Elantra Cn7 f3", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, img: "Images/Elentra 2021 Grey F3.png" },
    { make: 'Hyundai', model: "Tousan nx4", year: 2021, seatingCapacity: 5, luggageSpace: "Large", price: 2000, img: "Images/Tuscan Nx4 .png" },
    { make: 'Hyundai', model: "Tousan 2019 zahry", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, img: "Images/tuscanpepsi.png" },
    { make: 'Hyundai', model: "Elantra Cn7 pepsi", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, img: "Images/ELentra 2021 pepsi.png" },
    { make: 'Kia', model: "Kia cerato k3", year: 2014, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, img: "Images/Kia k3 2015.png" },
    { make: 'Hyundai', model: "Elantra AD", year: 2017, seatingCapacity: 5, luggageSpace: "Medium", price: 1500, img: "Images/Elentra Ad 2017 champaigne .png" },
    { make: 'Kia', model: "Cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, img: "Images/cerato2018black.png" },
    { make: 'Mitsubishi', model: "Lancer shark", year: 2015, seatingCapacity: 5, luggageSpace: "Small", price: 1200, img: "Images/Lancer Shark rose.png" },
    { make: 'Kia', model: "new cerato", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, img: "Images/Kia  Cerato 2018 K4.png" },
    { make: 'Hyundai', model: "Elantra 2020 frany", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1600, img: "Images/ad 2020 dark grey (frany).png" },
    { make: 'Kia', model: "Kia Sportage", year: 2020, seatingCapacity: 5, luggageSpace: "Large", price: 2000, img: "Images/sportage2018.png" },
    { make: 'Toyota', model: "Toyota", year: 2020, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, img: "Images/Toyota 2020.png" },
    { make: 'BMW', model: "BMW", year: 2016, seatingCapacity : 5, luggageSpace: "Large", price: 3500, img: "Images/Bmw2016BLack.png" },
    { make: 'Kia', model: "Cerato 2018 black", year: 2018, seatingCapacity: 5, luggageSpace: "Medium", price: 1200, img: "Images/Kia  Cerato 2018 K4.png" },
    { make: 'Hyundai', model: "Tousan 2019 gray", year: 2019, seatingCapacity: 5, luggageSpace: "Large", price: 2000, img: "Images/Tuscna 2019 grey 2.png" },
    { make: 'Toyota', model: "Toyota", year: 2021, seatingCapacity: 5, luggageSpace: "Medium", price: 1800, img: "Images/Toyota Corolla White 2021.png" }
  ];
   

  const grid = document.getElementById('grid');
  const makeFilter = document.getElementById('make');
  const yearFilter = document.getElementById('year');
  const priceSlider = document.getElementById('price-slider');
  const priceValue = document.getElementById('price-value');
  const applyFiltersBtn = document.querySelector('.apply-filters-btn');
  const clearFiltersBtn = document.querySelector('.clear-filters-btn');
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.querySelector('.modal .close');
  const bookingForm = document.getElementById('booking-form');

  // Populate car grid
  function populateGrid(carsArray) {
      grid.innerHTML = '';
      carsArray.forEach(car => {
          const carElement = document.createElement('div');
          carElement.classList.add('grid-item');
          carElement.dataset.make = car.make;
          carElement.dataset.price = car.price;
          carElement.dataset.year = car.year;
          carElement.innerHTML = `
              <img src="${car.img}" alt="${car.make} ${car.model}">
              <p><strong>${car.make} ${car.model}</strong></p>
              <p>Year: ${car.year}</p>
              <p>Price: $${car.price}</p>
              <button class="book-now-btn">Book Now</button>
          `;
          grid.appendChild(carElement);
      });
  }

  // Initial population
  populateGrid(cars);

  // Update price value display
  priceSlider.addEventListener('input', () => {
      priceValue.textContent = `$${priceSlider.value}`;
  });

  // Apply filters
  function applyFilters() {
      const selectedMake = makeFilter.value;
      const selectedYear = yearFilter.value;
      const maxPrice = parseInt(priceSlider.value, 10);

      const filteredCars = cars.filter(car => {
          const matchesMake = selectedMake === '' || car.make === selectedMake;
          const matchesYear = selectedYear === '' || car.year.toString() === selectedYear;
          const matchesPrice = car.price <= maxPrice;
          return matchesMake && matchesYear && matchesPrice;
      });

      populateGrid(filteredCars);
  }

  applyFiltersBtn.addEventListener('click', applyFilters);

  // Clear filters
  clearFiltersBtn.addEventListener('click', () => {
      makeFilter.value = '';
      yearFilter.value = '';
      priceSlider.value = 3500;
      priceValue.textContent = '$3500';
      populateGrid(cars);
  });

  // Open modal on "Book Now" button click
  grid.addEventListener('click', e => {
      if (e.target.classList.contains('book-now-btn')) {
          bookingModal.style.display = 'block';
          // You can pass car data to the modal if needed
      }
  });

  // Close modal
  modalCloseBtn.addEventListener('click', () => {
      bookingModal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', e => {
      if (e.target === bookingModal) {
          bookingModal.style.display = 'none';
      }
  });

  // Handle booking form submission
  bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you! Your booking has been received.');
      bookingModal.style.display = 'none';
      bookingForm.reset();
  });
});
