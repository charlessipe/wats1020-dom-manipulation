//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
  
    console.log(voteCounts);
  
    console.log("hi");
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)

    $(".login-btn").click(function(){
      $(".form-control").hide(); // hide input forms
      $(".user-info").show(); // change text of user-fullname class to "First Last"
      //.html(userInfo.firstName + userInfo.lastName)
    });


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
    
    $(".view-details").click(function() {
     /* if(document.getElementsByClassName('view-details').innerHTML == "View details &raquo;"){
        alert('hi');
      }
     */
      
      //$(".view-details").text("Hide Details");
      
      
      if($(".view-details").text("View details »")){ // Conditional to check the text of the button
        $(".view-details").text("Hide Details"); // Change the text to "Show Details"
      }
      else if($(".view-details").text("Hide Details")){
        $(".view-details").text("View details »"); // Change the text to "Hide Details"
      }
      
      
      
      $(".details").toggle(); // Toggle text with details class
    });
  
  /*
     $(".view-details").toggle(function() {
          $(this).text("DON'T PUSH ME");
        }, function() {
          $(this).text("PUSH ME");
        });
    
    /*
  
    /*$(".pushme").toggle(function() {
          $(this).text("DON'T PUSH ME");
        }, function() {
          $(this).text("PUSH ME");
        });
    */
  
    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

    $(".vote").click(function(){
      console.log("voted");
      
      if(($(this).attr('data-vote') === 'great')){  // if data-vote attribute equals great, increment
         ++voteCounts.great;
      }
      else if(($(this).attr('data-vote') === 'greatest')){ // if data-vote attribute equals greatest, increment
        voteCounts.greatest ++;
      }
      voteCounts.total ++;
      console.log(voteCounts);
      var greatPercent = (voteCounts.great/voteCounts.total) + "%";  // Calculate percentage of great votes
      var greatestPercent = (voteCounts.greatest/voteCounts.total) + "%"; // Calculate percentage of greatest votes
      
      
      $(".great-progress").attr('style', greatPercent); // Change value of great progress attribute to greatPercent
      $(".greatest-progress").attr('style', greatestPercent); // Change value of greatest progress attribute to greatestPercent
      
    });
    
  
});
