// @ts-nocheck
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('RentTable').addEventListener('click', function (event) {
        const button = event.target;
        const row = button.closest('tr');
        const statusElement = row.querySelector('.status');


        // Handle all button clicks (Assign , Edit , Delete) functionalities

        if (button.classList.contains('assign-btn')) {

            // 1 Handle "Assign" and "Unassign" functionality
            if (button.textContent === "Assign") {
                button.textContent = "Unassign";
                statusElement.textContent = "Done";
                statusElement.classList.remove('cancelled');
                statusElement.classList.add('confirmed');
            } else {
                button.textContent = "Assign";
                statusElement.textContent = "Pending";
                statusElement.classList.remove('confirmed');
                statusElement.classList.add('cancelled');
            }
        } else if (button.classList.contains('edit_btn')) {

            //2 Handle "Edit" functionality
            const cells = row.getElementsByTagName('td');
            document.getElementById("Rent-Name").value = cells[1].textContent;
            document.getElementById("National-Id").value = cells[2].textContent;
            document.getElementById("RentCar-Model").value = cells[3].textContent;
            document.getElementById("Car-Plate").value = cells[4].textContent;
            document.getElementById("Rent-Date").value = cells[5].textContent;
            document.getElementById("Return-Date").value = cells[6].textContent;
            document.getElementById("KilosBef-Rents").value = cells[7].textContent;
            document.getElementById("Rent-TotalPrice").value = cells[8].textContent;
            document.getElementById("Rent-PaidPrice").value = cells[9].textContent;
            document.getElementById("Rent-RemainPrice").value = cells[10].textContent;

            // Show the form for editing // Adding a flag so we can track the record we want to edit 
            window.currentRow = row;
            openForm();
            document.querySelector('input.SubmitRent').style.display = 'none';
            document.querySelector('input.DoneRentEdit').classList.add('active');


        } else if (button.classList.contains('delete_btn')) {
            // 3 Handle "Delete" functionality
            row.remove();
        }
    });


    /**
     * filterTableRent
     *
     * This function filters the rows of the RentTable based on the user's input in the search field.
     * It loops through each row in the table and checks if any of the cells contain the search query.
     * Rows that match the search query are displayed while others are hidden.
     *
     * @function filterTableRent
     */
    filterTableRent = function () {
        var input = document.getElementById('searchInputRent');
        var filter = input.value.toLowerCase();
        var table = document.getElementById('RentTable');
        var tr = table.getElementsByTagName('tr');

        // Loop through all rows
        for (var i = 1; i < tr.length; i++) {
            var tdArray = tr[i].getElementsByTagName('td');
            var rowContainsFilterText = false;

            // Check each cell for search term
            for (var j = 0; j < tdArray.length; j++) {
                var cellText = tdArray[j].textContent || tdArray[j].innerText;
                if (cellText.toLowerCase().indexOf(filter) > -1) {
                    rowContainsFilterText = true;
                    break;
                }
            }

            // Show/Hide rows based on match
            tr[i].style.display = rowContainsFilterText ? "" : "none";
        }
    }


    // Selectors for the Rent opener page and adding a new page 
    const openPopupBtn = document.querySelector('.RentOpener');
    const popupForm = document.querySelector('.RentContainer');
    const overlay = document.getElementById('overlay');

    /**
     * Displays the form by adding a 'show' class to the popup form and overlay.
     * The 'show' class makes the form and overlay visible, usually by toggling CSS styles.
     *
     * @function openForm
     */
    function openForm() {
        // Add the 'show' class to both the form and overlay elements to display them
        popupForm.classList.add('show');
        overlay.classList.add('show');
    }

    /**
     * Hides the form by removing the 'show' class from the popup form and overlay.
     * This will hide the form and overlay, typically by changing their CSS display properties.
     *
     * @function closeForm
     */
    function closeForm() {
        // Remove the 'show' class from both the form and overlay elements to hide them
        popupForm.classList.remove('show');
        overlay.classList.remove('show');
    }


    // Add Listeners for the overlay and the new rent page
    openPopupBtn.addEventListener('click', openForm);
    overlay.addEventListener('click', closeForm);




    // Handle the submit of hte new Rents when clicking 
    document.getElementById("RentFormContainer").addEventListener("submit", (event) => {

        event.preventDefault();

        // Collect the data from the inputs 
        const Name = document.getElementById("Rent-Name").value
        const National_Id = document.getElementById("National-Id").value
        const RentCar_Model = document.getElementById("RentCar-Model").value
        const Car_Plate = document.getElementById("Car-Plate").value
        const Rent_Date = document.getElementById("Rent-Date").value
        const Return_Date = document.getElementById("Return-Date").value
        const KilosBef_Rents = document.getElementById("KilosBef-Rents").value
        const Rent_TotalPrice = document.getElementById("Rent-TotalPrice").value
        const Rent_PaidPrice = document.getElementById("Rent-PaidPrice").value
        const Rent_RemainPrice = document.getElementById("Rent-RemainPrice").value


        // Get the table and create a new row
        const RentTable = document.getElementById("RentTable").getElementsByTagName('tbody')[0];
        const RentRow = RentTable.insertRow()


        // put the data into the row
        RentRow.insertCell(0).textContent = RentTable.rows.length;;
        RentRow.insertCell(1).textContent = Name;
        RentRow.insertCell(2).textContent = National_Id;
        RentRow.insertCell(3).textContent = RentCar_Model;
        RentRow.insertCell(4).textContent = Car_Plate;
        RentRow.insertCell(5).textContent = Rent_Date;
        RentRow.insertCell(6).textContent = Return_Date;
        RentRow.insertCell(7).textContent = KilosBef_Rents;
        RentRow.insertCell(8).textContent = Rent_TotalPrice;
        RentRow.insertCell(9).textContent = Rent_PaidPrice;
        RentRow.insertCell(10).textContent = Rent_RemainPrice;

        // default for each row to handle the other operations can be done on the row
        RentRow.insertCell(11).innerHTML = '<span class="status cancelled">Pending</span>';
        RentRow.insertCell(12).innerHTML = '<button class="assign-btn">Assign</button>';
        RentRow.insertCell(12).innerHTML = '<button class="edit_btn">Edit</button>';
        RentRow.insertCell(13).innerHTML = '<button class="delete_btn">Delete</button>';


        // clear after submit
        document.getElementById("Rent-Name").value = '';
        document.getElementById("RentCar-Model").value = '';
        document.getElementById("Car-Plate").value = '';
        document.getElementById("Rent-Date").value = '';
        document.getElementById("Return-Date").value = '';
        document.getElementById("KilosBef-Rents").value = '';
        document.getElementById("Rent-TotalPrice").value = '';
        document.getElementById("Rent-PaidPrice").value = '';
        document.getElementById("Rent-RemainPrice").value = '';

        // close the form after submit
        closeForm()

    })



    // Handling edit logic after change the data and clicking the button
    document.querySelector('input.DoneRentEdit').addEventListener('click', function () {
        event.preventDefault();

        // if the flag is true 
        if (window.currentRow) {

            // get the new data and replace the old data
            const cells = window.currentRow.getElementsByTagName('td');
            cells[1].textContent = document.getElementById("Rent-Name").value;
            cells[2].textContent = document.getElementById("National-Id").value;
            cells[3].textContent = document.getElementById("RentCar-Model").value;
            cells[4].textContent = document.getElementById("Car-Plate").value;
            cells[5].textContent = document.getElementById("Rent-Date").value;
            cells[6].textContent = document.getElementById("Return-Date").value;
            cells[7].textContent = document.getElementById("KilosBef-Rents").value;
            cells[8].textContent = document.getElementById("Rent-TotalPrice").value;
            cells[9].textContent = document.getElementById("Rent-PaidPrice").value;
            cells[10].textContent = document.getElementById("Rent-RemainPrice").value;

            // Clear the flag after for future use
            window.currentRow = null;

            // Hide the Done button and show the Submit button
            document.querySelector('input.DoneRentEdit').classList.remove('active');
            document.querySelector('input.SubmitRent').style.display = 'block';

            // Close the form after clicking
            closeForm();
        }
    });


    // redirect to the sign in if the logout is clicked
    document.querySelector(".SideBarLogOut").addEventListener("click", () => {
        this.location.href = '../sign-in.html'
    })


});


