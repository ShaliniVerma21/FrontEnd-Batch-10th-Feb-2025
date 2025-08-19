//Example 3: Using Modules for Abstraction

// main.js
import { addUser , removeUser , listUsers } from './userManagement.js';

addUser ('Alice');
addUser ('Bob');
listUsers(); // Current users: [ 'Alice', 'Bob' ]
removeUser ('Alice');
listUsers(); // Current users: [ 'Bob' ]