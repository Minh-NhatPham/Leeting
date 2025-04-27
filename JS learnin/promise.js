// const testReject = () => {
//   return new Promise((res, rej) =>
//     setTimeout(() => {
//       Promise.reject("dumemay");
//     }, 1000)
//   );
// };

// try {
//   console.log(
//     "???",
//     testReject().then((value) => console.info(value))
//   );
// } catch (error) {
//   console.log("trycatchne", error);
// }
//===========//===========//===========//===========//===========//===========//===========
const mockServiceThrow = () =>
  new Promise((res, rej) => {
    res("wtfbro");
    //   throw new Error("unit test error message");
  }).then((log) => {
    console.log(log);
    return 1;
  });

const createContextAndDoc = async () => {
  return mockServiceThrow()
    .then((number) => {
      console.log("number", number); // number 1 is returned from previous then
      Promise.resolve(100);
      Promise.reject("eeee").catch((err) => console.log("eeeee", err));
      //Promise reject create a new promise , need to catch on that promise
      return 10;
    })
    .catch((number) => console.log("re", number)); //
};

createContextAndDoc()
  .then((value) => console.log("value,", value))
  //log 10 because the 10 was returned from previous then
  .catch((e) => {
    console.log("------------------");
    console.log(e.message);
    console.log("--------");
  });

/**
 * comparing async await vs promise
   const mockServiceThrow = () =>
  new Promise((res, rej) => {
    res("wtfbro");
    //   throw new Error("unit test error message");
  });

const promise2 = Promise.resolve(
  mockServiceThrow().then((log) => {
    return log + "adu";
  })
).then((value) => {
  return value + 1;
});
//   .then((value) => {
//     console.log(value);
//   });
const testAysc = async () => {
  const test1 = await mockServiceThrow();
  const test2 = await promise2;
  console.log("test21", test1, test2);
  console.log("testwtf");
};
testAysc();
   */
//===========//===========//===========//===========//===========//===========//===========
//
const throwError = () => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      console.log("return before");
      res(new Error("wtf"));
    }, 1000)
  );
};

new Promise((res, rej) => {
  return throwError()
    .then((err) => res("then 1s" + err.message))
    .catch((err) => rej("catch 1s" + err.message));
})
  .catch((err) => console.log("dsadsa", err))
  .then((mess) => console.info("mess", mess));

//===========//===========//===========//===========//===========//===========//===========
//Promise chaining
const throwE = new Promise((res, rej) =>
  setTimeout(() => {
    console.log("return before");
    res(new Error("wtf"));
  }, 1000)
);

new Promise((res, rej) => {
  res(1);
})
  .then((mess) => {
    console.info("mess", mess);
    return throwE;
  })
  .then((eorr) => {
    console.log("then", eorr.message);
  })
  .catch((err) => console.log("dsadsa", err));
