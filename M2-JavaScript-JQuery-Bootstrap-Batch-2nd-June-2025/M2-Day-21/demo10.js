//Example 10: Encapsulation with Proxies
const handler = {
    get(target, prop) {
        if (prop === 'secret') {
            return 'Access denied';
        }
        return target[prop];
    }
};

const user = new Proxy({ name: 'Alice', age: 30 }, handler);

console.log(user.name); // Alice
console.log(user.secret); // Access denied