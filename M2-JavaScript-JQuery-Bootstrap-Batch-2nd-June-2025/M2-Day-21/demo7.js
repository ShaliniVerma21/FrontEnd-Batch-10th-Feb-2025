//Example 7: Encapsulation with Getters and Setters
class Rectangle {
    constructor(width, height) {
        this._width = width; // Protected property
        this._height = height; // Protected property
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        }
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 100