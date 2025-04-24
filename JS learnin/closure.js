const func = () => {
  let count = 0;
  const increment = () => {
    count++;
  };
  let message = `Count is ${count}`;
  const showMessage = () => {
    console.log(message);
  };
  return [showMessage, increment];
};

const [showMessage, increment] = func();
increment();
increment();
debugger;
showMessage(); //count is 0 because when initing the showMessage , closure created with the message string

//======//======//======//======//======//======//======

const test = () => {
  let x = {};
  const change = (key, value) => {
    x = value;
  };
  let k = x;
  const log = () => {
    console.log("k", k);
  };
  return [change, log];
};
const [change, log] = test();
change("wtf", "test");

//======//======//======//======//======//======//======

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
