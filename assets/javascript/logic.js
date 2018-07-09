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
    