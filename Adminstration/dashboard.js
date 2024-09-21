// @ts-nocheck
document.getElementById('maintenanceForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission and page refresh

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
    newRow.insertCell(0).textContent = person;
    newRow.insertCell(1).textContent = date;
    newRow.insertCell(2).textContent = car;
    newRow.insertCell(3).textContent = maintenance;
    newRow.insertCell(4).textContent = note;
    newRow.insertCell(5).textContent = price;
    newRow.insertCell(6).textContent = paid;
    newRow.insertCell(7).textContent = still;

});

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