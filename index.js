function getFirstSelector(selector)
{
  const element =  document.getElementById('app').querySelector(selector);
  return element;
}

 function nestedTarget(){
   const element = document.querySelector('#nested .target');
   return element;
 } 
 
 function deepestChild(){
  // return document.querySelector('#grand-node div div div div');
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node

 }
 
 function increaseRankBy(n){
    const element =  document.getElementById('app').querySelectorAll('.ranked-list');
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML= parseInt( element[i].innerHTML) + n;
    }
 }