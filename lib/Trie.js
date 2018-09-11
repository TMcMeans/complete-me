const Node = require('../lib/Node')

module.exports = class Trie {
  constructor() {
    this.wordCount = 0; 
    this.rootNode = new Node();
    this.wordList = [];
  }

  count() {
    //count how many words have been inserted
    return this.wordCount; 
  }

  insert(word) {
    //wordCount needs to be incremented
    this.wordCount++;
    //split word and turn into lowercase array of letters
    word.toLowerCase();
    let letters = word.split('');
    //change currNode to rootNode
    let currNode = this.rootNode; 
    //loop through letters and if letter exists as a child on rootNode then traverse down to next child
    letters.forEach( (letter, i) => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else {
        //if letter doesnt exist then add a new node with letter as a child of currNode 
        currNode.children[letter] = new Node(letter); 
        currNode = currNode.children[letter]; 
      }
      //find inserted word's last letter
      if (i === letters.length - 1) {
        //set that currNode's (of the letter) endOfWord to true and the finalWord to the inserted word
        currNode.endOfWord = true;
        currNode.finalWord = word; 
      }
    });
    
  }

  suggest(prefix) {
    //take prefix and turn into array of lowercase letters
    prefix.toLowerCase();
    let prefixArray = prefix.split('');
    let currNode = this.traverseTrie(prefixArray);
    this.findLastLetter(currNode);
    this.wordList.sort( (a, b) => {
      return a.selectedCount > b.selectedCount 
    })
    this.wordList.map( node => {
      return node.finalWord; 
    })
    return this.wordList;
  }

  traverseTrie(array) {
    //let currNode start at rootNode
    let currNode = this.rootNode; 
    //traverse trie and look for if the rootNode has a child that is one of the prefix letters then traverse to that letter until you reach the last prefix letter
    array.forEach( letter => {
       if (currNode.children[letter]) {
        currNode = currNode.children[letter]; 
      }
    });
    return currNode; 
  }

  findLastLetter(node) {
    if (node.endOfWord) {
      this.wordList.push(node);
   }
    //uses Object.keys to find all of the next letters after the prefix for words that match and save to an array
    let restOfLetters = Object.keys(node.children);
    //iterate over array and for each letter set node to traverse and recursively call this method to traverse to last letter 
    restOfLetters.forEach( letter => {
      this.findLastLetter(node.children[letter]);
    });
  }

  select(word) {
   let splitLetters = word.toLowerCase().split('');
   let lastLetter = traverseTrie(splitLetters);
   lastLetter.selectedCount++;
  }


  populate(dictionary) {
    //iterate through dictionary and add each word to the trie
    dictionary.forEach( word => {
      this.insert(word.toLowerCase());
    });
  }

}

// const prefixTrie = new Trie();
// prefixTrie.populate(dictionary);
// console.log(prefixTrie.suggest('ch'));
// console.log(prefixTrie.wordList);
