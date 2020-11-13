$(document).ready(function () {

    //example of image click function to get id or value from a bigger thing then input to push to api calls
    // $("a").on("click", function () {
    //     console.log($(this).attr("id"))
    // })

    //variable to set up submit function based on horoscope signs
    let userInput = $("a");

    //submit function to call api when input is clicked
    userInput.on("click", function () {

        //variable for user sign input from buttons
        let userSign = $(this).attr("id");
        console.log("user selected: " + userSign);

        //clears previous text data from horoscope
        $("h4").text("");

        //axios call to aztro horoscop api
        axios({
            method: "POST",
            url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
            params: { day: 'today', sign: userSign },
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

            // axios call to yoda translate
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
                    let yodaTranslate = response.data.contents.translated
                    console.log("Yoda says: " + yodaTranslate);

                    $("h4").text(yodaTranslate);
                })
                .catch((error) => {
                    console.log("yoda translate error: " + error);
                });

        }).catch((err) => {
            console.log("aztro horoscope error: " + err);
        });
    });

    //aquarius popup functions
    $(".aquaTrig").click(function () {
        $('.aquaHover').show();
    });
    $('.aquaHover').click(function () {
        $('.aquaHover').hide();
    });

    //pisces popup functions
    $(".piscesTrig").click(function () {
        $('.piscesHover').show();
    });
    $('.piscesHover').click(function () {
        $('.piscesHover').hide();
    });

    //aries popup functions
    $(".ariesTrig").click(function () {
        $('.ariesHover').show();
    });
    $('.ariesHover').click(function () {
        $('.ariesHover').hide();
    });

    //taurus popup functions
    $(".taurusTrig").click(function () {
        $('.taurusHover').show();
    });
    $('.taurusHover').click(function () {
        $('.taurusHover').hide();
    });

    //gemini popup functions
    $(".geminiTrig").click(function () {
        $('.geminiHover').show();
    });
    $('.geminiHover').click(function () {
        $('.geminiHover').hide();
    });

    //cancer popup functions
    $(".cancerTrig").click(function () {
        $('.cancerHover').show();
    });
    $('.cancerHover').click(function () {
        $('.cancerHover').hide();
    });


    //popup X button, closing button
    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide();
    });

});


