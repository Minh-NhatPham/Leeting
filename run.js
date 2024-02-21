const React = (function () {
  let _val;
  function useState(initVal) {
    let state = _val || initVal;
    const setState = (_newVal) => {
      _val = _newVal;
      console.log("concac", _val);
      return _val;
    };
    return [state, setState];
  }

  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();
function BB() {
  const [count, setCount] = React.useState(1);

  return {
    getData: console.log(count),
    setData: () => setCount(2),
  };
}

const [count, setCount] = React.useState(1);
console.log(count);
setCount(2);
// console.log(count);
// console.log(count);
// BB().getData;
const x = BB().setData();
// console.log(x);
// BB().getData;
