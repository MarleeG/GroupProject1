window.onload = function () {
    displayData();
}

function displayData() {

    var members = JSON.parse(localStorage.getItem("members"));
    if (!Array.isArray(members)) {
        members = [];
    }

    var repMembers = JSON.parse(localStorage.getItem("repMembers"));
    if (!Array.isArray(repMembers)) {
        repMembers = [];
    }


    var input = localStorage.getItem("state");
    var selectedState = localStorage.getItem("state-name");
    $("#header").text(selectedState);

    // Congress Details
    console.log("Senate data: ", members); //senate
    console.log("Rep Data: ", repMembers); //HOR
    console.log("What state? " , input);

    var senCount = 0;

    for (var i = 0; i < members.length && senCount < 3; i++) {


        if (input == members[i].state) {
            senCount++;
           
            var firstName = members[i].first_name;
            var lastName = members[i].last_name;
            var fullName = firstName + " " + lastName;
            var contactNum = members[i].phone;

            // Twitter 
            var twitterAccount = members[i].twitter_account;
            var senatePic = "https://twitter.com/" + twitterAccount + "/profile_image?size=original";

            if (senCount === 1) {
                // Name
                $("#senOneName").text(fullName);

                // Party afflication
                if (members[i].party === "R") {
                    $("#senOneParty").text("Republican");
                } else if (members[i].party === "D") {
                    $("#senOneParty").text("Democrat");
                } else if (members[i].party != "R" || members[i].party != "D") {
                    $("#senOneParty").text("Party:" + members[i].party);
                }

                // Next Election
                $("#senOneNextElect").text("Next election: " + members[i].next_election);

                // Contact Number
                if (contactNum === null){
                    $("#senOneContactNum").text("000-000-0000");
                }else{
                    $("#senOneContactNum").html(contactNum);
                }

                // Website Link
                $("#senOneSite").attr("href", members[i].url);
                $("#senOneSite").attr("target", "_blank");

                // Senate Image
                if (twitterAccount === null || input === "KY" || input === "VA") {
                    $("#senOneImg").attr("src", "assets/images/american-flag.jpg");
                    $("#senOneImg").addClass("american_flag");
                } else {
                    $("#senOneImg").attr("src", senatePic);
                    $("#senOneImg").addClass("senatePic");
                    $("#senOneTwitter").attr("href", ("https://twitter.com/" + twitterAccount ));
                }

            } else if (senCount === 2) {

                // Name
                $("#senTwoName").text(fullName);

                // Party afflication
                if (members[i].party === "R") {
                    $("#senTwoParty").text("Republican");
                } else if (members[i].party === "D") {
                    $("#senTwoParty").text("Democrat");
                } else if (members[i].party != "R" || members[i].party != "D") {
                    $("#senTwoParty").text("Party:" + members[i].party);
                }

                // Next Election
                $("#senTwoNextElect").text("Next election: " + members[i].next_election);

                // Contact Number
               

                if (contactNum === null){
                    $("#senTwoContactNum").append("000-000-0000");
                }else{
                     $("#senTwoContactNum").text(contactNum);
                }

                // Website Link
                $("#senTwoSite").attr("href", members[i].url);
                $("#senTwoSite").attr("target", "_blank");

                // Senate Image
                if (twitterAccount === null || input === "IN" || input === "AL") {
                    $("#senTwoImg").attr("src", "assets/images/american-flag.jpg");
                    $("#senTwoImg").addClass("american_flag");
                } else {
                    $("#senTwoImg").attr("src", senatePic);
                    $("#senTwoImg").addClass("senatePic");
                    $("#senTwoTwitter").attr("href", ("https://twitter.com/" + twitterAccount ));
                }
            }
        }
    }

    var repCount = 0;

    for (var j = 0; j < repMembers.length && repCount < 2; j++) {
       
        if (input == repMembers[j].state) {
            repCount++;

            var repContactNum = repMembers[j].phone;
            var repFirstName = repMembers[j].first_name;
            var repLastName = repMembers[j].last_name;
            var repFullName = repFirstName + " " + repLastName;
            var repTwitterAccount = repMembers[j].twitter_account;
            var repPic = "https://twitter.com/" + repTwitterAccount + "/profile_image?size=original";
            
            // Name
            $("#repName").text(repFullName);

            // Phone
            if (repMembers[j].phone === null){
                $("#contactNum").text("000-000-0000");
            }else{
                $("#contactNum").text(repContactNum);
            }
            
            // Website Link
            $("#repSite").attr("href", repMembers[j].url);
            $("#repSite").attr("target", "_blank");

            // Party
            if (repMembers[j].party === "R") {
                $("#repParty").text("Republican");
            } else if (repMembers[j].party === "D") {
                $("#repParty").text("Democrat");
            } else if (repMembers[j].party != "R" || repMembers[j].party != "D") {
                $("#repParty").text("Party:" + repMembers[j].party);
            }

            // Next Election
            $("#repNextElect").text("Next election: " + repMembers[j].next_election);

            // HOR Image
            if (repTwitterAccount === null || input ==="AZ") {
                $("#repImg").attr("src", "assets/images/american-flag.jpg");
                $("#repImg").addClass("american_flag");
            } else {
                $("#repImg").attr("src", repPic);
                $("#repImg").addClass("repImg");
                $("#repTwitter").attr("href", ("https://twitter.com/" + repTwitterAccount ));
            }

        }
    }
}