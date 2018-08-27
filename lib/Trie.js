export default class Trie {
  constructor() {
    this.wordCount = 0;
    this.root = null; 
  }


  insert(data) {
    this.wordCount += 1; 
  }

  count() {
    //count how many words have been inserted
    return this.wordCount; 
  }

  suggest(data) {
    //take in a word prefix and return an array of words that match the desired prefix
    let matchingWords = [];
    return matchingWords; 
  }
  
}