const myurl = new URL('https://www.google.com:8080/search?q=javascript&user=tester#bottom');

console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.pathname);
console.log(myurl.search);
console.log(myurl.hash);