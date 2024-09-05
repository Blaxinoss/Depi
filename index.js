// function to select an option and update the button text
function selectCar(option, e) {
  if (e.target.parentElement.classList.contains("cars")) {
    document.getElementById("selectedCar").innerText = option;
  } else {
    document.getElementById("selectedLocation").innerText = option;
  }
  e.target.parentElement.style.display = "none";
}

let dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((element) => {
  // show dropdown when button is clicked
  element.addEventListener("click", function () {
    const dropdown = element.lastElementChild;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // hide dropdown when clicking outside
  document.addEventListener("click", function (e) {
    const dropdown = element.lastElementChild;
    if (!element.firstElementChild.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
