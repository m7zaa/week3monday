$(document).ready(function() {
  $(".user").submit(function(event) {
    var userInput = $("#sentence").val();
    wordArray = userInput.split(' ');
    console.log(wordArray);
    var filteredArray = [];
    // for (i = 0; wordArray[i].length > 3; i++) {
    //   filteredArray.push(wordArray[i]);
    // }
    wordArray.forEach(function(word) {
      if(word.length > 3) {
        filteredArray.push(word);
      }
    });
    console.log(filteredArray);
    sortedArray = filteredArray.sort();
    console.log(sortedArray);
    jointedArray = sortedArray.concat(wordArray);
    console.log(jointedArray);
    event.preventDefault();
  });
});
