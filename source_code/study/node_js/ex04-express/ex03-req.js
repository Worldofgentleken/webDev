const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const todos = [{ id: 1, task: '청소하기' }];

const info = (req) => {
  console.log('클라이언트로부터 요청을 받음');
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log('Headers:', req.headers);
};

const parseJsonBody = (req, res, callback) => {
  if (req.is('application/json')) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
        callback();
      } catch (err) {
        res.status(400).json({ error: 'Invalid JSON' });
      }
    });
  } else {
    callback();
  }
};

// GET 요청 처리 - HTML 파일 응답
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'ex02-req.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

// GET 요청 처리 - 할 일 목록 조회
app.get('/todos', (req, res) => {
  info(req);
  res.json(todos);
});

// GET 요청 처리 - 특정 할 일 조회
app.get('/todos/:id', (req, res) => {
  info(req);
  const id = parseInt(req.params.id, 10);

  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// GET 요청 처리 - 특정 할 일 조회
app.get('/todosquery', (req, res) => {
  info(req);
  console.log('query:', req.query);

  const id = parseInt(req.query.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// POST 요청 처리
app.post('/todos', (req, res) => {
  info(req);
  parseJsonBody(req, res, () => {
    console.log('Body:', req.body);

    const lastTodo = todos[todos.length - 1];
    const newId = lastTodo ? lastTodo.id + 1 : 1; // 마지막 ID에 1을 더하거나, 리스트가 비어 있을 경우 ID를 1로 설정
    const newTodo = { id: newId, task: req.body.task };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
});

// PUT 요청 처리
app.put('/todos/:id', (req, res) => {
  info(req);
  parseJsonBody(req, res, () => {
    console.log('Body:', req.body);

    const id = parseInt(req.params.id, 10);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      todos[index] = { id, ...updatedTodo };
      res.json(todos[index]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });
});

// DELETE 요청 처리
app.delete('/todos/:id', (req, res) => {
  info(req);

  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex(todo => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
