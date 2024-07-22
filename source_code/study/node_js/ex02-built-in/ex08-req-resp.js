
const request = new Request('https://jsonplaceholder.typicode.com/posts',
  {
    method: "POST",
    body: JSON.stringify({
      title: '홍',
      body: '길동',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
);

console.log(request);
console.log('\n');
fetch(request)
  .then(response => {
    console.log(response);
    response.json();
  })
  .then(data => { console.log(data) })
