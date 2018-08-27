 import { expect, assert } from 'chai'
 import Trie from '../lib/Trie'
 import Node from '../lib/Node'
    
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
      prefixTrie.insert('hi');
      expect(prefixTrie.count()).to.equal(1);
    });
 });

 describe('COUNT', () => {
  it('should correctly count how many words have been inserted', () => {
      expect(prefixTrie.count()).to.equal(0);
      prefixTrie.insert('bye');
      expect(prefixTrie.count()).to.equal(1);
      prefixTrie.insert('hi');
      expect(prefixTrie.count()).to.equal(2);
      prefixTrie.insert('sayonara');
      prefixTrie.insert('adios');
      expect(prefixTrie.count()).to.equal(4);
    });
 });



});  