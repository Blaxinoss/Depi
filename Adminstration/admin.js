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



    AddNewCar.addEventListener("click", (e) => {
        modal.style.display = "block";
    });

    ModalSubmitButton.addEventListener("click", function () {
        const CarImageInput = document.querySelector("input[name='CarImage']");
        const CarNameInput = document.querySelector("input[name='CarName']");
        const DateInput = document.querySelector("input[type='month']");
        const PriceInput = document.querySelector("input[type='number']");

        const CarImageSrc = CarImageInput.files[0] ? URL.createObjectURL(CarImageInput.files[0]) : '../Images/about-us-image.png'; // default image if none is selected
        const CarName = CarNameInput.value;
        const Date = DateInput.value;
        const Price = PriceInput.value;
        const FileName = CarImageInput.files[0].name

        if (!CarName || !Date || !Price) {
            alert("Please fill in all the fields!");
            return;
        }

        AddCarModel(CarImageSrc, CarName, Date, Price, FileName);

        modal.style.display = "none";

        CarNameInput.value = '';
        DateInput.value = '';
        PriceInput.value = '';
    });

    function AddCarModel(ImageSrc, CarName, Date, price, CarInputAttribute) {
        const CarModel = document.createElement("div");
        CarModel.classList.add("CarModel");

        const CarImage = document.createElement("img");
        CarImage.classList.add("ImageModal")

        CarImage.src = ImageSrc;
        CarImage.alt = "Car Image";

        const CarData = document.createElement("div");
        CarData.classList.add("carData");

        const TextData = document.createElement("div");
        TextData.classList.add("TextData")
        const CarNameInTextData = document.createElement("h4");
        CarNameInTextData.textContent = CarName;
        CarNameInTextData.classList.add("CarName");

        const DateElm = document.createElement("p");
        DateElm.classList.add("Date")
        DateElm.textContent = Date;

        const PriceDetails = document.createElement("div");
        PriceDetails.classList.add("PriceDetails");

        const Price = document.createElement("div");
        Price.classList.add("price");

        const FPrice = document.createElement("p");
        FPrice.textContent = `EGP ${price}`;

        const SPirce = document.createElement("p");
        SPirce.textContent = `/Day`;

        const Details = document.createElement("div");
        Details.classList.add("ViewDetails");
        Details.setAttribute("CarType", CarInputAttribute)
        Details.textContent = `View Details`;

        Price.appendChild(FPrice);
        Price.appendChild(SPirce);
        PriceDetails.appendChild(Price);
        PriceDetails.appendChild(Details);

        TextData.appendChild(CarNameInTextData);
        TextData.appendChild(DateElm);

        CarData.appendChild(TextData);
        CarData.appendChild(PriceDetails);

        CarModel.appendChild(CarImage);
        CarModel.appendChild(CarData);

        CarModalParent.appendChild(CarModel);

        Details.addEventListener("click", function (e) {
            const CarKey = e.target.getAttribute("CarType");
            const CarStage = CarRedirect[CarKey];
            const StageContent = document.getElementById("CarStage");

            // Clear the CarStage content
            while (StageContent.firstChild) {
                StageContent.removeChild(StageContent.firstChild);
            }

            const CarImage = document.createElement("img");
            CarImage.src = e.target.closest('.CarModel').querySelector('img').src;
            CarImage.alt = "Car Image";
            CarImage.style.width = "20vw";
            CarImage.style.position = "absolute";
            CarImage.style.left = "50%";
            CarImage.style.top = "50%";
            CarImage.style.transform = "translate(-5vw,-2vh)";

            if (CarStage) {
                StageContent.style.background = `url('${CarStage}') center/cover`;
            } else {
                StageContent.style.background = `url('../Images/StageTemplate.png') center/cover`;
            }

            StageContent.appendChild(CarImage);
            StageContent.style.width = "100%";
            StageContent.style.position = "relative"
            StageContent.style.height = "auto";
            CarModalParent.style.display = 'none';
            StageContent.style.display = "grid";
        });
    }

    ModalCloseButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    const CarRedirect = {};
    document.querySelectorAll('.ViewDetails').forEach((viewDet) => {
        const Att = viewDet.getAttribute("CarType");

        // Define a new property with a dynamic name
        CarRedirect[Att] = `../Images/Stage/${Att}.png`;
    });





    document.querySelectorAll(".ViewDetails").forEach((CarButton) => {
        CarButton.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("CarType"))
            const CarKey = e.target.getAttribute("CarType")
            const CarStage = CarRedirect[CarKey]
            CarModalParent.style.display = 'none'
            const StageContent = document.getElementById("CarStage")
            console.log(CarStage)
            StageContent.style.background = `url('${CarStage}') center/cover`;
            StageContent.style.width = "100%"
            StageContent.style.height = "auto"
            StageContent.style.position = "relative"
            console.log(CarRedirect);
            document.getElementById("CarStage").style.display = "grid"
        })
    })

    const StageButtons = [
        { stage: document.querySelector(".LatestRents"), button: document.getElementById("StageProf1") },
        { stage: document.querySelector(".LatestNotifications"), button: document.getElementById("StageProf2") },
        { stage: document.querySelector(".OtherInformation"), button: document.getElementById("StageProf3") }
    ];

    StageButtons.forEach((stageButton) => {
        stageButton.button.addEventListener("click", () => {
            stageButton.stage.classList.add("RollUpAnimation")
        })
    })



    document.querySelector('.MainMenuOpener').addEventListener('click', () => {
        const carStageContent = document.querySelector('.CarStageContent');
        carStageContent.classList.toggle('open');
    });

    document.querySelector('.LatestRents').addEventListener('click', () => {
        document.querySelector('.LatestRents').classList.toggle('activeInside');
        if (latestRentsSection.classList.contains('activeInside')) {
            document.querySelector(".latestRentsData").style.display = 'block';
        } else {
            latestRentsData.style.display = 'none';
        }
    });

    document.querySelector('.LatestNotifications').addEventListener('click', () => {
        document.querySelector('.LatestNotifications').classList.toggle('activeInside');
    });

    document.querySelector('.OtherInformation').addEventListener('click', () => {
        document.querySelector('.OtherInformation').classList.toggle('activeInside');
    });

});
