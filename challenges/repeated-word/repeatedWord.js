const repeatedWord = string => {
  string = string.replace(/[.,?!]/g, '');
  const wordArray = string.split(' ');
  const lib = {};
  let repeatWord;
  for(let word of wordArray) {
    word = word.toLowerCase();
    if(lib[word]) {
      repeatWord = word;
      break;
    } else {
      lib[word] = 1;
    }
  }
  return repeatWord;
};

module.exports = repeatedWord;