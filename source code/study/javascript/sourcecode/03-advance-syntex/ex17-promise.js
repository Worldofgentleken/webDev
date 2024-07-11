
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
};

fetchData().then(data => {
  console.log(data); // Data received
});


const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Operation succeeded');
  } else {
    reject('Operation failed');
  }
});

promise1.then(message => {
  console.log(message); // Operation succeeded
}).catch(error => {
  console.log(error);
});

const promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Operation succeeded');
  } else {
    reject('Operation failed');
  }
});

promise2.then(message => {
  console.log(message); // Operation succeeded
}).catch(error => {
  console.log(error);
});

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

delay(2000).then(() => {
  console.log('2 seconds have passed');
});

