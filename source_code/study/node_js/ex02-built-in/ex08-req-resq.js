
const request = new Request('https://jsonplaceholder.typicode.com/posts',
    {
        method: "POST",
        body: JSON.stringify({
            title: '홍',
            body: '길동',
            userID: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    }
);

console.log(request);
console.log('\n');
fetch(request)
    .then(response => {
        console.log(response);
    })