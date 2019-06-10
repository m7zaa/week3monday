// $(document).ready(function() {
//     var flavors = ["vanilla", "chocolate", "strawberry"];
//     var classNames = ["flavor1", "flavor2", "flavor3"]
//     classNames.forEach(function(myClass) {
//       flavors.forEach(function(flavor) {
//         $("." + myClass).text(flavor);
//       });
//     });
//
//   });

$(document).ready(function() {
  var flavors = ["vanilla", "chocolate", "strawberry"];
  var classNames = ["flavor1", "flavor2", "flavor3"]
  var i = 0;
  flavors.forEach(function(flavor) {
    $("." + classNames[i]).text(flavor);
    i++;
  });
});
