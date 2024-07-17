import React from 'react';
import UserTable from './Ex03UserTable';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

function Ex03UserTableApp() {
  return (
    <div>
      <h1>User Table</h1>
      <UserTable users={users} />
    </div>
  );
}

export default Ex03UserTableApp;
