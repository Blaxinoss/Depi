// @ts-nocheck
document.addEventListener('DOMContentLoaded', function () {

    const CarModalParent = document.getElementById("MainSection");
    const AddNewCar = document.getElementById("ViewDetailsAddCard");
    const modal = document.getElementById("myModal");
    const ModalCloseButton = document.getElementById("close");
    const ModalSubmitButton = document.getElementById("ModalSubmit");
    const MainUl = document.querySelector(".SideBarUl")
    const MainUlLi = document.querySelectorAll(".SideBarUl .SideBarLi");
    const MainMenuOpener = document.querySelector(".MainMenuOpener");


    // Adding a new car card
    AddNewCar.addEventListener("click", (e) => {
        modal.style.display = "block";
    });


    // Fill the car card data from the modal inputs 
    ModalSubmitButton.addEventListener("click", function () {
        const CarImageInput = document.querySelector("input[name='CarImage']");
        const CarNameInput = document.querySelector("input[name='CarName']");
        const DateInput = document.querySelector("input[type='month']");
        const PriceInput = document.querySelector("input[type='number']");

        // if not photo uploaded use a default one
        const CarImageSrc = CarImageInput.files[0] ? URL.createObjectURL(CarImageInput.files[0]) : '../Images/about-us-image.png';
        const CarName = CarNameInput.value;
        const Date = DateInput.value;
        const Price = PriceInput.value;
        const FileName = CarImageInput.files[0].name

        // Validate that all fields are full
        if (!CarName || !Date || !Price) {
            alert("Please fill in all the fields!");
            return;
        }

        // Adding the car card
        AddCarModel(CarImageSrc, CarName, Date, Price, FileName);

        modal.style.display = "none";
        CarNameInput.value = '';
        DateInput.value = '';
        PriceInput.value = '';
    });


    /**
     * Adds a car model card to the DOM and attaches event listeners for viewing details.
     * 
     * @param {string} ImageSrc - The source URL for the car image
     * @param {string} CarName - The name of the car model
     * @param {string} Date - The release or availability date of the car
     * @param {number} price - The rental price per day 
     * @param {string} CarInputAttribute - An attribute used to identify the car type
     */

    function AddCarModel(ImageSrc, CarName, Date, price, CarInputAttribute) {

        // Create a container div for the car model
        const CarModel = document.createElement("div");
        CarModel.classList.add("CarModel");

        // Create and set the car image
        const CarImage = document.createElement("img");
        CarImage.classList.add("ImageModal");
        CarImage.src = ImageSrc;
        CarImage.alt = "Car Image";

        // Create a container for car data (name, date, price, etc.)
        const CarData = document.createElement("div");
        CarData.classList.add("carData");

        // Create and set the car name and date
        const TextData = document.createElement("div");
        TextData.classList.add("TextData");
        const CarNameInTextData = document.createElement("h4");
        CarNameInTextData.textContent = CarName;
        CarNameInTextData.classList.add("CarName");

        const DateElm = document.createElement("p");
        DateElm.classList.add("Date");
        DateElm.textContent = Date;

        // Create a container for price and details section
        const PriceDetails = document.createElement("div");
        PriceDetails.classList.add("PriceDetails");

        // Set the car price (formatted as EGP per day)
        const Price = document.createElement("div");
        Price.classList.add("price");

        const FPrice = document.createElement("p");
        FPrice.textContent = `EGP ${price}`;

        const SPirce = document.createElement("p");
        SPirce.textContent = `/Day`;

        // Create a view details button with car-specific attributes
        const Details = document.createElement("div");
        Details.classList.add("ViewDetails");
        Details.setAttribute("CarType", CarInputAttribute);
        Details.textContent = `View Details`;

        // Append all price-related elements
        Price.appendChild(FPrice);
        Price.appendChild(SPirce);
        PriceDetails.appendChild(Price);
        PriceDetails.appendChild(Details);

        // Append name and date to text data, then text data to car data
        TextData.appendChild(CarNameInTextData);
        TextData.appendChild(DateElm);
        CarData.appendChild(TextData);
        CarData.appendChild(PriceDetails);

        // Append car image and car data to the main car model div
        CarModel.appendChild(CarImage);
        CarModel.appendChild(CarData);

        // Append the car model div to the parent container (CarModalParent)
        CarModalParent.appendChild(CarModel);

        // Add event listener to the view details button
        Details.addEventListener("click", function (e) {
            const CarKey = e.target.getAttribute("CarType");
            const CarStage = CarRedirect[CarKey];
            const StageContent = document.getElementById("CarStage");

            // Clear any existing content in the stage
            while (StageContent.firstChild) {
                StageContent.removeChild(StageContent.firstChild);
            }

            // Add car image to the stage
            const CarImage = document.createElement("img");
            CarImage.src = e.target.closest('.CarModel').querySelector('img').src;
            CarImage.alt = "Car Image";
            CarImage.style.width = "20vw";
            CarImage.style.position = "absolute";
            CarImage.style.left = "50%";
            CarImage.style.top = "50%";
            CarImage.style.transform = "translate(-5vw,-2vh)";

            // Set the stage background depending on the car's key
            // if the car got a stage put it if not put the stage alone 
            if (CarStage) {
                StageContent.style.background = `url('${CarStage}') center/cover`;
            } else {
                StageContent.style.background = `url('../Images/StageTemplate.png') center/cover`;
            }

            // Append the car image to the stage
            StageContent.appendChild(CarImage);
            StageContent.style.width = "100%";
            StageContent.style.position = "relative";
            StageContent.style.height = "100vh";
            document.querySelector('.StageHolder').style.display = 'block'
            // Hide the modal parent and show the stage content
            CarModalParent.style.display = 'none';
            StageContent.style.display = "grid";
        });
    }


    //CLose the modal on clicking close
    ModalCloseButton.onclick = function () {
        modal.style.display = "none";
    };

    //CLose the modal on clicking outside of it 
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };



    // Create an empty object to hold the car image URLs dynamically

    const CarRedirect = {};
    document.querySelectorAll('.ViewDetails').forEach((viewDet) => {
        const Att = viewDet.getAttribute("CarType");

        // Define a new property in the CarRedirect object, where the key is the CarType and the value is the image path
        CarRedirect[Att] = `../Images/Stage/${Att}.png`;
    });

    // Add click event listeners to all 'ViewDetails' elements to handle car selection
    // Get the CarType from the clicked button and use it to fetch the correct car stage image URL from CarRedirect

    document.querySelectorAll(".ViewDetails").forEach((CarButton) => {
        CarButton.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("CarType"))
            const CarKey = e.target.getAttribute("CarType")
            const CarStage = CarRedirect[CarKey]


            // Hide the car modal 
            CarModalParent.style.display = 'none'

            // Get the stage content container where the car's details and image will be displayed
            const StageContent = document.getElementById("CarStage")
            console.log(CarStage)

            // Set the background of the stage content to the selected car's stage image
            // Set additional styles for the stage content

            StageContent.style.background = `url('${CarStage}') center/cover`;
            StageContent.style.width = "100%"
            StageContent.style.height = "100%"
            StageContent.style.position = "relative"
            console.log(CarRedirect);
            document.getElementById("CarStage").style.display = "grid"
            document.querySelector(".StageHolder").style.display = "block"
        })
    })



    // Stage Menu opener to see all the expanded-content
    document.querySelector('.MainMenuOpener').addEventListener('click', () => {
        const carStageContent = document.querySelector('.CarStageContent');
        carStageContent.classList.toggle('open');
    });




    // Grouping the Stages Content and show and hide them based on the event

    const StageButtons = [
        { stage: document.querySelector(".LatestRents"), button: document.getElementById("StageProf1") },
        { stage: document.querySelector(".LatestNotifications"), button: document.getElementById("StageProf2") },
        { stage: document.querySelector(".OtherInformation"), button: document.getElementById("StageProf3") }
    ];

    StageButtons.forEach((stageButton) => {
        stageButton.stage.addEventListener("click", (e) => {
            // Toggle the visibility of the expanded content
            e.stopPropagation();
            document.querySelector(".expanded-content").classList.toggle("shown");
            document.getElementById("overlay").classList.add("show");
        });
    });

    // Add the overlay if any expanded content is opened
    document.addEventListener("click", (e) => {
        if (!document.querySelector(".expanded-content").contains(e.target)) {
            document.querySelector(".expanded-content").classList.remove("shown");
            document.getElementById("overlay").classList.remove("show");
        }
    })


    // Logout logic to redirect to the sign-in
    document.querySelector(".SideBarLogOut").addEventListener("click", () => {
        this.location.href = '../sign-in.html'
    })


});
