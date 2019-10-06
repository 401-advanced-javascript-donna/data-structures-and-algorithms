const { LinkedList } = require('../linkedList/linked-list');

function mergeList(llOne, llTwo) {
  const list = new LinkedList();
  list.append(llOne.head.data);
  list.append(llTwo.head.data);
  let llOneNode = llOne.head;
  let llTwoNode = llTwo.head;

  let num; 
  llOne.size > llTwo.size ? num = llOneNode : num = llTwoNode;

  while(num.next) {
    if(llOneNode.next) {
      list.append(llOneNode.next.data);
      llOneNode = llOneNode.next;
    }
    if(llTwoNode.next) {
      list.append(llTwoNode.next.data);
      llTwoNode = llTwoNode.next;
    }
    llOne.size > llTwo.size ? num = llOneNode : num = llTwoNode;
  }
  return list;
}

module.exports = {
  mergeList
};