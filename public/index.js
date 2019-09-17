// axios.post('/users', {name: 'Jenny', surname: 'Smith'}).then(res => {
//   console.log(res);
// }).catch(err => console.log(err)); //Catch для выведения возможной ошибки в консоль

// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/users');
// xhr.onload = () => {
//   console.log(JSON.parse(xhr.responseText));
// };
// xhr.send();


// let promiseObj = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5 + 5)
//   }, 2000);
// });
// console.log('Start', new Date().getSeconds())
// promiseObj.then(resolve => {
//   console.log(resolve);
//   console.log('End', new Date().getSeconds());
// });


const fetchApi = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
     xhr.onload = () => {
       const response = JSON.parse(xhr.responseText);
       resolve(response);
     };
     xhr.onerror = () => {
       const err = JSON.parse(xhr.responseText);
       reject(err);
     }
     xhr.send();
   });
}

fetchApi('/users').then(resolve => {
  console.log(resolve);
});