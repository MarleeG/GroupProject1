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


$.ajax({
    url: '//www.wikidata.org/w/api.php',
    data: { action: 'wbgetentities', ids: mw.config.get('wgWikibaseItemId'), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      console.log('wb label', x.entities.Q39246.labels.en.value);
      console.log('wb description', x.entities.Q39246.descriptions.en.value);
    }
  });
  

/* 

  This is an API for NY Times to pull what the user searches in regards to news articles.

*/
//---------------------------------------------------------
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=352588500d894acf9e98863456d5095f&q=" + searchInput + "&begin_date=" + beginYear + "&end_date=" + endYear;

// $("#search-submit").on("click", function (event) {
//     event.preventDefault();
//     console.log("blah")
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        console.log(result)
        console.log(result["response"].docs[0].headline.main)
        var articleElement = $("#top-articles");
        
        articleElement.append(result["response"].docs[0].headline.main);
        
        
        // for (var i = 0; i < 5; i++) {
        //     var nameDiv = $("<div>").text(result.docs[i].headline.main);
        //     articleElement.append(nameDiv);
        // }
    });

    //---------------------------------------------------------