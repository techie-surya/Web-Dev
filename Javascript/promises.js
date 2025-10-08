function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    }
    else {
      reject("failure: weak connection");
    }
  });
}

savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved. promise was resolved");
    console.log("result: ", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved. promise was resolved");
    console.log("result: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error: ", error);
  })