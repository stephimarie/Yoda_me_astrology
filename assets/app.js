

let begUrl = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=";
let userInput = document.querySelectorAll(".sign-button");

userInput.on("click", function() {
    let userSign = userInput.attr("id");
    console.log(userInput.attr("id"));
    console.log("sign: " + userSign);

    let horoscopeUrl = begUrl + userSign;

    $.ajax({
        url: horoscopeUrl,
        method: "POST",
        headers: {
            "x-rapidapi-key": "0ad9d781cemshb9f1fc3ee82194cp11e268jsncdcd563df8b3",
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        }
    }).then(response => {
        console.log(response.description);
        $("#words").text(response.description);
    });

});

