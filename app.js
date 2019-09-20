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

    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + randomFood + "&limit=4&latitude=" + currentLocation.lat + "&longitude=" + currentLocation.lng

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
            var restPos = {
                lat: results[i].coordinates.latitude,
                lng: results[i].coordinates.longitude
            };
            var marker = new google.maps.Marker({
                position: restPos,
                map: map,
                title: results[i].name,
                animation: google.maps.Animation.DROP,
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
            marker.setMap(map);
        }

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

$(document).on("click", "#vegetarian", yelpInfo2);

function yelpInfo2() {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    var yelpAPIkey = "szilVGiGWvqemg5iRsO467vT0806iGe5kazKMT1iONvN4XqA4fzTGbKMtpuIudFVSiRB7ikZ_ZWvI0Xr0ImMpuCdS_sMsejPHdti0ml3Wj_4TiirKzYxKZ7rWeB7XXYx"

    $("#yelp-info").empty();
    
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=vegetarian&limit=4&latitude=" + currentLocation.lat + "&longitude=" + currentLocation.lng

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
            var restPos = {
                lat: results[i].coordinates.latitude,
                lng: results[i].coordinates.longitude
            };
            var marker = new google.maps.Marker({
                position: restPos,
                map: map,
                title: results[i].name,
                animation: google.maps.Animation.DROP,
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
            marker.setMap(map);
        }

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

var foodName;
var foodPrice;
var foodLimit;

$("#submit-button").on("click", function (event) {
    
    event.preventDefault();

    foodName = $("#food-input").val().trim();
    foodPrice = $("#price-input").val();
    foodLimit = $("#limit-input").val();

    if(foodName == "" || foodName == null){
        $("#blank").text(" Please type in a food");
    }
    if(foodPrice == "" || foodPrice == null){
        $("#blank2").text(" Please select a number");
    }
    if(foodLimit == "" || foodLimit == null){
        $("#blank3").text(" Please select a number");
    }
    else {
    yelpInfo3();
    
    $("#food-input").val("");
    $("#price-input").val("");
    $("#limit-input").val("");
    $("#blank").text("");
    $("#blank2").text("");
    $("#blank3").text("");

    }
});

$(".main-btn").hover(function(){
    $(this).addClass("animated tada");
});

$(".main-btn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass("animated tada");
});

console.log(foodName);
console.log(foodPrice);
console.log(foodLimit);

function yelpInfo3() {

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    var yelpAPIkey = "szilVGiGWvqemg5iRsO467vT0806iGe5kazKMT1iONvN4XqA4fzTGbKMtpuIudFVSiRB7ikZ_ZWvI0Xr0ImMpuCdS_sMsejPHdti0ml3Wj_4TiirKzYxKZ7rWeB7XXYx"

    $("#yelp-info").empty();
    
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + foodName + "&limit=" + foodLimit + "&latitude=" + currentLocation.lat + "&longitude=" + currentLocation.lng + "&price=" + foodPrice + "&sort_rating"

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
            var restPos = {
                lat: results[i].coordinates.latitude,
                lng: results[i].coordinates.longitude
            };
            var marker = new google.maps.Marker({
                position: restPos,
                map: map,
                title: results[i].name,
                animation: google.maps.Animation.DROP,
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
            marker.setMap(map);
        }

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

var map;
var currentLocation = {};

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            map = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: currentLocation.lat,
                    lng: currentLocation.lng
                },
                zoom: 15
            });

            var marker = new google.maps.Marker({
                position: currentLocation,
                map: map,
                title: "YOU ARE HERE!!!",
                animation: google.maps.Animation.DROP,
                icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            })
            marker.setMap(map);
            console.log(currentLocation);
            console.log(map);
        })
    }
}
