function moveLeft2(){
    const child2 = document.getElementsByClassName("child2")[0];
    var items2 = child2.children;
    item2 = items2[6];
    items2[6].remove();
    child2.insertBefore(item2, child2.firstChild);
  }
  
function moveRight2(){
    var child2 = document.getElementsByClassName("child2")[0];
    var items2 = child2.children;
    item2 = items2[0];
    items2[0].remove();
    child2.insertBefore(item2, child2[-1]);
  
  }


document.querySelector('.parent2 .leftarrow').addEventListener('click', moveLeft2);
document.querySelector('.parent2 .rigtharrow').addEventListener('click', moveRight2); 