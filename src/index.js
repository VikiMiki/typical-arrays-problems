
exports.min = function min (array) {
    if ( array === undefined || array.length == 0 )
    return 0;
    else
      return Math.min.apply(Math, array);
}

exports.max = function max (array) {
    if ( array === undefined || array.length == 0 )
    return 0;
    else
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
    let sum=0;
    let res=0;
    if ( array === undefined || array.length == 0 )
    {
    return 0;
    }
    else
    {
    for (let i = 0; i < array.length; i++) {
        sum=sum+array[i];
      }
    }
    res=sum/array.length;
    return res;
}
