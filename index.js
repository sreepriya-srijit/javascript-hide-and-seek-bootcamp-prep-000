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
<<<<<<< HEAD
  // return document.querySelector('#grand-node div div div div');
  let node = document.getElementById('grand-node')
=======
  //let node = document.getElementById('grand-node')
>>>>>>> d54d1b550af636d16a465be1b144c22cebe04ce4
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
<<<<<<< HEAD

=======
} return document.querySelector('#grand-node div div div div');
>>>>>>> d54d1b550af636d16a465be1b144c22cebe04ce4
 }
 
 function increaseRankBy(n){
    const element =  document.getElementById('app').querySelectorAll('.ranked-list');
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML= parseInt( element[i].innerHTML) + n;
    }
 }