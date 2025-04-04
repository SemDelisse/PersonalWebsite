document.addEventListener("DOMContentLoaded", () => {
    const devButton = document.getElementById("devButton");
    const modelButton = document.getElementById("modelButton");
    const buildsButton = document.getElementById("buildsButton");
    const buttonContainer = document.querySelector(".button-container");

    // Function to handle button activation and container class toggling
    function activateButton(activeButton, inactiveButtons, activeClass) {
        activeButton.classList.add("active");
        inactiveButtons.forEach(button => button.classList.remove("active"));
        buttonContainer.classList.remove("dev-active", "model-active", "builds-active");
        buttonContainer.classList.add(activeClass);
    }

    devButton.addEventListener("click", () => {
        activateButton(devButton, [modelButton, buildsButton], "dev-active");
        document.getElementById("development-projects").style.display = "inline";
        document.getElementById("modeling-projects").style.display = "none";
        document.getElementById("building-projects").style.display = "none";
    });

    modelButton.addEventListener("click", () => {
        activateButton(modelButton, [devButton, buildsButton], "model-active");
        document.getElementById("development-projects").style.display = "none";
        document.getElementById("modeling-projects").style.display = "inline";
        document.getElementById("building-projects").style.display = "none";
    });

    buildsButton.addEventListener("click", () => {
        activateButton(buildsButton, [devButton, modelButton], "builds-active");
        document.getElementById("development-projects").style.display = "none";
        document.getElementById("modeling-projects").style.display = "none";
        document.getElementById("building-projects").style.display = "inline";
    });
});