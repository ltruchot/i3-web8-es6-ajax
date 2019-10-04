const nombres = [
  1, 2, [78, 83, [90], 4, [145, [43, 78, [79,
    [789]]]], 78],
];
function recurse(arr) {
  for (const el of arr) {
    if (typeof el === 'number') {
      console.log(el);
    } else {
      recurse(el);
    }
  }
}
recurse(nombres);
