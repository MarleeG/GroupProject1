$(function () {
    
    // Navbar Icon
    $('.animated-icon1').click(function(){
        $(this).toggleClass('open',);
    });

   

// click event to launch representatives page
$("#launchBtn").on("click", function (event) {

    //prevents page from refreshing on the click of the start button
    event.preventDefault();
    
    // hides start button after it is clicked
    $(this).css("display", "none", "background-color", "white");
    // $("#titlePage").css("display", "none");
    // $("#myReps").css("display", "block");

    });
});
/* 

ajax call for NYT

*/
var queryURL = "http://api.nytimes.com/svc/topstories/v2/politics.json?api-key=352588500d894acf9e98863456d5095f" 

$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[0].url);

        var articleIndex = response.results
        
        for(var i = 0; i < articleIndex.length; i++ ){
            // console.log(articleIndex[i].url);
            // console.log(articleIndex[i].title);
            var newsUrl = articleIndex[i].url;
            var newsTitle = articleIndex[i].title;
            var link = "<li><a href =' " + newsUrl + " '>" + newsTitle + "</a></li>";
            // console.log(link);
            $("#topStories").append(link);
        }
    });
   
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
        Missippi: "MS",
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


Add Comment