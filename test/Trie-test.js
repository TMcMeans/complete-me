 import { expect, assert } from 'chai'
 import Trie from '../lib/Trie'
 import locus from 'locus'
 import fs from 'fs'
    
 describe('TRIE', () => {
  let prefixTrie;

  beforeEach(() => {
    prefixTrie = new Trie();
  });

 it('should return true', () => {
     assert.equal(true, true);
   });

 describe('INSERT', () => {
    it('should take a word and add one to count', () => {
      prefixTrie.insert('bye');
      expect(prefixTrie.count()).to.equal(1);
    });

    it('should insert multiple words into the trie', () => {
      prefixTrie.insert('bye');
      prefixTrie.insert('hello');
      expect(prefixTrie.count()).to.equal(2);
    });
   
 });

 describe('SUGGEST', () => {
  it('should correctly return an array with words from a suggested prefix', () => {
      prefixTrie.insert('child');
      prefixTrie.insert('chai');
      prefixTrie.insert('chop');
      prefixTrie.insert('church');
      prefixTrie.suggest('ch');
      console.log(prefixTrie.wordList);
      expect(prefixTrie.wordList).to.equal([ 'child', 'chai', 'chop', 'church' ]);
    });
 });

});  