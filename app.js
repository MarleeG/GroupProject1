var value = '';

$(document).ready(function () {
    FB.api(path, method, params, callback)


    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
        FB.init({
            appId: '{220447205444290}',
            version: 'v2.7'
        });

        $('#loginbutton,#feedbutton').removeAttr('disabled');


        function updateStatusCallback() {
            FB.api(
                "/post-id",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log("Facebook: ", response);
                        

                    } else {
                        console.log("FACEBOOK ERROR");
    
                    }
                }
            );
        }

        FB.getLoginStatus(updateStatusCallback);
    });

    
});

window.onload = function () {
    officials();
}

var globalValue = value;

function officials() {
    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    var url = "https://api.propublica.org/congress/v1/115/senate/members.json";

//     $.ajax({
//         GET /v3.0/me/feed HTTP/1.1
// Host: graph.facebook.com
//     })


    // Getting Value of user input
    function getStateInput(event) {
        $("#officials__name").empty();
        event.preventDefault();
        value = $("#officials__state").val();
        console.log("User Input/Value in scope: ", value);
        // grabValue(value);


        $("#officials__state").val("");

        function getRep() {
            $.ajax({
                url: corsAnywhere + url,
                method: "GET",
                headers: {
                    "X-API-Key": "nTqdhVl043lgXNZwCSzXRqY9KgYBi1KagPzKK3z4"
                }
            }).done(function (res) {
                console.log("success");
                console.log(res);
                displayData(res);
            }).catch(function (err) {
                console.log("failure");
                console.log(err);
            });
        }
        getRep();

        function displayData(response) {
            var data = response;
            var input = value.toUpperCase();

            console.log("The data: ", data.results[0].members);

            // data.results[0].members.length == 104
            for (var i = 0; i < data.results[0].members.length; i++) {
                if (input == data.results[0].members[i].state) {
                    $("#state").text("Your state is: " + data.results[0].members[i].state);
                    console.log("for loop:", data.results[0].members[i].state);
                    var firstName = data.results[0].members[i].first_name;
                    var lastName = data.results[0].members[i].last_name;
                    $("#officials__name").append("Senator: " + firstName + " " + lastName + "<br>");

                    if (data.results[0].members[i].in_office == true) {
                        $("#officials__name").append("Currently in office: Yes <br>");
                    } else if (data.results[0].members[i].in_office == false) {
                        $("#officials__name").append("Currently in office: No <br>");
                    }

                    if (data.results[0].members[i].party === "R") {
                        $("#officials__name").append("Party: Republican <br>");
                    } else if (data.results[0].members[i].party === "D") {
                        $("#officials__name").append("Party: Democrat <br>");
                    } else if (data.results[0].members[i].party != "R" || data.results[0].members[i].party != "D") {
                        $("#officials__name").append("Party: " + data.results[0].members[i].party + "<br>");
                    }

                    var linkTag = $("<a>");
                    var url = data.results[0].members[i].url;
                    linkTag.attr("href", url);
                    linkTag.attr("target", "_blank");
                    $("#officials__name").append(linkTag.html("Website <br>"));


                    // Phone Number
                    $("#officials__name").append("Phone: " + data.results[0].members[i].phone + "<br>");


                    // Contact form
                    var contact_from_tag = $("<a>");
                    var contact_form = data.results[0].members[i].contact_form;
                    contact_from_tag.attr("href", contact_form);
                    contact_from_tag.attr("target", "_blank");
                    $("#officials__name").append(contact_from_tag.html("Contact form <br>"));


                    // Twitter Acount
                    var twitterAccount = data.results[0].members[i].twitter_account;
                    var twitterTag2 = $("<a>");
                    twitterTag2.attr("class", "twitter-timeline");
                    twitterTag2.attr("href", "https://twitter.com/" + twitterAccount + "?ref_src=twsrc%5Etfw");
                    twitterTag2.attr("data-width", "400");
                    twitterTag2.attr("data-height", "500");
                    twitterTag2.attr("data-link-color", "#E81C4F");
                    $("#officials__name").append(twitterTag2.html("Tweets by " + firstName + " " + lastName + "<br>"));

                    var script = $("<script>");
                    script.attr("async");
                    script.attr("src", "https://platform.twitter.com/widgets.js");
                    script.attr("charset", "utf-8");
                    $("#officials__name").append(script);
                    $("#officials__name").append("<hr>");
                }
            }
        }
    }
    $("#officials__submit").on("click", getStateInput);
}
