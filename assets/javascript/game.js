
  //var counter = 0;
  //var gemvalue = 0;
  $(".crystal-image").on("click", function() {
    // Each time the user clicks the crystal the score goes up by amount.
    //gemvalue += 1;
    var gemvalue = Math.floor(Math.random() * 50);
    // We then output the number of times the crystal is clicked.
    alert("Your score is now " + gemvalue);
  });

  
  var random = Math.floor(Math.random() * 120);
  $("#random").html('<h2> The Random Number is </h2> + random');

  console.log("Random number is " + random);
