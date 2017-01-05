function add (a,b) {
  return (a+b);
}

console.log(add(1,3));
console.log(add(2,3));

var addStatement = (a,b) => {
  return (a+b);
};

console.log(addStatement(5,5));

var addExpression = (a,b) => (a+b);

console.log(addExpression(10,10));
