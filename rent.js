document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rentalform').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.textContent = '');

        let isValid = true;

        // Validate fields (add your validation logic here)
        // Validate Tenant Name
        const tenantName = document.getElementById('tenantName').value.trim();
        if (!tenantName) {
            document.getElementById('tenantNameError').textContent = 'Tenant Name is required.';
            isValid = false;
        }

        // Validate National ID
        const nationalID = document.getElementById('nationalID').value.trim();
        if (!nationalID) {
            document.getElementById('nationalIDError').textContent = 'National ID is required.';
            isValid = false;
        }

        // Validate Phone Number
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex as needed
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
            document.getElementById('phoneNumberError').textContent = 'Valid Phone Number is required.';
            isValid = false;
        }

        // Validate Mileage Before Rental
        const mileageBeforeRental = document.getElementById('mileageBeforeRental').value.trim();
        if (!mileageBeforeRental || mileageBeforeRental < 0) {
            document.getElementById('mileageBeforeRentalError').textContent = 'Mileage Before Rental must be a positive number.';
            isValid = false;
        }

        // Validate Lease Date
        const leaseDate = document.getElementById('leaseDate').value;
        if (!leaseDate) {
            document.getElementById('leaseDateError').textContent = 'Lease Date is required.';
            isValid = false;
        }

        // Validate Number of Days Leasing
        const numberOfDays = document.getElementById('numberOfDays').value.trim();
        if (!numberOfDays || numberOfDays <= 0) {
            document.getElementById('numberOfDaysError').textContent = 'Number of Days Leasing must be a positive number.';
            isValid = false;
        }

        // Validate Return Date
        const returnDate = document.getElementById('returnDate').value;
        if (!returnDate) {
            document.getElementById('returnDateError').textContent = 'Return Date is required.';
            isValid = false;
        }

        // Validate Car Type
        const carType = document.getElementById('carType').value.trim();
        if (!carType) {
            document.getElementById('carTypeError').textContent = 'Car Type is required.';
            isValid = false;
        }

        // Validate Plate Number
        const plateNumber = document.getElementById('plateNumber').value.trim();
        if (!plateNumber) {
            document.getElementById('plateNumberError').textContent = 'Plate Number is required.';
            isValid = false;
        }

        // Validate Total Price
        const totalPrice = document.getElementById('totalPrice').value.trim();
        if (!totalPrice || totalPrice <= 0) {
            document.getElementById('totalPriceError').textContent = 'Total Price must be a positive number.';
            isValid = false;
        }

        // Validate Paid Amount
        const paid = document.getElementById('paid').value.trim();
        if (!paid || paid < 0) {
            document.getElementById('paidError').textContent = 'Paid amount cannot be negative.';
            isValid = false;
        }

        // Validate Remaining Amount
        const remaining = document.getElementById('remaining').value.trim();
        if (!remaining || remaining < 0) {
            document.getElementById('remainingError').textContent = 'Remaining amount cannot be negative.';
            isValid = false;
        }

        if (isValid) {
            // Gather form data
            const formData = {
                tenantName: document.getElementById('tenantName').value.trim(),
                nationalID: document.getElementById('nationalID').value.trim(),
                phoneNumber: document.getElementById('phoneNumber').value.trim(),
                mileageBeforeRental: document.getElementById('mileageBeforeRental').value.trim(),
                leaseDate: document.getElementById('leaseDate').value,
                numberOfDays: document.getElementById('numberOfDays').value.trim(),
                returnDate: document.getElementById('returnDate').value,
                carType: document.getElementById('carType').value.trim(),
                plateNumber: document.getElementById('plateNumber').value.trim(),
                totalPrice: document.getElementById('totalPrice').value.trim(),
                paid: document.getElementById('paid').value.trim(),
                remaining: document.getElementById('remaining').value.trim(),
            };

            // Insert data into the table
            const dataTableBody = document.getElementById('dataTableBody');
            const newRow = document.createElement('tr');

            Object.values(formData).forEach(value => {
                const newCell = document.createElement('td');
                newCell.textContent = value;
                newRow.appendChild(newCell);
            });

            dataTableBody.appendChild(newRow);

            const dataTable = document.getElementById('dataTable');
            dataTable.style.display = 'table'; // Show the table


            // Optionally, reset the form
            this.reset();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rentalform').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.textContent = '');

        let isValid = true;

        // Validate fields (add your validation logic here)
        // Validate Tenant Name
        const tenantName = document.getElementById('tenantName').value.trim();
        if (!tenantName) {
            document.getElementById('tenantNameError').textContent = 'Tenant Name is required.';
            isValid = false;
        }

        // Validate National ID
        const nationalID = document.getElementById('nationalID').value.trim();
        if (!nationalID) {
            document.getElementById('nationalIDError').textContent = 'National ID is required.';
            isValid = false;
        }

        // Validate Phone Number
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex as needed
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
            document.getElementById('phoneNumberError').textContent = 'Valid Phone Number is required.';
            isValid = false;
        }

        // Validate Mileage Before Rental
        const mileageBeforeRental = document.getElementById('mileageBeforeRental').value.trim();
        if (!mileageBeforeRental || mileageBeforeRental < 0) {
            document.getElementById('mileageBeforeRentalError').textContent = 'Mileage Before Rental must be a positive number.';
            isValid = false;
        }

        // Validate Lease Date
        const leaseDate = document.getElementById('leaseDate').value;
        if (!leaseDate) {
            document.getElementById('leaseDateError').textContent = 'Lease Date is required.';
            isValid = false;
        }

        // Validate Number of Days Leasing
        const numberOfDays = document.getElementById('numberOfDays').value.trim();
        if (!numberOfDays || numberOfDays <= 0) {
            document.getElementById('numberOfDaysError').textContent = 'Number of Days Leasing must be a positive number.';
            isValid = false;
        }

        // Validate Return Date
        const returnDate = document.getElementById('returnDate').value;
        if (!returnDate) {
            document.getElementById('returnDateError').textContent = 'Return Date is required.';
            isValid = false;
        }

        // Validate Car Type
        const carType = document.getElementById('carType').value.trim();
        if (!carType) {
            document.getElementById('carTypeError').textContent = 'Car Type is required.';
            isValid = false;
        }

        // Validate Plate Number
        const plateNumber = document.getElementById('plateNumber').value.trim();
        if (!plateNumber) {
            document.getElementById('plateNumberError').textContent = 'Plate Number is required.';
            isValid = false;
        }

        // Validate Total Price
        const totalPrice = document.getElementById('totalPrice').value.trim();
        if (!totalPrice || totalPrice <= 0) {
            document.getElementById('totalPriceError').textContent = 'Total Price must be a positive number.';
            isValid = false;
        }

        // Validate Paid Amount
        const paid = document.getElementById('paid').value.trim();
        if (!paid || paid < 0) {
            document.getElementById('paidError').textContent = 'Paid amount cannot be negative.';
            isValid = false;
        }

        // Validate Remaining Amount
        const remaining = document.getElementById('remaining').value.trim();
        if (!remaining || remaining < 0) {
            document.getElementById('remainingError').textContent = 'Remaining amount cannot be negative.';
            isValid = false;
        }

        if (isValid) {
            // Gather form data
            const formData = {
                tenantName: document.getElementById('tenantName').value.trim(),
                nationalID: document.getElementById('nationalID').value.trim(),
                phoneNumber: document.getElementById('phoneNumber').value.trim(),
                mileageBeforeRental: document.getElementById('mileageBeforeRental').value.trim(),
                leaseDate: document.getElementById('leaseDate').value,
                numberOfDays: document.getElementById('numberOfDays').value.trim(),
                returnDate: document.getElementById('returnDate').value,
                carType: document.getElementById('carType').value.trim(),
                plateNumber: document.getElementById('plateNumber').value.trim(),
                totalPrice: document.getElementById('totalPrice').value.trim(),
                paid: document.getElementById('paid').value.trim(),
                remaining: document.getElementById('remaining').value.trim(),
            };

            // Insert data into the table
            const dataTableBody = document.getElementById('dataTableBody');
            const newRow = document.createElement('tr');

            Object.values(formData).forEach(value => {
                const newCell = document.createElement('td');
                newCell.textContent = value;
                newRow.appendChild(newCell);
            });

            dataTableBody.appendChild(newRow);

            const dataTable = document.getElementById('dataTable');
            dataTable.style.display = 'table'; // Show the table


            // Optionally, reset the form
            this.reset();
        }
    });
});