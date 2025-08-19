// userManagement.js
const users = [];

export function addUser (name) {
    users.push(name);
    console.log(`User  ${name} added.`);
}

export function removeUser (name) {
    const index = users.indexOf(name);
    if (index > -1) {
        users.splice(index, 1);
        console.log(`User  ${name} removed.`);
    } else {
        console.log(`User  ${name} not found.`);
    }
}

export function listUsers() {
    console.log("Current users:", users);
}