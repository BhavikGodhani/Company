
function array(a1,a2){
 return a1.filter(x => a2.indexOf(x) != -1);
}
console.log(array([1,2,3,4,5],[4,5,6,7,8]));