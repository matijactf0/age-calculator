function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dob = new Date(dobInput);
    var currentDate = new Date();
    var ageInMillis = currentDate - dob;
    var ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
    ageInYears = Math.floor(ageInYears);

    var resultContainer = document.getElementById("result-container");
    var resultElement = document.getElementById("result");
    var loader = document.querySelector(".loader");

    loader.style.display = "block";

    setTimeout(function() {
        loader.style.display = "none";
        resultElement.innerHTML = "Vaša starost je: " + ageInYears + " godina.";
    }, 1000); 
}
