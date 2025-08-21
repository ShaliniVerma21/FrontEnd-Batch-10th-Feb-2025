//Example 6: Using WeakMaps for Private Data
const privateData = new WeakMap();

class Car {
    constructor(brand) {
        privateData.set(this, { brand, speed: 0 });
    }

    accelerate(amount) {
        const data = privateData.get(this);
        data.speed += amount;
        console.log(`${data.brand} accelerated to ${data.speed} km/h`);
    }

    getSpeed() {
        return privateData.get(this).speed;
    }
}

const myCar = new Car('Toyota');
myCar.accelerate(50); // Toyota accelerated to 50 km/h
console.log(myCar.getSpeed()); // 50