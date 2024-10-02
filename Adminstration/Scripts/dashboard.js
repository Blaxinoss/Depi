// @ts-nocheck
document.addEventListener('DOMContentLoaded', function () {




    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Start THE Filtering for the Rent page //
    /////////////////////////////////////////////////////////////////////////////////////////////// 

    // go the sign in when the logout is pressed
    document.querySelector(".SideBarLogOut").addEventListener("click", () => {
        this.location.href = '../sign-in.html'
    })

    document.querySelectorAll('.assign-btn').forEach(button => {
        button.addEventListener('click', function () {
            const row = this.closest('tr');
            const statusElement = row.querySelector('.status');

            // handle the logic of the Assign and Unassign when clicking the button 'Done' , 'Pending'
            if (this.textContent === "Assign") {
                this.textContent = "Unassign";  // Change button text to Unassign
                statusElement.textContent = "Pending";  // Change status text to Cancelled
                statusElement.classList.remove('confirmed');  // Remove the confirmed class
                statusElement.classList.add('cancelled');     // Add the cancelled class
            } else {
                this.textContent = "Assign";  // Change button text back to Assign
                statusElement.textContent = "Done";  // Change status back to Confirmed
                statusElement.classList.remove('cancelled');  // Remove the cancelled class
                statusElement.classList.add('confirmed');     // Add the confirmed class
            }
        });
    });







    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Start THE adding and Filtering for the Maintainance page //
    /////////////////////////////////////////////////////////////////////////////////////////////// 

    document.getElementById('maintenanceForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the Submition refresh

        // Get the values from the form inputs
        const person = document.getElementById('person-name').value;
        const date = document.getElementById('date').value;
        const car = document.getElementById('car-select').value;
        const maintenance = document.getElementById('maintain-description').value;
        const note = document.getElementById("notes").value;
        const price = document.getElementById('total-price').value;
        const paid = document.getElementById('paid').value;
        const still = document.getElementById('remaining').value;

        // Insert new row into the table
        const table = document.getElementById('maintenanceTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Create new cells and populate with form values
        newRow.insertCell(0).textContent = table.rows.length;
        newRow.insertCell(1).textContent = person;
        newRow.insertCell(2).textContent = date;
        newRow.insertCell(3).textContent = car;
        newRow.insertCell(4).textContent = maintenance;
        newRow.insertCell(5).textContent = note;
        newRow.insertCell(6).textContent = price;
        newRow.insertCell(7).textContent = paid;
        newRow.insertCell(8).textContent = still;

        // Adding the delete cell manually when creating the row so every new rent will have the function available and ready to be used
        const deleteCell = newRow.insertCell(9);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'DeleteBtnMaintain delete_btn';


        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            const row = e.target.closest('tr'); // Find the closest row
            row.remove();
        });

        deleteCell.appendChild(deleteButton);

        document.getElementById('person-name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('car-select').value = '';
        document.getElementById('maintain-description').value = '';
        document.getElementById('notes').value = '';
        document.getElementById('total-price').value = '';
        document.getElementById('paid').value = '';
        document.getElementById('remaining').value = '';
    });



    /**
     * filterTable
     *
     * This function filters the rows of the 'maintenanceTable' based on the user's input in the search field
     * It loops through each row in the table and checks if any of the cells contain the search query
     * Rows that match the search query are displayed if not then hidden.
     *
     * @function filterTable
     */

    function filterTable() {
        // Get the input field
        var input = document.getElementById('searchInput');

        // Get the search term and convert it to lowercase
        var filter = input.value.toLowerCase();

        // Get the table and rows
        var table = document.getElementById('maintenanceTable');
        var tr = table.getElementsByTagName('tr');

        // Loop through the table rows and hide those that don't match the search query
        for (var i = 1; i < tr.length; i++) {
            var tdArray = tr[i].getElementsByTagName('td');
            var rowContainsFilterText = false;

            // Loop through each cell in the row
            for (var j = 0; j < tdArray.length; j++) {
                var cellText = tdArray[j].textContent || tdArray[j].innerText;
                if (cellText.toLowerCase().indexOf(filter) > -1) {
                    rowContainsFilterText = true;
                    break; // If a match is found, stop checking this row
                }
            }

            // Show the row if a match was found, otherwise hide it
            tr[i].style.display = rowContainsFilterText ? "" : "none";
        }
    }


    var input = document.getElementById('searchInput');
    input.addEventListener('keyup', filterTable);


    ///////////////////////////////////////////////////////////////////////////////////////////////
    // FINISH THE Filtering for the Maintainance page //
    /////////////////////////////////////////////////////////////////////////////////////////////// 



})