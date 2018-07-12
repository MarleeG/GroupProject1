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

function searchNews () {
    var search = "georgia";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // var search = $("#states option").value(); //$("#states option").value();
    url += '?' + $.param({
      'api-key': "352588500d894acf9e98863456d5095f",
      'q': search + "+politics"
    });
    $.ajax({
      url: url,
      method: "GET"
    }).then(function (x) {
        // console.log(x.response.docs[0].web_url);
        // console.log(x.response.docs[0].headline.main);
        var articleIndex = x.response.docs
    
        for(var i = 0; i < articleIndex.length; i++){
            var newsUrl = articleIndex[i].web_url
            var newsTitle = articleIndex[i].headline.main
            var link = "<li><a href =' " + newsUrl + " '>" + newsTitle + "</a></li>";
            // console.log(link);
            $("#topStories").append(link);    
        }
        });
    }
    searchNews();