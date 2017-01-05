/*function getTempCallback(location, callback) {
  callback(undefined,78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err,temp) {
  if (err) {
    console.log('error', err);
  }
  else {
    console.log('success', temp);
  }
}); */

/*function addPromise (a,b) {
  return new Promise (function (resolve,reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    else {
      reject('Invalid Input');
    }
  });
}

addPromise(3,5).then(function(output){
  console.log('success',output);
}, function(err) {
  console.log('promise error',err)
});

addPromise('b',5).then(function(output){
  console.log('success', output);
}, function(err) {
    console.log('error',err);
});
*/






function subtractNumbers (a,b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve (a-b);
    } else {
      reject ('Invalid Input. Try again!');
    }
  })
};

subtractNumbers(5,4).then(function(difference){
  console.log('Difference:', difference);
}, function(err){
  console.log('Error:', err);
});

subtractNumbers(6,8).then(
  function (difference) {
    console.log('Difference:', difference);
  },
  function (err) {
    console.log('Error:', err);
  }
);

subtractNumbers(6,'a').then(
  function (difference) {
    console.log('Difference:', difference);
  },
  function (err) {
    console.log('Error:', err);
  }
);

Promise.all([
  (5,9),
  ('a',6),
  (7,9)
]).then(
  (numbers)=>{
    numbers.forEach(console.log(numbers));
    numbers.forEach(num => subtractNumbers(num))

  }
).catch((e)=>{console.log(e)});
