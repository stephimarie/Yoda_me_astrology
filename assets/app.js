$(document).ready(function () {

    //example of image click function to get id or value from a bigger thing then input to push to api calls
    // $("img").on("click", function () {
    //     console.log($(this).attr("id"))
    // })



    //variable to set up submit function based on horoscope signs
    let userInput = $("form");

    //submit function to call api when input is clicked
    userInput.on("submit", function (e) {
        e.preventDefault();

        //variable for user sign input from buttons
        let userSign = e.target.querySelector("input").getAttribute("value");
        console.log("user selected: " + userSign);

        //axios call to aztro horoscop api
        axios({
            method: "POST",
            url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
            params: { day: 'today', sign: 'aquarius' },
            headers: {
                "x-rapidapi-key": "0ad9d781cemshb9f1fc3ee82194cp11e268jsncdcd563df8b3",
                "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                useQueryString: true,
            },
        }).then((response) => {
            //bringing response back with json so its understandable
            JSON.response;
            //horoscope reading from aztro api
            console.log("horoscope says: " + response.data.description);
            let horoText = response.data.description;

            //axios call to yoda translate
            axios({
                method: "POST",
                url: "https://yodish.p.rapidapi.com/yoda.json",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "yodish.p.rapidapi.com",
                    "x-rapidapi-key": "0ad9d781cemshb9f1fc3ee82194cp11e268jsncdcd563df8b3",
                    useQueryString: true,
                },
                params: {
                    text: horoText,
                },
                data: {},
            })
                .then((response) => {
                    console.log("Yoda says: " + response.data.contents.translated);
                })
                .catch((error) => {
                    console.log("yoda translate error: " + error);
                });

        }).catch((err) => {
            console.log("aztro horoscope error: " + err);
        });
    });
});
