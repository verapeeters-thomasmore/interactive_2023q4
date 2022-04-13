console.log("------------------------ voegInOld");
function voegIn(array1, array2)
{
    return array1.slice(0,array1.length/2).concat(array2).concat(array1.slice(array1.length/2));
}
console.log(voegIn([1,2,3,4],[20,30,40]));
