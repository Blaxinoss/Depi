
// Initialize and add the map
function initMap() {
  const location = { lat: 30.278864, lng: 31.745892 }; // Replace with your location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Show modal on "Contact Us on the Nav Bar" link click
document.querySelectorAll(".contactUsBtn").forEach((cls) => {

  cls.addEventListener("click", (e) => {
    event.preventDefault(); // Prevent default anchor behavior
    const modal = document.getElementById("contactModal");
    modal.classList.add("show"); // Add the show class to display the modal
    initMap(); // Initialize map when modal opens
  })
})


// Close modal when 'x' is clicked
document.querySelector(".close").onclick = function () {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("show"); // Remove the show class to hide the modal
};

// Close modal when clicking outside of the modal
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.classList.remove("show"); // Remove the show class to hide the modal
  }
};

// Show modal on "Contact Us on The footer" link click
document.getElementById("contactUsBtn2").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  const modal = document.getElementById("contactModal");
  modal.classList.add("show"); // Add the show class to display the modal
  initMap(); // Initialize map when modal opens
};

// Close modal when 'x' is clicked
document.querySelector(".close").onclick = function () {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("show"); // Remove the show class to hide the modal
};

// Close modal when clicking outside of the modal
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.classList.remove("show"); // Remove the show class to hide the modal
  }
};

