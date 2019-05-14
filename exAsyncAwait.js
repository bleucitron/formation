"use strict";

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

function asyncCall0() {
  console.log('calling');
  resolveAfter2Seconds().then(function(value) {
    console.log(value); // 'resolved'
  });
}

asyncCall0();

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result); // 'resolved'
}

asyncCall();

const o = {
  e: 0,
  a: 2
}
