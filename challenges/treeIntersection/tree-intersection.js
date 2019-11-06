
function treeIntersection(firstTree, secondTree) {
  const arrOne = firstTree.preOrder(firstTree.root);
  const arrTwo = secondTree.preOrder(secondTree.root);
  const resultsArr = [];
  for(let i = 0; i < arrOne.length; i ++) {
    if(arrTwo.includes(arrOne[i])) resultsArr.push(arrOne[i]);
  }
  return resultsArr;
}

module.exports = treeIntersection;
