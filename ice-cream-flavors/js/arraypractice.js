var anyNumbers = [1,2,3,4,5,6,7,8,9,10]
var addNumbers = []
anyNumbers.map(function(number) {
  addNumbers.push(number + 1);
})

alert(addNumbers)

var words = ["he", 'she', 'I', 'you', 'they'];
var capWords = [];
words.map(function(word) {
  capWords.push(word.toUpperCase());
});

alert(capWords);
