$(document).ready(function () {
    //url info for horoscope api call
    let begUrl = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=";
    const apiKey = "0ad9d781cemshb9f1fc3ee82194cp11e268jsncdcd563df8b3";
    
    let img = $(".img")


    //submit function to call api when input is clicked
   img.on("click", function() {

   
        let userSign = document.querySelector("img").getAttribute("value");
        console.log(userSign);

        let horoscopeUrl = begUrl + userSign;
        
        //api call using ajax to horoscope api
        $.ajax({
            url: horoscopeUrl,
            method: "POST",
            headers: {
                "x-rapidapi-key": "0ad9d781cemshb9f1fc3ee82194cp11e268jsncdcd563df8b3",
                "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            }
        }).then(response => {
            console.log(response.description);
            //gathering variables and info to push to yoda speak api
            $("#words").text(response.description);
            let horoscopeSign = response.description;
            // let yodaBegUrl = "https://yodish.p.rapidapi.com/yoda.json?text=";
            //taking horoscope result and changing to format into yoda api call
            // let horoSplit = function (str) {
            //     var words = str.split (" ");

            //     return words;
            // }

            // console.log("testing     " + horoToYoda);

            // let yodaUrl = yodaBegUrl + horoToYoda;
            // console.log(yodaUrl);
            // return yodaUrl;
            //yoda api call using ajax***NOT WORKING WILL ADD IN LATER


        }).catch(err => {
            console.log(err);
        })


    });
});
