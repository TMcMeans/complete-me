module.exports = class Node {
  constructor (letter) {
    this.value = letter;
    this.children = {};
    this.endOfWord = false; 
    this.finalWord = null;
    this.selectedCount = 0;
  }

}