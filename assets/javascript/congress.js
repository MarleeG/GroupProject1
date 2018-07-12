var value = '';

window.onload = function () {
    officials();
}

function officials() {
    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    var senateURL = "https://api.propublica.org/congress/v1/115/senate/members.json";
    var houseURL = "https://api.propublica.org/congress/v1/115/house/members.json";


    function getStateInput() {

        var allStates = {
            Alabama: "AL",
            Alaska: "AK",
            Arizona: "AZ",
            Arkansas: "AR",
            California: "CA",
            Colorado: "CO",
            Connecticut: "CT",
            Delaware: "DE",
            Florida: "FL",
            Georgia: "GA",
            Hawaii: "HI",
            Idaho: "ID",
            Illinois: "IL",
            Indiana: "IN",
            Iowa: "IA",
            Kansas: "KS",
            Kentucky: "KY",
            Lousiana: "LA",
            Maine: "ME",
            Maryland: "MD",
            Massachusetts: "MA",
            Michigan: "MI",
            Minesota: "MN",
            Mississippi: "MS",
            Missouri: "MO",
            Montana: "MT",
            Nebraska: "NE",
            Nevada: "NV",
            New_Jersey: "NJ",
            New_Hempshire: "NH",
            New_Mexico: "NM",
            New_York: "NY",
            North_Carolina: "NC",
            North_Dakota: "ND",
            Ohio: "OH",
            Oklahoma: "OK",
            Oregon: "OR",
            Pennsylvania: "PA",
            Rhode_Island: "RI",
            South_Carolina: "SC",
            South_Dakota: "SD",
            Tennessee: "TN",
            Texas: "TX",
            Utah: "UT",
            Vermont: "VT",
            Virginia: "VA",
            Washington: "WA",
            West_Virginia: "WV",
            Wisconsin: "WI",
            Wyoming: "WY"
        }

        var x = document.getElementById("states").selectedIndex;
        var select = document.getElementsByTagName("option")[x].value;

        switch (select) {
            case "New Jersey": value = allStates.New_Jersey;
                break;
            case "New Hempshire": value = allStates.New_Hempshire;
                break;
            case "New Mexico": value = allStates.New_Mexico;
                break;
            case "New York": value = allStates.New_York;
                break;
            case "North Carolina": value = allStates.North_Carolina;
                break;
            case "North Dakota": value = allStates.North_Dakota;
                break;
            case "Rhode Island": value = allStates.Rhode_Island;
                break;
            case "South Carolina": value = allStates.South_Carolina;
                break;
            case "South Dakota": value = allStates.South_Dakota;
                break;
            case "South Dakota": value = allStates.South_Dakota;
                break;
            case "West Virginia": value = allStates.West_Virginia;
                break;
            default: value = allStates[select];
        }

        localStorage.setItem("state", value);

        var stateName = $("#states").val();
        localStorage.setItem("state-name", stateName);

        // jQuery.ajaxSetup({async:true});

        // Senate members
        $.ajax({
            url: corsAnywhere + senateURL,
            method: "GET",
            headers: {
                "X-API-Key": "nTqdhVl043lgXNZwCSzXRqY9KgYBi1KagPzKK3z4"
            }
        }).then(function (res) {
            houseMembers(function (any) {
                console.log("success");
                console.log(res);
                localStorage.setItem("members", JSON.stringify(res.results[0].members));
                localStorage.setItem("repMembers", JSON.stringify(any));
                window.location = "repMDB.html";
            })
        }).catch(function (err) {
            console.log("failure");
            console.log(err);
        });



        // HOR Members
        function houseMembers(callback) {
            $.ajax({
                url: corsAnywhere + houseURL,
                method: "GET",
                headers: {
                    "X-API-Key": "nTqdhVl043lgXNZwCSzXRqY9KgYBi1KagPzKK3z4"
                }
            }).then(function (response) {
                callback(response.results[0].members)

            }).catch(function (err) {
                console.log("failure");
                console.log(err);
            });
        }


    }
    $("#search-button").on("click", getStateInput);
}