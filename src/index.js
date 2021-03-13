
exports.min = function min (array) {
    var min_value = null;
    if (!array || !array.length) return 0;
    for (let i=0; i<array.length; i++){
        if (min_value > array[i]) min_value=array[i];
    }
  return min_value;
}

exports.max = function max (array) {   
    var max_value = null;
    if (!array || !array.length) return 0;
    for (let i=0; i<array.length; i++){
        if (max_value < array[i]) max_value=array[i];
    }
    return max_value;
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0; 
    var avg_value = 0;
    if (array.length == 0) avg_value=0;
    for (var i=0; i<array.length; i++){
        avg_value= avg_value+array[i];
    }
    avg_value = avg_value/i;
    return avg_value;
}
