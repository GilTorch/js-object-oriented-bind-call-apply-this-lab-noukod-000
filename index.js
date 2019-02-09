//Your code here
function justInvoke(fn){
 return fn.call()
}

function setThisWithCall(fn,thisValue,arg){
  return fn.call(thisValue,arg);
}