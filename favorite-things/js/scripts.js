$(document).ready(function(){
  $("#submit-button").click(function(event){
    event.preventDefault();

    var favorite1 = $("#favorite1").val();
    var favorite2 = $("#favorite2").val();
    var favorite3 = $("#favorite3").val();

    console.log(favorite1);
    console.log(favorite2);
    console.log(favorite3);

    var favorites = []
    favorites.push(favorite1)
    favorites.push(favorite2)
    favorites.push(favorite3)

    console.log(favorites)
    favorites

    $(".favorite1").text(favorites[0])
    $(".favorite2").text(favorites[1])
    $(".favorite3").text(favorites[2])
  });
});


    // If not a triangle


  // if (side1 != NaN || side2 || NaN || side3 !=NaN){
  //     console.log("Enter a non-zero length");
  //
  // }else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
  //     console.log("Not a triangle");
  //
  // } else if (side1 === side2 && side2 === side3) {
  //     console.log("Triangle is equilateral");
  //
  // }else if (side1 === side2 || side2 === side3 || side1 === side3) {
  //     console.log("Triangle is isosceles");
  //
  // }else if (side1 != side2 != side3) {
  //     console.log("The triangle is scalene");
  // }else{
  //     console.log("How did you get here??");
  // }
  //
  // });


//   if (side1 === side2 && side2 === side3) {
//     console.log("Triangle is equilateral");
//
// }else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("Triangle is isosceles");
//
// }else if (side1 != side2 != side3) {
//     console.log("The triangle is scalene");
// }else{
//     console.log("How did you get here??");
// }
//
