// Add any extra import statements you may need here


// Add any helper functions you may need here


function findSignatureCounts(arr) {
  // Write your code here
  let visited = []; // Stack
  let signatureCounts = Array(arr.length).fill(0) // fill array with 0
  let rootIndexes = Array(arr.length).fill(-1); // fill array with -1

  for(let i = 0; i < arr.length; i++){
    let student = arr[i]
    // skip over the student's own yearbook
    if (visited.includes(student)){ 
      continue
    }
    visited.push(student)

    signatureCounts[i] = 1
    let next_i = student - 1
    while(next_i != i){
      signatureCounts[i] += 1
      rootIndexes[next_i] = i
      visited.push(arr[next_i])
      next_i = arr[next_i] - 1
    }
  }

  for (let i = 0; i < arr.length; i++){
    if(rootIndexes[i] != -1){
      signatureCounts[i] = signatureCounts[rootIndexes[i]]
    }
  }

  return signatureCounts;
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1];
var expected_1 = [2, 2];
var output_1 = findSignatureCounts(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2];
var expected_2 = [1, 1];
var output_2 = findSignatureCounts(arr_2);
check(expected_2, output_2);

// Add your own test cases here
