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
    
 

    $("#states option [value=1]").on("click" , function(){
        // $(this)
        console.log(this)
    });