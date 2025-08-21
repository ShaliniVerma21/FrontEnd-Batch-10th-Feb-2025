//Example 4: Using Modules
// userModule.js
const userModule = (() => {
    let users = []; // Private variable

    return {
        addUser: function(name) {
            users.push(name);
            console.log(`User  ${name} added.`);
        },
        listUsers: function() {
            console.log('Users:', users);
        }
    };
})();

// main.js
userModule.addUser ('Alice');
userModule.addUser ('Bob');
userModule.listUsers(); // Users: [ 'Alice', 'Bob' ]