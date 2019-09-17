//food array to randomly select a type of food to eat
var foodArray = ["chinese", "mexican", "burger", "sandwich", "pizza", "thai", "sushi", "korean", "chicken wings", "ramen", "hawaiian", "mediterranean", "arabic", "indian", "soul food"];

$(document).on("click", "#random", yelpInfo);

function yelpInfo() {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    var randomFood = foodArray[Math.floor(Math.random() * foodArray.length)];
    console.log(randomFood);

    var yelpAPIkey = "szilVGiGWvqemg5iRsO467vT0806iGe5kazKMT1iONvN4XqA4fzTGbKMtpuIudFVSiRB7ikZ_ZWvI0Xr0ImMpuCdS_sMsejPHdti0ml3Wj_4TiirKzYxKZ7rWeB7XXYx"

    $("#yelp-info").empty();
    // need to update lat and long with current user location later
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + randomFood + "&limit=4&latitude=37.791512&longitude=-122.393649"

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            authorization: "Bearer " + yelpAPIkey
        }
    }).then(function (response) {

        console.log(response);

        var results = response.businesses;

        console.log(results);

        for (var i = 0; i < results.length; i++) {

            var newRest = $("<div id='restaurant'>");

            var restImage = $("<img>");
            restImage.attr("src", results[i].image_url);

            var restName = $("<tr>").text(results[i].name);
            var restRating = $("<tr>").text("Rating: " + results[i].rating);
            var restPrice = $("<tr>").text("Price: " + results[i].price);
            var restAddress = $("<tr>").text(results[i].location.address1 + ", " + results[i].location.city);

            newRest.append(restImage);
            newRest.append(restName, restRating, restPrice, restAddress);

            $("#yelp-info").append(newRest);
        }
    });
};

// -------------------------------ANDREW'S WORK AREA------------------------------------------------------//






// -----------------------------------------------------------------------------------------------------//



// -----------------------------------JERRY'S WORK AREA----------------------------------------------------//

$(document).on("click", "#vegetarian", yelpInfo2);

function yelpInfo2() {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    var yelpAPIkey = "szilVGiGWvqemg5iRsO467vT0806iGe5kazKMT1iONvN4XqA4fzTGbKMtpuIudFVSiRB7ikZ_ZWvI0Xr0ImMpuCdS_sMsejPHdti0ml3Wj_4TiirKzYxKZ7rWeB7XXYx"

    $("#yelp-info").empty();
    // need to update lat and long with current user location later
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=vegetarian&limit=4&latitude=37.791512&longitude=-122.393649"

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            authorization: "Bearer " + yelpAPIkey
        }
    }).then(function (response) {

        console.log(response);

        var results = response.businesses;

        console.log(results);

        for (var i = 0; i < results.length; i++) {

            var newRest = $("<div id='restaurant'>");

            var restImage = $("<img>");
            restImage.attr("src", results[i].image_url);

            var restName = $("<tr>").text(results[i].name);
            var restRating = $("<tr>").text("Rating: " + results[i].rating);
            var restPrice = $("<tr>").text("Price: " + results[i].price);
            var restAddress = $("<tr>").text(results[i].location.address1 + ", " + results[i].location.city);

            newRest.append(restImage);
            newRest.append(restName, restRating, restPrice, restAddress);

            $("#yelp-info").append(newRest);
        }
    });
};

$("#submit-button").on("click", function (event) {
    
    event.preventDefault();

    foodName = $("#food-input").val().trim();
    foodPrice = $("#price-input").val().trim();
    foodRating = $("#rating-input").val().trim();

    $("#food-input").val("");
    $("#price-input").val("");
    $("#rating-input").val("");


    // $('#modal').modal('hide');

    yelpInfo3();

});



function yelpInfo3() {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    var yelpAPIkey = "szilVGiGWvqemg5iRsO467vT0806iGe5kazKMT1iONvN4XqA4fzTGbKMtpuIudFVSiRB7ikZ_ZWvI0Xr0ImMpuCdS_sMsejPHdti0ml3Wj_4TiirKzYxKZ7rWeB7XXYx"

    $("#yelp-info").empty();
    // need to update lat and long with current user location later
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + foodName + "&limit=4&latitude=37.791512&longitude=-122.393649&price=" + foodPrice + "&sort_rating" + foodRating

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            authorization: "Bearer " + yelpAPIkey
        }
    }).then(function (response) {

        console.log(response);

        var results = response.businesses;

        console.log(results);

        for (var i = 0; i < results.length; i++) {

            var newRest = $("<div id='restaurant'>");

            var restImage = $("<img>");
            restImage.attr("src", results[i].image_url);

            var restName = $("<tr>").text(results[i].name);
            var restRating = $("<tr>").text("Rating: " + results[i].rating);
            var restPrice = $("<tr>").text("Price: " + results[i].price);
            var restAddress = $("<tr>").text(results[i].location.address1 + ", " + results[i].location.city);

            newRest.append(restImage);
            newRest.append(restName, restRating, restPrice, restAddress);

            $("#yelp-info").append(newRest);
        }
    });
};

//-----------------------------------------------------------------------------------------------------------//