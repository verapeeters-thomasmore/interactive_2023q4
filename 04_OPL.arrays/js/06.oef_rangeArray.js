function rangeArray(end, start = 1, step = 1)
{
    let a=[];
    for (getal = start; getal <= end; getal +=step )
    {
        a.push(getal);
    }
    return a;
}
console.log(rangeArray(12));

